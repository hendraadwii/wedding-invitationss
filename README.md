# Wedding Invitation

## Project Structure

```
├── backend/          # Express.js + TypeScript + Supabase Admin SDK
├── frontend/         # Next.js 15 + TypeScript + Tailwind CSS
└── REQUIREMENT.MD    # Project requirements
```

## Getting Started

### Backend

```bash
cd backend
npm install
cp .env.example .env  # Configure Supabase credentials
npm run dev
```

### Frontend

```bash
cd frontend
npm install
cp .env.local.example .env.local  # Configure Supabase credentials
npm run dev
```

## Multi-Client Support

Add new weddings in `frontend/src/config/wedding.ts` and create route `/invitation/<slug>`.
