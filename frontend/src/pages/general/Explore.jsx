import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { MOCK_FOOD_REELS } from '../../data/mockFoodReels';
import { foodAPI } from '../../services/api';
import '../../styles/explore.css';

const CATEGORIES = [
    { id: 'all', label: '🔥 All Items', value: 'All' },
    { id: 'street', label: '🍔 Street Food', value: '🍔 Street Food' },
    { id: 'pizza', label: '🍕 Pizza & Italian', value: '🍕 Pizza & Italian' },
    { id: 'tacos', label: '🌮 Tacos & Spicy', value: '🌮 Tacos & Spicy' },
    { id: 'desserts', label: '🍰 Desserts', value: '🍰 Desserts' },
    { id: 'asian', label: '🍜 Asian Fusion', value: '🍜 Asian Fusion' },
];

const Explore = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const queryParam = searchParams.get('q') || '';
    const [searchTerm, setSearchTerm] = useState(queryParam);
    const [selectedCat, setSelectedCat] = useState('All');
    const [items, setItems] = useState(MOCK_FOOD_REELS);

    useEffect(() => {
        setSearchTerm(queryParam);
    }, [queryParam]);

    useEffect(() => {
        foodAPI.getFoodItems()
            .then(res => {
                if (res.data?.foodItems?.length > 0) {
                    setItems(res.data.foodItems);
                }
            })
            .catch(() => {
                // fallback to mock
            });
    }, []);

    const filteredItems = items.filter(item => {
        const matchesSearch = searchTerm.trim() === '' ||
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.foodPartner?.name?.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesCat = selectedCat === 'All' || item.category === selectedCat;

        return matchesSearch && matchesCat;
    });

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setSearchParams(searchTerm ? { q: searchTerm } : {});
    };

    return (
        <div className="explore-container">
            {/* Header Banner */}
            <div className="explore-hero">
                <div className="explore-hero-badge">🧭 Discover Culinary Magic</div>
                <h1>Explore Trending Dishes & Creators</h1>
                <p>Search over hundreds of mouthwatering food reels, artisan partners, and trending street eats.</p>

                {/* Main Search Bar */}
                <form className="explore-search-box" onSubmit={handleSearchSubmit}>
                    <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <circle cx="11" cy="11" r="8"/>
                        <path d="m21 21-4.3-4.3"/>
                    </svg>
                    <input
                        type="text"
                        placeholder="Search truffle burger, ramen, tacos, or partner name..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    {searchTerm && (
                        <button type="button" className="clear-btn" onClick={() => { setSearchTerm(''); setSearchParams({}); }}>
                            ✕
                        </button>
                    )}
                    <button type="submit" className="btn-search-submit">Search</button>
                </form>

                {/* Quick Tags */}
                <div className="quick-tags">
                    <span className="quick-tags-label">Popular:</span>
                    {['Wagyu Burger', 'Birria Tacos', 'Neapolitan Pizza', 'Ramen', 'Soufflé Pancake'].map(tag => (
                        <button key={tag} className="tag-chip" onClick={() => { setSearchTerm(tag); setSearchParams({ q: tag }); }}>
                            {tag}
                        </button>
                    ))}
                </div>
            </div>

            {/* Filter Section */}
            <div className="explore-content-wrap">
                <div className="explore-controls">
                    {/* Categories Tabs */}
                    <div className="category-scroll">
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat.id}
                                className={`cat-pill ${selectedCat === cat.value ? 'active' : ''}`}
                                onClick={() => setSelectedCat(cat.value)}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    <div className="results-count">
                        Showing <span>{filteredItems.length}</span> delicious findings
                    </div>
                </div>

                {/* Dishes Grid */}
                {filteredItems.length === 0 ? (
                    <div className="explore-empty">
                        <div className="empty-icon">🍽️</div>
                        <h3>No culinary matches found</h3>
                        <p>Try searching for different terms like "Pizza", "Tacos", "Burger" or clear your filters.</p>
                        <button className="btn-reset-filter" onClick={() => { setSearchTerm(''); setSelectedCat('All'); setSearchParams({}); }}>
                            Reset All Filters
                        </button>
                    </div>
                ) : (
                    <div className="explore-grid">
                        {filteredItems.map(item => (
                            <div key={item._id} className="explore-card">
                                <div className="card-media">
                                    <img src={item.poster || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80"} alt={item.name} />
                                    <div className="card-category-badge">{item.category || '🔥 Featured'}</div>
                                    <div className="card-likes-badge">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                                        </svg>
                                        <span>{(item.likeCount || 0).toLocaleString()}</span>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title">{item.name}</h3>
                                    <p className="card-desc">{item.description}</p>
                                    <div className="card-footer">
                                        <Link to={`/food-partner/${item.foodPartner?._id || 'partner-101'}`} className="partner-info">
                                            <div className="partner-avatar">
                                                {(item.foodPartner?.name || 'Chef').charAt(0).toUpperCase()}
                                            </div>
                                            <span className="partner-name">{item.foodPartner?.name || 'Verified Chef'}</span>
                                        </Link>
                                        <Link to="/" className="btn-watch-reel">
                                            <span>Watch Reel</span>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                <polygon points="5 3 19 12 5 21 5 3"/>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Explore;
