# MYCHECKUP – INTEGRATION & DEPLOYMENT

## 1. Integration Strategy
- Same domain for frontend & backend
- API prefix: /api
- IIS reverse proxy to Node backend

---

## 2. API Communication
- Axios
- Cookies for JWT
- No CORS in production

---

## 3. Deployment

### Frontend
- Build React app
- Host build on IIS
- SPA routing via web.config

### Backend
- Node runs on localhost:5000
- Managed via PM2
- Restart on crash

### Database
- MongoDB local
- Daily backups

---

## 4. Performance Optimization
- Backend caching
- Frontend lazy loading
- Indexed DB queries

---

## 5. Future Feature Flags
- ENABLE_BOOKING=false
- ENABLE_REPORTS=false
