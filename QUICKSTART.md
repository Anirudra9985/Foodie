# Quick Start Guide

## 🚀 Start Backend
```bash
cd backend
npm install
npm run dev
```
✅ Backend running on http://localhost:3000

## 🚀 Start Frontend (in new terminal)
```bash
cd frontend
npm install
npm run dev
```
✅ Frontend running on http://localhost:5173

## ⚙️ Important: Configure .env

Edit `backend/.env` with your credentials:
```bash
MONGODB_URI=mongodb://localhost:27017/food-delivery
JWT_SECRET=any_secret_key_here
IMAGEKIT_PUBLIC_KEY=your_key
IMAGEKIT_PRIVATE_KEY=your_key
IMAGEKIT_URL_ENDPOINT=your_endpoint
```

## 🔗 Backend-Frontend Connection
- ✅ CORS configured for localhost:5173
- ✅ API calls centralized in `frontend/src/services/api.js`
- ✅ All authentication uses JWT tokens + cookies

## 🧪 Quick Test Flow
1. Open http://localhost:5173
2. Register as User → Creates account → Redirects to Home
3. Go back, Register as Food Partner → Creates account → Redirects to Create Food
4. As Food Partner: Upload video → Saved to MongoDB with ImageKit URL
5. As User: View videos on Home → Like/Save functionality works

## 📱 Available Routes

| Route | Purpose |
|-------|---------|
| `/` | Home - View all food items |
| `/register` | Choose registration type |
| `/user/register` | User registration |
| `/user/login` | User login |
| `/food-partner/register` | Partner registration |
| `/food-partner/login` | Partner login |
| `/create-food` | Upload food video (partner only) |
| `/saved` | View saved foods (user) |
| `/food-partner/:id` | View partner profile |

## ❌ Common Issues & Fixes

| Issue | Solution |
|-------|----------|
| MongoDB connection error | Ensure MongoDB is running or use MongoDB Atlas |
| CORS error | Restart both backend & frontend |
| Port 3000 in use | Change backend port in `server.js` |
| Tokens not working | Clear browser cookies, restart servers |
| Videos not uploading | Check ImageKit credentials in `.env` |

## 📚 For Full Details
See `SETUP.md` for comprehensive documentation
