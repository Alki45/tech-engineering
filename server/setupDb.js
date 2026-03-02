const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

const dbPath = path.resolve(__dirname, 'database.sqlite');

// Delete existing database for a fresh start
if (fs.existsSync(dbPath)) {
    fs.unlinkSync(dbPath);
}

const db = new sqlite3.Database(dbPath);

const run = (sql, params = []) => {
    return new Promise((resolve, reject) => {
        db.run(sql, params, function (err) {
            if (err) reject(err);
            else resolve(this);
        });
    });
};

async function setupDatabase() {
    try {
        console.log('🚀 Starting SQLite Database Setup...');

        // Create service_categories table
        await run(`
            CREATE TABLE IF NOT EXISTS service_categories (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                slug TEXT UNIQUE NOT NULL,
                title TEXT NOT NULL,
                hero_title TEXT,
                hero_subtitle TEXT,
                hero_image TEXT,
                overview_title TEXT,
                overview_text TEXT,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `);
        console.log('✅ Service categories table ready.');

        // Create services table
        await run(`
            CREATE TABLE IF NOT EXISTS services (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                category_id INTEGER,
                title TEXT NOT NULL,
                description TEXT,
                icon TEXT,
                features TEXT, -- JSON string
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (category_id) REFERENCES service_categories(id) ON DELETE CASCADE
            )
        `);
        console.log('✅ Services table ready.');

        // Seed Categories
        const categories = [
            ['ict', 'ICT Infrastructure', 'ICT Solutions & Networking', 'Building the digital bridge between legacy stability and future-proof innovation.', 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2866', 'Robust Systems for a Digital-First World.', 'We provide scalable, high-performance digital foundations tailored for modern industrial needs.'],
            ['power', 'Power Distribution', 'Powering The Future.', 'Scalable, resilient, and sustainable energy solutions for mission-critical industrial operations.', 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-FY65Vq4H0EsR_3EjSNcxUEz0Lblt0KRzq37Tnh9VqO23hLZ9IAuIizaU5Pkb6vOSPICDCKdA86aNPTMlmk1ICgAffL8ClwUmuwplIqxw3UKtNhvlWO0-cWIo7SHrJDIvNgd1QAsovakRENhmS4KLc7_7ultHEdgrFPgIs08KkaYYnbmH2ubr19FIEiHTovay80dOLcXQHeDUo3murfYppjd07PZk45NCT26wYtnjNPDU354wfFPLP9ppxujVdgzqbH8rDaUR4SP9', 'Reliability by Design.', 'From smart-grid integration to high-voltage distribution, we provide end-to-end electrical engineering.'],
            ['electromechanical', 'Electromechanical', 'Electromechanical Precision.', 'Fusing mechanical excellence with intelligent automation to drive industrial performance.', 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIJPA3gu--rno7Z9eJiVmOXmfCiD4VuAW6q8rSZRaTXgTwszTk9N6HC5ul4CTEAylVMz85QKMPZkk1MrZN-W4d_hVa_JoXE4bi3WAQ2b2E7Pp_LagI4FU6R191kwD0i6foJ5xBrPR15rtQo6gWRD7hPLhSnVbpguftPtWyrNthDO7a9jOEmrX7X3nADfrgGYu_RWXro7z-LG4l9Opp2kCgq84BLik_lT68Jh5qk0SpWtAm_VQOJ4LTUONOiMgnaCcr4h47OWQmsQhA', 'Engineering Perfection.', 'Our design process utilizes cutting-edge CAD modeling and iterative prototyping.'],
            ['automation', 'Industrial Automation', 'Next-Gen Industrial Automation.', 'Optimizing industrial throughput with intelligent robotic systems and precision control.', 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2940', 'The Future of Manufacturing.', 'We architect autonomous systems that redefine efficiency, reducing errors while maximizing industrial output.']
        ];

        for (const cat of categories) {
            await run(
                'INSERT INTO service_categories (slug, title, hero_title, hero_subtitle, hero_image, overview_title, overview_text) VALUES (?, ?, ?, ?, ?, ?, ?)',
                cat
            );
        }
        console.log('✅ Service categories seeded.');

        // Get Category IDs
        const catMap = {};
        await new Promise((resolve) => {
            db.all('SELECT id, slug FROM service_categories', [], (err, rows) => {
                rows.forEach(r => catMap[r.slug] = r.id);
                resolve();
            });
        });

        const serviceSeeds = [
            // ICT
            [catMap.ict, 'Enterprise Networking', 'Next-gen LAN/WAN solutions with SD-WAN for global connectivity.', 'hub', JSON.stringify(['SD-WAN', 'Multi-site VPN', 'Fiber Design'])],
            [catMap.ict, 'Cybersecurity', 'Zero-trust architecture and real-time threat detection for industrial assets.', 'shield_lock', JSON.stringify(['SIEM Management', 'Firewall Cluster', 'Penetration Testing'])],
            [catMap.ict, 'Cloud Integration', 'Hybrid and multi-cloud environments optimized for low latency.', 'cloud_done', JSON.stringify(['Azure/AWS', 'SaaS Migration', 'Edge Computing'])],
            [catMap.ict, 'Data Center', 'End-to-end management of server assets with optimized power redundancy.', 'storage', JSON.stringify(['N+1 Cooling', 'Colocation', 'Storage SAN'])],
            // Power
            [catMap.power, 'Renewable Integration', 'Seamless solar and wind hybrid systems designed to bridge the gap.', 'sun', JSON.stringify(['PV Array Design', 'Wind Integration', 'Hybrid Controllers'])],
            [catMap.power, 'Smart Grid Solutions', 'Automated distribution and real-time load balancing.', 'workflow', JSON.stringify(['Load Balancing', 'Real-time Analytics', 'Fault Detection'])],
            [catMap.power, 'Energy Storage', 'Industrial-scale storage solutions for zero-interruption.', 'battery', JSON.stringify(['Li-ion Storage', 'Backup Gen', 'UPS Arch'])],
            [catMap.power, 'Power Distribution', 'Professional design of sub-stations and high-voltage transmission.', 'network', JSON.stringify(['Substation Eng', 'HV Transmission', 'Protection'])],
            // Electromechanical
            [catMap.electromechanical, 'Industrial Air Systems', 'Custom process cooling for industrial cleanrooms.', 'wind', JSON.stringify(['Cleanroom HVAC', 'Thermal Analysis', 'Piping'])],
            [catMap.electromechanical, 'Precision Machining', 'High-tolerance component fabrication with CNC centers.', 'settings', JSON.stringify(['CNC Turning', 'Micron Tolerance', 'Tool & Die'])],
            [catMap.electromechanical, 'Control Systems', 'Bespoke electrical control panels for complex loads.', 'layers', JSON.stringify(['Panel Assembly', 'Custom Enclosures', 'Circuit Testing'])],
            [catMap.electromechanical, 'Metal Fabrication', 'Structural steel and alloy engineering for specialized machinery.', 'box', JSON.stringify(['Robotic Welding', 'Stress Analysis', 'Custom Frames'])],
            // Automation
            [catMap.automation, 'Robotic Integration', 'Deployment of 6-axis articulated arms for precision assembly.', 'cpu', JSON.stringify(['Fanuc/KUKA', 'End-Effectors', 'Safety PLCs'])],
            [catMap.automation, 'PLC Programming', 'Development of robust logic for heavy industry sequence control.', 'binary', JSON.stringify(['Ladder Logic', 'Structured Text', 'Testing'])],
            [catMap.automation, 'HMI Development', 'Intuitive interface design for real-time asset monitoring.', 'settings', JSON.stringify(['SCADA', 'Touch Interfaces', 'Data Logging'])],
            [catMap.automation, 'Autonomous Conveying', 'Smart transport systems with weight-tracking and sorting.', 'workflow', JSON.stringify(['Belt Logistics', 'AI Sorting', 'Load Management'])]
        ];

        for (const s of serviceSeeds) {
            await run(
                'INSERT INTO services (category_id, title, description, icon, features) VALUES (?, ?, ?, ?, ?)',
                s
            );
        }
        console.log('✅ Services seeded.');

        // Create contact_messages table
        await run(`
            CREATE TABLE IF NOT EXISTS contact_messages (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT NOT NULL,
                message TEXT NOT NULL,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `);
        console.log('✅ Contact messages table ready.');

        console.log('\n🚀 SQLite Database setup complete!');
    } catch (err) {
        console.error('❌ Error setting up database:', err);
    } finally {
        db.close();
    }
}

setupDatabase();
