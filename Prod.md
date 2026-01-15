# MYCHECKUP – PRODUCT REQUIREMENTS DOCUMENT (PRD)

## 1. Product Overview
MyCheckup is a diagnostic lab website where users can browse medical tests,
create accounts, and manage their profile. Lab owners (admins) can manage
tests, categories, and website content without developer help.

The product is simple, fast, admin-controlled, and future-ready.

---

## 2. Goals
- Fast loading website
- Simple user experience
- Full admin control
- Clean architecture
- No unnecessary features

---

## 3. Scope (Phase 1)

### Included
- Homepage with dynamic content
- Test listing & test details
- User signup & login
- User profile
- Admin panel
- Test & category management
- Content management (banner, offers, testimonials)

### Excluded (Future)
- Booking system
- Reports
- Online payments
- Notifications

---

## 4. User Roles

### Guest
- Browse tests
- View test details

### Registered User
- Signup & login
- Manage profile
- View tests

### Admin
- Manage tests
- Manage categories
- Manage homepage content
- Manage admins

---

## 5. Admin Rules
- Multiple admins allowed
- One super admin (cannot be deleted)
- Admin creation & deletion only by admin
- Soft delete only

---

## 6. Payments
- Pay at lab / Cash on delivery
- No online payment logic

---

## 7. Performance Goals
- Homepage loads in 1 API call
- No unnecessary frontend re-renders
- Backend pagination & caching

---

## 8. Success Criteria
- Admin can operate site alone
- New tests require no frontend changes
- Website loads fast on slow networks
