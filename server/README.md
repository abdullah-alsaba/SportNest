# SportNest Server

Express.js API for SportNest – Sports Facility Booking System.

## Setup

```bash
npm install
```

Copy `.env.example` to `.env` and fill in your values:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:3000
```

## Run

```bash
npm run dev
```

API runs at [http://localhost:5000](http://localhost:5000)

## API Routes

| Method | Route |
|--------|-------|
| POST | `/api/auth/register` |
| POST | `/api/auth/login` |
| GET | `/api/auth/me` |
| GET | `/api/facility` |
| POST | `/api/facility` |
| GET | `/api/booking/my` |
| POST | `/api/booking` |

## Deploy

Deploy this folder to Render, Railway, or similar. Set `CLIENT_URL` to your live frontend URL.
