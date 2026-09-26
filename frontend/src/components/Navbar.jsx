import React, { useState, useRef, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import '../styles/navbar.css';

const Navbar = () => {
    const { user, isAuthenticated, isPartner, logout } = useAuth();
    const { theme, toggleTheme, isDark } = useTheme();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [showNotifications, setShowNotifications] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);
    const [notifications, setNotifications] = useState([
        { id: 1, title: '🔥 Chef Bella posted a new Neapolitan Pizza Reel', time: '10m ago', unread: true },
        { id: 2, title: '🎉 20% discount offer unlocked at The Burger Crafters', time: '1h ago', unread: true },
        { id: 3, title: '❤️ 45 people saved your food review video', time: '3h ago', unread: false },
    ]);

    const notifRef = useRef(null);
    const userMenuRef = useRef(null);
    const navigate = useNavigate();

    const unreadCount = notifications.filter(n => n.unread).length;

    // Handle outside clicks for popovers
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (notifRef.current && !notifRef.current.contains(e.target)) {
                setShowNotifications(false);
            }
            if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
                setShowUserMenu(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // 3D Magnetic Cursor Tilt Handler
    const handle3DTilt = (e) => {
        const item = e.currentTarget;
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -12;
        const rotateY = ((x - centerX) / centerX) * 12;

        item.style.transform = `perspective(600px) translateY(-4px) translateZ(16px) rotateX(${rotateX.toFixed(1)}deg) rotateY(${rotateY.toFixed(1)}deg)`;
    };

    const handle3DReset = (e) => {
        e.currentTarget.style.transform = '';
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/explore?q=${encodeURIComponent(searchQuery.trim())}`);
            setMobileOpen(false);
        }
    };

    const handleLogout = async () => {
        await logout();
        setShowUserMenu(false);
        navigate('/customer/login');
    };

    const markAllRead = () => {
        setNotifications(prev => prev.map(n => ({ ...n, unread: false })));
    };

    return (
        <header className="navbar">
            <div className="navbar-container">
                {/* Brand / Logo */}
                <Link to="/" className="navbar-brand" onClick={() => setMobileOpen(false)}>
                    <div className="brand-icon">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/>
                            <path d="M12 6v6l4 2"/>
                        </svg>
                    </div>
                    <span>Food<span style={{ color: 'var(--color-primary)' }}>Vibe</span></span>
                    <span className="brand-badge">PRO</span>
                </Link>

                {/* Header Search Bar (Desktop) */}
                <form className="nav-search-bar" onSubmit={handleSearchSubmit}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <circle cx="11" cy="11" r="8"/>
                        <path d="m21 21-4.3-4.3"/>
                    </svg>
                    <input
                        type="text"
                        placeholder="Search dishes, burgers, chefs..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </form>

                {/* Navigation Links (Middle) */}
                <nav className="desktop-nav">
                    <ul className="navbar-links">
                        <li>
                            <NavLink
                                to="/"
                                end
                                className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}
                                onMouseMove={handle3DTilt}
                                onMouseLeave={handle3DReset}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
                                <span>Reels</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/explore"
                                className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}
                                onMouseMove={handle3DTilt}
                                onMouseLeave={handle3DReset}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
                                <span>Explore</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/partners"
                                className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}
                                onMouseMove={handle3DTilt}
                                onMouseLeave={handle3DReset}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                                <span>Top Chefs</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/saved"
                                className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}
                                onMouseMove={handle3DTilt}
                                onMouseLeave={handle3DReset}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
                                <span>Saved</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                {/* Right Actions */}
                <div className="navbar-actions">
                    {/* Theme Toggle Button */}
                    <button
                        className="action-icon-btn"
                        onClick={toggleTheme}
                        title={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
                        aria-label="Toggle theme"
                        onMouseMove={handle3DTilt}
                        onMouseLeave={handle3DReset}
                    >
                        {isDark ? (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="5"/>
                                <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
                                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                                <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
                                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                            </svg>
                        ) : (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                            </svg>
                        )}
                    </button>

                    {/* Notifications Bell */}
                    <div className="popover-wrapper" ref={notifRef}>
                        <button
                            className="action-icon-btn"
                            onClick={() => setShowNotifications(!showNotifications)}
                            title="Notifications"
                            onMouseMove={handle3DTilt}
                            onMouseLeave={handle3DReset}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                                <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                            </svg>
                            {unreadCount > 0 && <span className="notif-badge">{unreadCount}</span>}
                        </button>

                        {showNotifications && (
                            <div className="popover-card notif-popover">
                                <div className="popover-header">
                                    <h3>Notifications</h3>
                                    {unreadCount > 0 && (
                                        <button className="btn-text-action" onClick={markAllRead}>Mark read</button>
                                    )}
                                </div>
                                <div className="notif-list">
                                    {notifications.map(n => (
                                        <div key={n.id} className={`notif-item ${n.unread ? 'unread' : ''}`}>
                                            <p className="notif-text">{n.title}</p>
                                            <span className="notif-time">{n.time}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Partner Post Button */}
                    {isPartner && (
                        <Link
                            to="/create-food"
                            className="btn-upload-reel"
                            onMouseMove={handle3DTilt}
                            onMouseLeave={handle3DReset}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                            <span>Post Reel</span>
                        </Link>
                    )}

                    {/* User Profile / Login */}
                    {isAuthenticated ? (
                        <div className="popover-wrapper" ref={userMenuRef}>
                            <button
                                className="user-profile-trigger"
                                onClick={() => setShowUserMenu(!showUserMenu)}
                                onMouseMove={handle3DTilt}
                                onMouseLeave={handle3DReset}
                            >
                                <div className="user-avatar">
                                    {(user?.fullName || user?.name || 'U').charAt(0).toUpperCase()}
                                </div>
                                <span className="user-name-text">{user?.fullName || user?.name}</span>
                                <span className="role-tag">{isPartner ? 'Admin' : 'Customer'}</span>
                            </button>

                            {showUserMenu && (
                                <div className="popover-card user-menu-popover">
                                    <div className="user-card-header">
                                        <div className="user-avatar-lg">
                                            {(user?.fullName || user?.name || 'U').charAt(0).toUpperCase()}
                                        </div>
                                        <div>
                                            <div className="user-card-name">{user?.fullName || user?.name}</div>
                                            <div className="user-card-role">{isPartner ? '🛡️ Admin / Partner Portal' : '🍔 Foodie Customer'}</div>
                                        </div>
                                    </div>
                                    <div className="menu-divider" />
                                    <div className="user-menu-items">
                                        <Link to="/saved" className="menu-item" onClick={() => setShowUserMenu(false)}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
                                            <span>Saved Dishes</span>
                                        </Link>
                                        {isPartner && (
                                            <Link to="/create-food" className="menu-item" onClick={() => setShowUserMenu(false)}>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
                                                <span>Upload Reel (Admin)</span>
                                            </Link>
                                        )}
                                        <button className="menu-item logout-item" onClick={handleLogout}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                                            <span>Sign Out</span>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="auth-buttons-group">
                            <Link
                                to="/customer/login"
                                className="btn-nav-login"
                                onMouseMove={handle3DTilt}
                                onMouseLeave={handle3DReset}
                            >
                                Customer Sign In
                            </Link>
                            <Link
                                to="/admin/login"
                                className="btn-nav-admin"
                                onMouseMove={handle3DTilt}
                                onMouseLeave={handle3DReset}
                            >
                                Admin Portal 🛡️
                            </Link>
                        </div>
                    )}

                    {/* Mobile Menu Toggle Button */}
                    <button className="mobile-menu-btn" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
                        {mobileOpen ? '✕' : (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            {mobileOpen && (
                <div className="mobile-drawer">
                    <form className="mobile-search-form" onSubmit={handleSearchSubmit}>
                        <input
                            type="text"
                            placeholder="Search dishes or partners..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button type="submit">Search</button>
                    </form>
                    <div className="mobile-nav-links">
                        <NavLink to="/" end className="mobile-link" onClick={() => setMobileOpen(false)}>
                            🎬 Reel Feed
                        </NavLink>
                        <NavLink to="/explore" className="mobile-link" onClick={() => setMobileOpen(false)}>
                            🧭 Explore Dishes
                        </NavLink>
                        <NavLink to="/partners" className="mobile-link" onClick={() => setMobileOpen(false)}>
                            👨‍🍳 Top Chefs & Kitchens
                        </NavLink>
                        <NavLink to="/saved" className="mobile-link" onClick={() => setMobileOpen(false)}>
                            🔖 Saved Foods
                        </NavLink>
                        {!isAuthenticated && (
                            <>
                                <NavLink to="/customer/login" className="mobile-link" onClick={() => setMobileOpen(false)}>
                                    🍔 Customer Login
                                </NavLink>
                                <NavLink to="/admin/login" className="mobile-link" onClick={() => setMobileOpen(false)}>
                                    🛡️ Admin Portal Login
                                </NavLink>
                            </>
                        )}
                        {isPartner && (
                            <NavLink to="/create-food" className="mobile-link" onClick={() => setMobileOpen(false)}>
                                📤 Post New Reel (Admin)
                            </NavLink>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
