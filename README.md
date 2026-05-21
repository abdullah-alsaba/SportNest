# SportNest

Sports Facility Booking System — assignment submission layout.

## Folder structure

```
SportsNest/
├── client/     → Next.js frontend (separate GitHub repo)
└── server/     → Express + MongoDB API (separate GitHub repo)
```

## What to submit

| Item | Folder |
|------|--------|
| Client-side GitHub Repository | `client/` |
| Server-side GitHub Repository | `server/` |
| Live Website Link | Deploy `client/` (frontend URL) |

## Local development

**Terminal 1 — Server**

```bash
cd server
npm install
npm run dev
```

**Terminal 2 — Client**

```bash
cd client
npm install
npm run dev
```

- Frontend: http://localhost:3000
- API: http://localhost:5000

## Separate GitHub repositories

```bash
cd client
git init
git add .
git commit -m "initial commit: SportNest client"
git remote add origin YOUR_CLIENT_REPO_URL
git push -u origin main

cd ../server
git init
git add .
git commit -m "initial commit: SportNest server"
git remote add origin YOUR_SERVER_REPO_URL
git push -u origin main
```

Do not commit `.env` files. Use `.env.example` as reference.
