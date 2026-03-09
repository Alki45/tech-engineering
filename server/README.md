# ⚙️ MEETO Server - Backend

The backend API for the MEETO Engineering PLC platform, providing data persistence and administrative capabilities.

## 🛠️ Tech Stack
- **Express.js**: Fast, unopinionated, minimalist web framework.
- **SQLite3**: Serverless database for ease of deployment and local development.
- **Cors**: Cross-origin resource sharing.

## 📡 API Endpoints

### Public API
- `GET /api/health` - Check system status.
- `GET /api/categories` - List all service categories.
- `GET /api/categories/:slug` - Get details for a specific category.
- `POST /api/contact` - Submit a contact message.

### Admin API
- `GET /api/services` - List all services.
- `POST /api/services` - Create a new service.
- `PUT /api/services/:id` - Update service details.
- `DELETE /api/services/:id` - Remove a service.

## 🚀 Setup

### Initialize Database
To set up the initial SQLite database and sample data:
```bash
npm run db:setup
```

### Run Server
```bash
npm run dev
```
The server will start on port `5000` by default.
