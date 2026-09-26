import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    {/* Brand Column */}
                    <div className="footer-brand-col">
                        <Link to="/" className="navbar-brand">
                            <div className="brand-icon">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/>
                                    <path d="M12 6v6l4 2"/>
                                </svg>
                            </div>
                            <span>Food<span style={{ color: 'var(--color-primary)' }}>Vibe</span></span>
                        </Link>
                        <p>
                            Discover, review, and share the top local culinary dishes through immersive short-form video reels. Empowering food partners and foodies worldwide.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="footer-heading">Explore Food</h4>
                        <ul className="footer-list">
                            <li><Link to="/" className="footer-link">Trending Food Reels</Link></li>
                            <li><Link to="/saved" className="footer-link">Bookmarked Dishes</Link></li>
                            <li><a href="#categories" className="footer-link">Street Food Special</a></li>
                            <li><a href="#gourmet" className="footer-link">Gourmet & Fine Dining</a></li>
                        </ul>
                    </div>

                    {/* Food Partner Hub */}
                    <div>
                        <h4 className="footer-heading">Food Partners</h4>
                        <ul className="footer-list">
                            <li><Link to="/food-partner/register" className="footer-link">Partner Registration</Link></li>
                            <li><Link to="/food-partner/login" className="footer-link">Partner Portal Login</Link></li>
                            <li><Link to="/create-food" className="footer-link">Upload New Food Reel</Link></li>
                            <li><a href="#benefits" className="footer-link">Partner Growth Tools</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="footer-heading">Stay Hungry</h4>
                        <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', marginBottom: '0.75rem' }}>
                            Subscribe for weekly curated top 10 local food reviews.
                        </p>
                        <form className="newsletter-box" onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="Enter your email" className="newsletter-input" required />
                            <button type="submit" className="btn-subscribe">Join</button>
                        </form>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div>
                        © {new Date().getFullYear()} FoodVibe Platform Inc. All rights reserved. Crafting culinary experiences.
                    </div>
                    <div className="social-links">
                        <a href="#instagram" className="social-icon" aria-label="Instagram">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                        </a>
                        <a href="#youtube" className="social-icon" aria-label="YouTube">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
                        </a>
                        <a href="#twitter" className="social-icon" aria-label="Twitter">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
