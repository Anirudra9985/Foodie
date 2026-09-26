# 🍔 Foodie — 3D Interactive Food Experience & Reels Platform

<p align="center">
  <img src="https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19" />
  <img src="https://img.shields.io/badge/Three.js-WebGL-black?style=for-the-badge&logo=three.js&logoColor=white" alt="Three.js" />
  <img src="https://img.shields.io/badge/Node.js-20.x-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express-5.x-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Vite-7.x-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/ImageKit-CDN-0052CC?style=for-the-badge&logo=imagekit&logoColor=white" alt="ImageKit" />
</p>

---

## 🌟 Overview

**Foodie** is a state-of-the-art, full-stack food discovery platform that merges **3D WebGL visuals** with an immersive **TikTok/Instagram-style short video reel feed**. Built for food lovers and food partners (restaurants & cloud kitchens), Foodie allows users to discover delicious dishes through video reels, interact with partners, save favorite items, and experience futuristic 3D web interfaces.

---

## ✨ Key Features

### 🎨 1. Interactive 3D Canvas & Futuristic UI
* **React Three Fiber & WebGL Shaders**: Embedded 3D particle visualizer with custom vertex shaders and dynamic lighting in the hero banner.
* **Glassmorphism Design**: Sleek dark mode visual theme featuring glassmorphic cards, glowing ambient gradients, and smooth micro-animations.
* **Glitch & Typography Effects**: Custom keyframe animation engine for titles, subtitles, and interactive hover states.

### 📱 2. Short Video Food Reels Feed
* **Vertical Video Feed**: Infinite scrolling TikTok-style video player optimized for mobile and desktop.
* **Instant Engagement**: One-tap Like ❤️, Bookmark/Save 🔖, and quick share functionality.
* **Direct Partner Links**: Click directly from a video reel to view the partner's full culinary profile.

### 🏪 3. Food Partner Management Portal
* **Partner Onboarding**: Dedicated registration flow for restaurants and cloud kitchens.
* **Video Upload Pipeline**: Upload food promotional reels processed and served directly via **ImageKit CDN** for lightning-fast streaming.
* **Partner Dashboard & Profiles**: Showcase items, track engagement, and build customer relationships.

### 🔒 4. Enterprise-Grade Authentication & Security
* **Dual-Role Authorization**: Separate authentication flows for **Customers** and **Food Partners**.
* **JWT & Cookie-Based Sessions**: Secure session management using HTTP-only cookies and JSON Web Tokens.
* **Protected Routes**: Granular backend middleware enforcing endpoint protection.

---

## 🏗️ Architecture & Technology Stack

