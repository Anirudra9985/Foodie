import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/partners.css';

const TOP_PARTNERS = [
    {
        id: 'partner-101',
        name: 'The Burger Crafters',
        handle: '@burgercrafters',
        avatar: '🍔',
        verified: true,
        rating: 4.9,
        reviewsCount: 1240,
        reelsCount: 42,
        followers: '85.4K',
        cuisine: 'Gourmet Smash Burgers & Loaded Fries',
        location: 'Downtown Culinary District',
        banner: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=80',
        badge: 'Top Rated 🏆'
    },
    {
        id: 'partner-201',
        name: 'Bella Napoli Pizzeria',
        handle: '@bellanapoli',
        avatar: '🍕',
        verified: true,
        rating: 4.95,
        reviewsCount: 2100,
        reelsCount: 68,
        followers: '120K',
        cuisine: 'Neapolitan Wood-Fired Pizza & Artisanal Pasta',
        location: 'Little Italy Square',
        banner: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=80',
        badge: 'Master Piez 👑'
    },
    {
        id: 'partner-301',
        name: 'El Taquero Loco',
        handle: '@taqueroloco',
        avatar: '🌮',
        verified: true,
        rating: 4.88,
        reviewsCount: 980,
        reelsCount: 35,
        followers: '64.2K',
        cuisine: 'Crispy Birria Tacos & Consomé',
        location: 'Westside Food Truck Park',
        badge: 'Viral Birria 🔥'
    },
    {
        id: 'partner-401',
        name: 'Fuwa Fuwa Sweets',
        handle: '@fuwafuwacafe',
        avatar: '🥞',
        verified: true,
        rating: 4.92,
        reviewsCount: 1750,
        reelsCount: 54,
        followers: '110K',
        cuisine: 'Japanese Soufflé Pancakes & Boba Teas',
        location: 'Tokyo Town Boulevard',
        banner: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&auto=format&fit=crop&q=80',
        badge: 'Dessert Icon 🥞'
    },
    {
        id: 'partner-501',
        name: 'Tokyo Ramen House',
        handle: '@tokyoramen',
        avatar: '🍜',
        verified: true,
        rating: 4.91,
        reviewsCount: 1540,
        reelsCount: 49,
        followers: '92.8K',
        cuisine: '18-Hour Tonkotsu Broth & Handmade Ramen',
        location: 'East Asian Noodle Street',
        banner: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format&fit=crop&q=80',
        badge: 'Artisan Noodle 🍜'
    },
    {
        id: 'partner-105',
        name: 'Cluck & Fire',
        handle: '@cluckandfire',
        avatar: '🍗',
        verified: true,
        rating: 4.86,
        reviewsCount: 890,
        reelsCount: 29,
        followers: '51.3K',
        cuisine: 'Nashville Hot Fried Chicken',
        location: 'Spice Avenue',
        badge: 'Hot Pick 🌶️'
    }
];

const TopPartners = () => {
    return (
        <div className="partners-page-container">
            {/* Page Header */}
            <div className="partners-hero">
                <div className="hero-pill">👨‍🍳 Culinary Creators & Kitchens</div>
                <h1>Verified Food Partners & Top Chefs</h1>
                <p>Meet the master artisans, food trucks, and legendary kitchens crafting your favorite video reels.</p>
            </div>

            {/* Partners Grid */}
            <div className="partners-grid-wrap">
                <div className="partners-grid">
                    {TOP_PARTNERS.map(partner => (
                        <div key={partner.id} className="partner-card">
                            <div className="partner-banner">
                                {partner.banner ? (
                                    <img src={partner.banner} alt={partner.name} />
                                ) : (
                                    <div className="banner-placeholder" />
                                )}
                                <span className="partner-badge-tag">{partner.badge}</span>
                            </div>

                            <div className="partner-header-content">
                                <div className="partner-avatar-lg">
                                    <span>{partner.avatar}</span>
                                </div>
                                <div className="partner-main-info">
                                    <div className="partner-title-row">
                                        <h2>{partner.name}</h2>
                                        {partner.verified && (
                                            <span className="verified-check" title="Verified Food Partner">✓</span>
                                        )}
                                    </div>
                                    <span className="partner-handle">{partner.handle}</span>
                                </div>
                            </div>

                            <div className="partner-card-body">
                                <p className="partner-cuisine"><strong>Specialty:</strong> {partner.cuisine}</p>
                                <p className="partner-location">📍 {partner.location}</p>

                                <div className="partner-stats-row">
                                    <div className="stat-box">
                                        <span className="stat-val">{partner.rating} ★</span>
                                        <span className="stat-lbl">Rating</span>
                                    </div>
                                    <div className="stat-box">
                                        <span className="stat-val">{partner.reelsCount}</span>
                                        <span className="stat-lbl">Reels</span>
                                    </div>
                                    <div className="stat-box">
                                        <span className="stat-val">{partner.followers}</span>
                                        <span className="stat-lbl">Followers</span>
                                    </div>
                                </div>

                                <div className="partner-card-actions">
                                    <Link to={`/food-partner/${partner.id}`} className="btn-view-partner">
                                        View Kitchen Profile
                                    </Link>
                                    <Link to={`/explore?q=${encodeURIComponent(partner.name)}`} className="btn-partner-reels">
                                        Reels
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopPartners;
