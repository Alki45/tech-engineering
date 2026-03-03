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

// Admin API: Categories
app.post('/api/categories', async (req, res) => {
    const { slug, title, hero_title, hero_subtitle, hero_image, overview_title, overview_text } = req.body;
    try {
        const result = await db.run(
            'INSERT INTO service_categories (slug, title, hero_title, hero_subtitle, hero_image, overview_title, overview_text) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [slug, title, hero_title, hero_subtitle, hero_image, overview_title, overview_text]
        );
        res.status(201).json({ id: result.id, success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put('/api/categories/:id', async (req, res) => {
    const { id } = req.params;
    const { slug, title, hero_title, hero_subtitle, hero_image, overview_title, overview_text } = req.body;
    try {
        await db.run(
            'UPDATE service_categories SET slug=?, title=?, hero_title=?, hero_subtitle=?, hero_image=?, overview_title=?, overview_text=? WHERE id=?',
            [slug, title, hero_title, hero_subtitle, hero_image, overview_title, overview_text, id]
        );
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/api/categories/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await db.run('DELETE FROM service_categories WHERE id = ?', [id]);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Admin API: Services
app.get('/api/services', async (req, res) => {
    try {
        const rows = await db.query('SELECT * FROM services ORDER BY id DESC');
        res.json(rows.map(s => ({ ...s, features: JSON.parse(s.features || '[]') })));
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/services', async (req, res) => {
    const { category_id, title, description, icon, features } = req.body;
    try {
        const result = await db.run(
            'INSERT INTO services (category_id, title, description, icon, features) VALUES (?, ?, ?, ?, ?)',
            [category_id, title, description, icon, JSON.stringify(features || [])]
        );
        res.status(201).json({ id: result.id, success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put('/api/services/:id', async (req, res) => {
    const { id } = req.params;
    const { title, description, icon, features } = req.body;
    try {
        await db.run(
            'UPDATE services SET title=?, description=?, icon=?, features=? WHERE id=?',
            [title, description, icon, JSON.stringify(features || []), id]
        );
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/api/services/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await db.run('DELETE FROM services WHERE id = ?', [id]);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`MEETO Engineering PLC server running on port ${PORT}`);
});
