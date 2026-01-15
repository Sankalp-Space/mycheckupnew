# MYCHECKUP – BACKEND DOCUMENTATION

## 1. Tech Stack
- Node.js
- Express.js
- MongoDB (local)
- JWT authentication
- PM2 (Windows)

---

## 2. Backend Responsibilities
- Authentication
- Admin authorization
- Test & category CRUD
- Content management
- Performance & caching

---

## 3. Folder Structure

backend/
 ├─ src/
 │  ├─ models/
 │  ├─ controllers/
 │  ├─ routes/
 │  ├─ middlewares/
 │  ├─ services/
 │  └─ utils/
 ├─ public/
 │  └─ uploads/
 ├─ server.js
 └─ .env

---

## 4. Database Models

### User
- name
- email
- phone
- passwordHash
- address
- createdAt

### Admin
- name
- email
- passwordHash
- role (admin / super_admin)
- isActive

### Category
- name
- slug
- icon
- order
- isActive

### Test
- name
- slug
- description
- price
- discountedPrice
- categoryId
- parametersIncluded
- preparationInstructions
- reportTime
- sampleType
- fastingRequired
- badges
- isHighlighted
- isActive

### SiteContent
- heroTitle
- heroSubtitle
- offerBanner
- testimonials[]

---

## 5. API Design

### Auth
- POST /api/auth/register
- POST /api/auth/login

### Admin
- POST /api/admin/login
- POST /api/admin/create
- PATCH /api/admin/disable

### Categories
- GET /api/categories
- POST /api/admin/categories
- PUT /api/admin/categories/:id

### Tests
- GET /api/tests
- GET /api/tests/:slug
- POST /api/admin/tests
- PUT /api/admin/tests/:id
- PATCH /api/admin/tests/:id/toggle

### Content
- GET /api/content/home
- PUT /api/admin/content/home

---

## 6. Security
- Password hashing
- JWT validation
- Rate limiting
- Admin-only middleware
- Soft deletes only

---

## 7. Performance
- MongoDB indexes
- Pagination
- In-memory caching for homepage & categories
