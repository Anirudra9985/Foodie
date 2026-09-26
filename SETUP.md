# YouTube Food View Project - Setup Guide

## Prerequisites
Ensure you have the following installed:
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas connection)

## Backend Setup

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Configure Environment Variables
The `.env` file has been created in the backend directory. Update it with your actual credentials:

```env
MONGODB_URI=mongodb://localhost:27017/food-delivery
JWT_SECRET=your_secure_jwt_secret_key_change_this
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
```

**Important:** Replace the ImageKit credentials with your actual ones from [ImageKit.io](https://imagekit.io)

### 3. Install MongoDB (if using locally)
If using MongoDB locally, ensure MongoDB service is running:
- **Windows:** MongoDB should be running as a service
- **Mac:** `brew services start mongodb-community`
- **Linux:** `systemctl start mongod`

Or use MongoDB Atlas (cloud):
- Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Create a cluster and get your connection string
- Replace `MONGODB_URI` in `.env` with your connection string

### 4. Start Backend Server
```bash
npm run dev
```

The backend will run on `http://localhost:3000`

You should see:
```
Server is running on port 3000
MongoDB connected
```

## Frontend Setup

### 1. Install Dependencies
```bash
cd frontend
npm install
```

### 2. Start Frontend Development Server
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

## Testing the Integration

### 1. Navigate to Frontend
Open browser and go to `http://localhost:5173`

### 2. Test User Registration
- Click "Register"
- Select "Register as normal user"
- Fill in details and submit
- You should be redirected to home page

### 3. Test Food Partner Registration
- Go to `http://localhost:5173/register`
- Select "Register as food partner"
- Fill in business details and submit
- You should be redirected to create food page

### 4. Test Creating Food (as Food Partner)
- After food partner login, go to `/create-food`
- Upload a video, add name and description
- Submit - should redirect to home

### 5. Test Food Items Display
- On home page, should see all food items
- Test like and save functionality

## Project Structure

```
backend/
├── server.js           # Entry point
├── .env               # Environment variables
├── package.json       # Dependencies & scripts
├── src/
│   ├── app.js        # Express app configuration
│   ├── db/
│   │   └── db.js     # MongoDB connection
│   ├── controllers/  # Route handlers
│   ├── models/       # MongoDB schemas
│   ├── routes/       # API endpoints
│   ├── middlewares/  # Auth middleware
│   └── services/     # External services (ImageKit)

frontend/
├── package.json      # Dependencies
├── vite.config.js    # Vite configuration
├── index.html        # Main HTML
├── src/
│   ├── App.jsx       # Main component
│   ├── services/
│   │   └── api.js    # Centralized API config
│   ├── pages/        # Page components
│   ├── components/   # Reusable components
│   └── styles/       # CSS files
```

## API Endpoints Reference

### Authentication
- `POST /api/auth/user/register` - User registration
- `POST /api/auth/user/login` - User login
- `GET /api/auth/user/logout` - User logout
- `POST /api/auth/food-partner/register` - Food partner registration
- `POST /api/auth/food-partner/login` - Food partner login
- `GET /api/auth/food-partner/logout` - Food partner logout

### Food Items
- `GET /api/food` - Get all food items (requires auth)
- `POST /api/food` - Create food item (requires food partner auth)
- `POST /api/food/like` - Like/unlike food item
- `POST /api/food/save` - Save/unsave food item
- `GET /api/food/save` - Get saved food items

### Food Partners
- `GET /api/food-partner/:id` - Get food partner profile with items

## Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running
- Check `MONGODB_URI` in `.env`
- For MongoDB Atlas, whitelist your IP address

### CORS Error
- Frontend and backend are configured for `http://localhost` communication
- Ensure backend is running on port 3000
- Ensure frontend is running on port 5173

### Token/Cookie Issues
- Clear browser cookies for localhost
- Restart backend and frontend
- Ensure `JWT_SECRET` is set in `.env`

### Video Upload Issues
- Check ImageKit credentials in `.env`
- Ensure valid `IMAGEKIT_URL_ENDPOINT` format

### Port Already in Use
**Backend (port 3000):**
```bash
# Kill process using port 3000
# Windows: netstat -ano | findstr :3000, then taskkill /PID <PID> /F
# Mac/Linux: lsof -i :3000, then kill -9 <PID>
```

**Frontend (port 5173):**
```bash
# Vite will automatically use next available port if 5173 is in use
```

## Development Tips

1. **Hot Reload:** Both frontend and backend are configured for hot reload
2. **API Testing:** Use Postman or Thunder Client to test API endpoints
3. **Database:** Use MongoDB Compass to view database collections
4. **Debugging:** Check browser console (frontend) and terminal (backend) for errors

## Common Commands

**Backend:**
```bash
npm run dev      # Start with nodemon
npm start        # Start without nodemon
```

**Frontend:**
```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Next Steps

1. Get ImageKit API credentials and update `.env`
2. Customize theme colors in `frontend/src/styles/theme.css`
3. Add error handling and validation
4. Deploy to production (Heroku for backend, Vercel for frontend)

---

**Note:** This is a development setup. For production, consider:
- Environment-specific configurations
- Security headers
- Rate limiting
- Input validation
- Error logging
