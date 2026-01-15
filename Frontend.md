# MYCHECKUP – FRONTEND DOCUMENTATION

## 1. Tech Stack
- React (Vite)
- Tailwind CSS
- React Router
- Axios

---

## 2. Frontend Responsibilities
- Render UI
- Fetch data from backend
- Handle authentication
- Protect admin routes

---

## 3. Pages

### Public Pages
- Home
- Test Listing
- Test Details
- Login
- Signup

### User Pages
- Profile

### Admin Pages
- Dashboard
- Manage Tests
- Manage Categories
- Content Management
- Admin Management

---

## 4. Routing Strategy

- / → Home
- /tests → Listing
- /tests/:slug → Single dynamic test page
- /login
- /signup
- /profile
- /admin-panel/*

IMPORTANT:
Only ONE TestDetails page exists.

---

## 5. Component Strategy
- Reusable components
- No API calls inside UI components
- Data fetched at page level

---

## 6. Performance Rules
- Lazy load admin routes
- Skeleton loaders
- Minimal dependencies
- No heavy animations
