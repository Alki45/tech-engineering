# 🏗️ MEETO Engineering PLC - Unified Infrastructure Platform

[![Vercel Deployment](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)

MEETO Engineering PLC is a high-end technical engineering platform delivering next-generation industrial systems. This repository contains the full stack for our corporate presence, service showcase, and administrative control systems.

---

## 🚀 Quick Start

The fastest way to get the entire environment running is using our unified dev script.

### 1. Unified Development Server
From the root directory, run:
```bash
./run-dev.sh
```
*This script automatically verifies dependencies in both `client` and `server` and starts them concurrently.*

---

## 🛠️ Tech Stack

### Frontend (`/client`)
- **React 19** & **Vite** - Lightning fast builds and modern component architecture.
- **Tailwind CSS** - For precision styling and responsive layouts.
- **Framer Motion** - High-end micro-animations and page transitions.
- **Lucide React** - Beautiful, consistent iconography.
- **React Router 7** - Seamless client-side navigation.

### Backend (`/server`)
- **Node.js** & **Express** - Robust API foundation.
- **SQLite** - Efficient, localized data storage for services and contact logs.
- **CORS** & **Dotenv** - Security and environment configuration.

---

## 📁 Project Structure

```bash
.
├── client/              # React frontend application
│   ├── src/
│   │   ├── components/  # Reusable UI components (Hero, Footer, etc.)
│   │   ├── pages/       # Page-level components
│   │   └── context/     # State management (Theme, etc.)
├── server/              # Express backend API
│   ├── server.js        # Main API entry point
│   ├── db.js            # Database configuration
│   └── setupDb.js       # Script to initialize the schema
├── run-dev.sh           # Unified startup script
└── vercel.json          # Deployment configuration
```

---

## 🌐 Deployment (Vercel)

This project is optimized for deployment on Vercel.

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the root directory.
3. For production: `vercel --prod`

> [!NOTE]
> The backend currently uses SQLite. For a persistent production database on Vercel, it is recommended to migrate to a managed PostgreSQL provider like Supabase or Neon.

---

## 🛡️ Excellence By Design

© 2026 MEETO Engineering PLC. Precision & Innovation.