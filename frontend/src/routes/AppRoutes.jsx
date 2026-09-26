import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChooseLogin from '../pages/auth/ChooseLogin';
import CustomerLogin from '../pages/auth/CustomerLogin';
import AdminLogin from '../pages/auth/AdminLogin';
import UserRegister from '../pages/auth/UserRegister';
import ChooseRegister from '../pages/auth/ChooseRegister';
import FoodPartnerRegister from '../pages/auth/FoodPartnerRegister';
import Home from '../pages/general/Home';
import Saved from '../pages/general/Saved';
import Explore from '../pages/general/Explore';
import TopPartners from '../pages/general/TopPartners';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GatewayFlow from '../components/ui/gateway-flow';
import CreateFood from '../pages/food-partner/CreateFood';
import Profile from '../pages/food-partner/Profile';

const AppRoutes = () => {
    return (
        <Router>
            <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <Navbar />
                <main style={{ flex: 1 }}>
                    <Routes>
                        {/* Auth Chooser Routes */}
                        <Route path="/login" element={<ChooseLogin />} />
                        <Route path="/register" element={<ChooseRegister />} />

                        {/* Customer Auth Routes */}
                        <Route path="/customer/login" element={<CustomerLogin />} />
                        <Route path="/customer/register" element={<UserRegister />} />
                        <Route path="/user/login" element={<CustomerLogin />} />
                        <Route path="/user/register" element={<UserRegister />} />

                        {/* Admin & Partner Auth Routes */}
                        <Route path="/admin/login" element={<AdminLogin />} />
                        <Route path="/admin/register" element={<FoodPartnerRegister />} />
                        <Route path="/food-partner/login" element={<AdminLogin />} />
                        <Route path="/food-partner/register" element={<FoodPartnerRegister />} />

                        {/* General & Feature Routes */}
                        <Route path="/" element={<Home />} />
                        <Route path="/explore" element={<Explore />} />
                        <Route path="/partners" element={<TopPartners />} />
                        <Route path="/saved" element={<Saved />} />
                        <Route path="/create-food" element={<CreateFood />} />
                        <Route path="/food-partner/:id" element={<Profile />} />
                    </Routes>
                </main>
                {/* Gateway Flow component placed right above Footer */}
                <div style={{ height: '520px', width: '100%', overflow: 'hidden', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
                    <GatewayFlow />
                </div>
                <Footer />
            </div>
        </Router>
    );
};

export default AppRoutes;