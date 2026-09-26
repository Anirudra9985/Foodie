import React, { useEffect, useState, useRef } from 'react';
import { foodAPI } from '../../services/api';
import '../../styles/reels.css';
import ReelFeed from '../../components/ReelFeed';
import ImageStreamHero from '../../components/ui/image-stream-hero';
import { MOCK_FOOD_REELS } from '../../data/mockFoodReels';

const FOOD_STREAM_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=80",
    alt: "Gourmet Artisan Burger with Melted Cheese",
  },
  {
    src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=80",
    alt: "Woodfired Italian Pepperoni Pizza",
  },
  {
    src: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&auto=format&fit=crop&q=80",
    alt: "Fresh Japanese Salmon Sushi Rolls",
  },
  {
    src: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&auto=format&fit=crop&q=80",
    alt: "Spicy Mexican Street Tacos",
  },
  {
    src: "https://images.unsplash.com/photo-1621996346565-e3d5d6281318?w=600&auto=format&fit=crop&q=80",
    alt: "Authentic Creamy Pasta Carbonara",
  },
  {
    src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&auto=format&fit=crop&q=80",
    alt: "Decadent Layered Berry Cake Dessert",
  },
  {
    src: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format&fit=crop&q=80",
    alt: "Steaming Hot Spicy Asian Ramen",
  },
  {
    src: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=600&auto=format&fit=crop&q=80",
    alt: "Grilled Crispy Street Food Wrap",
  },
  {
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80",
    alt: "Sizzling Premium Ribeye Steak",
  },
];

const CATEGORIES = ['🔥 All Reels', '🍔 Street Food', '🍕 Pizza & Italian', '🌮 Tacos & Spicy', '🍰 Desserts', '🍜 Asian Fusion'];

const Home = () => {
    const [videos, setVideos] = useState(MOCK_FOOD_REELS);
    const [selectedCategory, setSelectedCategory] = useState('🔥 All Reels');
    const reelsRef = useRef(null);

    useEffect(() => {
        foodAPI.getFoodItems()
            .then(response => {
                const fetched = response.data.foodItems || [];
                if (fetched.length > 0) {
                    setVideos(fetched);
                } else {
                    setVideos(MOCK_FOOD_REELS);
                }
            })
            .catch(() => {
                setVideos(MOCK_FOOD_REELS);
            });
    }, []);

    const scrollToReels = () => {
        if (reelsRef.current) {
            reelsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    async function likeVideo(item) {
        try {
            const response = await foodAPI.likeFood(item._id);
            if (response.data.like) {
                setVideos((prev) => prev.map((v) => v._id === item._id ? { ...v, likeCount: (v.likeCount || 0) + 1 } : v));
            } else {
                setVideos((prev) => prev.map((v) => v._id === item._id ? { ...v, likeCount: Math.max(0, (v.likeCount || 1) - 1) } : v));
            }
        } catch (e) {
            console.error("Like error:", e);
        }
    }

    async function saveVideo(item) {
        try {
            const response = await foodAPI.saveFood(item._id);
            if (response.data.save) {
                setVideos((prev) => prev.map((v) => v._id === item._id ? { ...v, savesCount: (v.savesCount || 0) + 1 } : v));
            } else {
                setVideos((prev) => prev.map((v) => v._id === item._id ? { ...v, savesCount: Math.max(0, (v.savesCount || 1) - 1) } : v));
            }
        } catch (e) {
            console.error("Save error:", e);
        }
    }

    return (
        <div style={{ minHeight: '100vh', background: 'var(--color-bg)' }}>
            {/* 3D Image Stream Corridor Hero */}
            <ImageStreamHero
                images={FOOD_STREAM_IMAGES}
                style={{ height: '540px', width: '100%', backgroundColor: '#090d16' }}
            >
                <div style={{ position: 'relative', zIndex: 10, display: 'flex', height: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 1.5rem', background: 'radial-gradient(circle at 50% 50%, rgba(9, 13, 22, 0.5) 0%, rgba(9, 13, 22, 0.88) 100%)' }}>
                    <div style={{ background: 'rgba(255, 75, 62, 0.18)', border: '1px solid rgba(255, 75, 62, 0.45)', color: '#ff4b3e', fontSize: '0.85rem', fontWeight: 700, padding: '6px 16px', borderRadius: '9999px', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.25rem', display: 'inline-flex', alignItems: 'center', gap: '8px', boxShadow: '0 4px 15px rgba(255, 75, 62, 0.2)' }}>
                        <span>🔥</span> FoodVibe Culinary Stream
                    </div>
                    <h1 style={{ fontSize: 'clamp(2.2rem, 4.8vw, 4rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.15, maxWidth: '850px', marginBottom: '1rem', textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}>
                        Taste The Culinary Vibe<br />
                        <span style={{ background: 'var(--color-primary-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            Discover Trending Short Reels
                        </span>
                    </h1>
                    <p style={{ maxWidth: '600px', color: '#94a3b8', fontSize: '1.05rem', fontWeight: 500, lineHeight: 1.6, marginBottom: '2rem', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>
                        Watch appetizing video reviews from top local restaurants and verified food partners. Share your reviews and save your favorite dishes.
                    </p>
                    <button
                        onClick={scrollToReels}
                        style={{ background: 'var(--color-primary-gradient)', color: '#fff', fontWeight: 700, fontSize: '1rem', padding: '14px 32px', borderRadius: '9999px', boxShadow: '0 6px 25px rgba(255, 75, 62, 0.45)', cursor: 'pointer', transition: 'all 0.2s ease', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                    >
                        <span>Explore Food Reels</span>
                        <span style={{ fontSize: '1.2rem' }}>↓</span>
                    </button>
                </div>
            </ImageStreamHero>

            {/* Category Filter Pills & Reel Feed Anchor */}
            <div ref={reelsRef} style={{ padding: '2.5rem 1.5rem 1rem', maxWidth: '1280px', margin: '0 auto' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-text)' }}>
                            Trending Culinary Reels
                        </h2>
                        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
                            Watch short video reviews from verified local restaurants and food partners
                        </p>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '0.65rem', overflowX: 'auto', paddingBottom: '0.75rem', marginBottom: '1.5rem', scrollbarWidth: 'none' }}>
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            style={{
                                background: selectedCategory === cat ? 'var(--color-primary-gradient)' : 'var(--color-surface)',
                                color: selectedCategory === cat ? '#fff' : 'var(--color-text)',
                                border: `1px solid ${selectedCategory === cat ? 'var(--color-primary)' : 'var(--color-border)'}`,
                                padding: '8px 18px',
                                borderRadius: '9999px',
                                fontSize: '0.88rem',
                                fontWeight: 700,
                                cursor: 'pointer',
                                whiteSpace: 'nowrap',
                                transition: 'all 0.2s ease',
                                boxShadow: selectedCategory === cat ? 'var(--shadow-glow)' : 'none'
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Video Reels Container */}
            <ReelFeed
                items={
                    videos.filter(item => {
                        if (selectedCategory === '🔥 All Reels') return true;
                        if (item.category) return item.category === selectedCategory;
                        const catKey = selectedCategory.split(' ')[1]?.toLowerCase() || '';
                        return item.name?.toLowerCase().includes(catKey) || item.description?.toLowerCase().includes(catKey);
                    })
                }
                onLike={likeVideo}
                onSave={saveVideo}
                emptyMessage="No food reels available yet in this category. Be the first food partner to upload a reel!"
            />
        </div>
    );
};

export default Home;