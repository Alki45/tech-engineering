const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'MEETO Engineering PLC API is running' });
});

// GET category by slug with services
app.get('/api/categories/:slug', async (req, res) => {
    const { slug } = req.params;
    try {
        const [category] = await db.query('SELECT * FROM service_categories WHERE slug = ?', [slug]);
        if (!category) {
            return res.status(404).json({ error: 'Category not found' });
        }

        const services = await db.query('SELECT * FROM services WHERE category_id = ? ORDER BY id ASC', [category.id]);

        // Parse features JSON from strings
        const formattedServices = services.map(s => ({
            ...s,
            features: JSON.parse(s.features || '[]')
        }));

        res.json({ ...category, services: formattedServices });
    } catch (err) {
        console.error(`Error fetching category ${slug}:`, err);
        res.status(500).json({ error: 'Failed to fetch category data' });
    }
});

// GET all categories
app.get('/api/categories', async (req, res) => {
    try {
        const rows = await db.query('SELECT * FROM service_categories ORDER BY id ASC');
        res.json(rows);
    } catch (err) {
        console.error('Error fetching categories:', err);
        res.status(500).json({ error: 'Failed to fetch categories' });
    }
});

// POST contact form
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    try {
        await db.run(
            'INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)',
            [name, email, message]
        );
        res.json({ success: true, message: 'Message received. We will be in touch soon.' });
    } catch (err) {
        console.error('Error saving contact message:', err);
        res.status(500).json({ error: 'Failed to save message' });
    }
});

app.listen(PORT, () => {
    console.log(`MEETO Engineering PLC server running on port ${PORT}`);
});