### **Frontend Stack**
- **Core Framework**: [React 19](https://react.dev/) + [Vite 7](https://vitejs.dev/)
- **3D & Graphics Engine**: [Three.js](https://threejs.org/) + [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) + [@react-three/drei](https://github.com/pmndrs/drei)
- **Icons & UI**: [Lucide React](https://lucide.dev/)
- **Routing & State**: React Router v7, React Context API (`AuthContext`, `ThemeContext`)
- **HTTP Client**: Axios

### **Backend Stack**
- **Runtime & Server**: Node.js + Express.js v5
- **Database & ORM**: MongoDB + Mongoose v8
- **Media CDN Engine**: ImageKit SDK + Multer
- **Security & Tokens**: JSONWebToken (JWT) + Cookie-Parser + BcryptJS

---

## 📁 Folder Structure

```
Youtube-project-food-view/
├── backend/
│   ├── src/
│   │   ├── app.js               # Express application configuration
│   │   ├── server.js            # Node HTTP server entrypoint
│   │   ├── controllers/         # Auth & Food route controllers
│   │   ├── db/                  # Mongoose MongoDB connection client
│   │   ├── middlewares/         # JWT Auth verification middleware
│   │   ├── models/              # Mongoose schemas (User, Partner, Food)
│   │   ├── routes/              # Express API endpoint definitions
│   │   └── services/            # ImageKit media storage service
│   ├── .env.example             # Template for backend environment variables
│   └── package.json             # Backend dependencies & scripts
│
├── frontend/
│   ├── src/
│   │   ├── assets/              # Static media & icons
│   │   ├── components/          # Shared components (Navbar, Footer, Reels, BottomNav)
│   │   │   └── ui/              # 3D Canvas & Futuristic UI components
│   │   ├── context/             # AuthContext & ThemeContext providers
│   │   ├── pages/               # Auth, General (Home, Explore), and Partner pages
│   │   ├── routes/              # App routing configuration
│   │   ├── services/            # Centralized API service methods
│   │   └── styles/              # Global CSS & theme tokens
│   ├── index.html               # Main HTML document
│   ├── vite.config.js           # Vite dev build setup
│   └── package.json             # Frontend dependencies & scripts
│
├── QUICKSTART.md                # Fast setup commands guide
├── SETUP.md                     # Comprehensive setup guide
└── README.md                    # Project documentation
```

---

## ⚡ Getting Started

### Prerequisites
Make sure you have the following installed on your machine:
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher
- **MongoDB**: Local MongoDB instance or a [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cloud URI.

---

### Step 1: Clone the Repository

```bash
git clone https://github.com/Anirudra9985/Foodie.git
cd Foodie
```

---

### Step 2: Set Up Backend Environment

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   npm install
   ```

2. Create a `.env` file inside the `backend` folder (you can copy `.env.example`):
   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/food-delivery
   JWT_SECRET=your_super_secret_jwt_key
   IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
   IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
   IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_endpoint_id
   ```

3. Start the backend development server:
   ```bash
   npm run dev
   ```
   > ✅ **Backend Server running on `http://localhost:3000`**

---

### Step 3: Set Up Frontend Application

1. Open a new terminal tab and navigate to the `frontend` directory:
   ```bash
   cd frontend
   npm install
   ```

2. Start the Vite frontend development server:
   ```bash
   npm run dev
   ```
   > ✅ **Frontend application running on `http://localhost:5173`**

---

## 📡 REST API Documentation

| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/auth/user/register` | Register new customer account | No |
| `POST` | `/api/auth/user/login` | Login customer account | No |
| `GET` | `/api/auth/user/logout` | Logout active user | Yes |
| `POST` | `/api/auth/food-partner/register` | Register food partner account | No |
| `POST` | `/api/auth/food-partner/login` | Login food partner account | No |
| `GET` | `/api/food` | Fetch all public food items/reels | Yes |
| `POST` | `/api/food` | Create & upload a new food video reel | Partner Only |
| `POST` | `/api/food/like` | Toggle like status on a food item | Yes |
| `POST` | `/api/food/save` | Bookmark/save a food item | Yes |
| `GET` | `/api/food/save` | Fetch user's saved food collection | Yes |
| `GET` | `/api/food-partner/:id` | Get food partner profile and items | Yes |

---

## 🎮 3D WebGL Visual Highlights

Foodie leverages `@react-three/fiber` inside [`frontend/src/components/ui/hero-futuristic.jsx`](file:///d:/Backend%20by%20shreyansh/Youtube-project-food-view/frontend/src/components/ui/hero-futuristic.jsx) to render interactive 3D particle waves:

```jsx
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// 3D Animated Particle Mesh Component
function ParticleMesh() {
  const meshRef = useRef();
  useFrame(({ clock }) => {
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.15;
    meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.2;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry />
      <pointsMaterial size={0.03} color="#ff4b3e" transparent opacity={0.8} />
    </points>
  );
}
```

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve Foodie or add new features:
1. Fork the Project repository
2. Create your Feature Branch (`git checkout -b feature/AwesomeFeature`)
3. Commit your changes (`git commit -m 'Add some AwesomeFeature'`)
4. Push to the Branch (`git push origin feature/AwesomeFeature`)
5. Open a Pull Request

---

## 📝 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

<p align="center">
  Crafted with ❤️ by <a href="https://github.com/Anirudra9985">Anirudra</a>
</p>
