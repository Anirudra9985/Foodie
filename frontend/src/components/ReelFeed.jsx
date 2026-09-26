import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function getYouTubeEmbedUrl(url) {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|shorts\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11)
    ? `https://www.youtube-nocookie.com/embed/${match[2]}?autoplay=1&mute=1&controls=0&loop=1&playlist=${match[2]}&playsinline=1&modestbranding=1&rel=0`
    : null;
}

const ReelFeed = ({ items = [], onLike, onSave, emptyMessage = 'No food reels available right now.' }) => {
  const containerRef = useRef(null);
  const videoRefs = useRef(new Map());
  const [isMuted, setIsMuted] = useState(true);
  const [activeCommentsItem, setActiveCommentsItem] = useState(null);
  const [commentText, setCommentText] = useState('');
  const [localComments, setLocalComments] = useState({});

  useEffect(() => {
    // Ensure all video elements have muted and playsInline set explicitly on DOM node
    videoRefs.current.forEach((vid) => {
      if (vid) {
        vid.muted = isMuted;
        vid.playsInline = true;
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (!(video instanceof HTMLVideoElement)) return;
          if (entry.isIntersecting) {
            video.muted = isMuted;
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise.catch(() => {
                // If browser blocks unmuted playback, force mute and play again
                video.muted = true;
                video.play().catch(() => { /* silent fallback */ });
              });
            }
          } else {
            video.pause();
          }
        });
      },
      {
        root: containerRef.current,
        threshold: 0.5
      }
    );

    videoRefs.current.forEach((vid) => {
      if (vid) observer.observe(vid);
    });
    return () => observer.disconnect();
  }, [items, isMuted]);

  const setVideoRef = (id) => (el) => {
    if (!el) { videoRefs.current.delete(id); return; }
    videoRefs.current.set(id, el);
    el.muted = isMuted;
    el.playsInline = true;
  };

  const toggleMute = () => {
    const nextMuteState = !isMuted;
    setIsMuted(nextMuteState);
    videoRefs.current.forEach((vid) => {
      if (vid) vid.muted = nextMuteState;
    });
  };

  const handleAddComment = (e, itemId) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    setLocalComments(prev => ({
      ...prev,
      [itemId]: [...(prev[itemId] || []), { id: Date.now(), text: commentText, user: 'You' }]
    }));
    setCommentText('');
  };

  return (
    <div className="reels-page">
      <div className="reels-feed" ref={containerRef} role="list">
        {items.length === 0 && (
          <div className="empty-state">
            <div className="empty-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
            </div>
            <h3 style={{ color: 'var(--color-text)', fontSize: '1.2rem' }}>No Food Reels Found</h3>
            <p>{emptyMessage}</p>
          </div>
        )}

        {items.map((item) => {
          const partnerObj = typeof item.foodPartner === 'object' ? item.foodPartner : null;
          const partnerId = partnerObj?._id || item.foodPartner;
          const partnerName = partnerObj?.name || 'Chef Partner';
          const commentsList = localComments[item._id] || item.comments || [];
          const ytEmbed = getYouTubeEmbedUrl(item.video);

          return (
            <section key={item._id} className="reel" role="listitem">
              {ytEmbed ? (
                <iframe
                  className="reel-video"
                  src={ytEmbed}
                  title={item.name || 'Food Reel'}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{ width: '100%', height: '100%', border: 0, objectFit: 'cover' }}
                />
              ) : (
                <video
                  ref={setVideoRef(item._id)}
                  className="reel-video"
                  src={item.video}
                  poster={item.poster || item.image || "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=80"}
                  autoPlay
                  muted={isMuted}
                  playsInline
                  loop
                  preload="auto"
                  onClick={() => {
                    const vid = videoRefs.current.get(item._id);
                    if (vid) {
                      if (vid.paused) vid.play().catch(() => {});
                      else vid.pause();
                    }
                  }}
                />
              )}

              <div className="reel-overlay">
                <div className="reel-overlay-gradient" aria-hidden="true" />
                
                {/* Top Controls */}
                <div className="reel-top-bar">
                  <div className="food-category-pill">
                    <span>🔥 Trending Dish</span>
                  </div>
                  <button className="sound-toggle-btn" onClick={toggleMute} title={isMuted ? "Unmute Sound" : "Mute Sound"}>
                    {isMuted ? (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="1" y1="1" x2="23" y2="23"/><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"/></svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
                    )}
                  </button>
                </div>

                {/* Bottom Content & Actions */}
                <div className="reel-bottom-wrapper">
                  <div className="reel-content">
                    {/* Food Partner info */}
                    {partnerId && (
                      <div className="store-partner-row">
                        <div className="store-avatar">
                          {partnerName.charAt(0).toUpperCase()}
                        </div>
                        <Link to={`/food-partner/${partnerId}`} className="store-info-title">
                          <span>{partnerName}</span>
                          <svg className="verified-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                        </Link>
                      </div>
                    )}

                    <h2 className="food-title-name">{item.name || 'Delicious Special Reel'}</h2>
                    
                    <p className="reel-description" title={item.description}>
                      {item.description}
                    </p>

                    <div className="food-meta-tags">
                      <span className="rating-badge">
                        ★ 4.9 Foodie Rating
                      </span>
                      <span className="price-tag">
                        Chef Verified
                      </span>
                    </div>
                  </div>

                  {/* Sidebar action icons */}
                  <div className="reel-actions">
                    <div className="reel-action-group">
                      <button
                        onClick={onLike ? () => onLike(item) : undefined}
                        className={`reel-action-btn ${item.likeCount > 0 ? 'active-like' : ''}`}
                        aria-label="Like"
                      >
                        <svg width="22" height="22" viewBox="0 0 24 24" fill={item.likeCount > 0 ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                          <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 22l7.8-8.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
                        </svg>
                      </button>
                      <div className="reel-action-count">{item.likeCount ?? item.likesCount ?? item.likes ?? 0}</div>
                    </div>

                    <div className="reel-action-group">
                      <button
                        className={`reel-action-btn ${item.savesCount > 0 ? 'active-save' : ''}`}
                        onClick={onSave ? () => onSave(item) : undefined}
                        aria-label="Bookmark"
                      >
                        <svg width="22" height="22" viewBox="0 0 24 24" fill={item.savesCount > 0 ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                          <path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1z" />
                        </svg>
                      </button>
                      <div className="reel-action-count">{item.savesCount ?? item.bookmarks ?? item.saves ?? 0}</div>
                    </div>

                    <div className="reel-action-group">
                      <button 
                        className="reel-action-btn" 
                        onClick={() => setActiveCommentsItem(item)}
                        aria-label="Comments"
                      >
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
                        </svg>
                      </button>
                      <div className="reel-action-count">{commentsList.length}</div>
                    </div>
                  </div>
                </div>

                {/* Comment Drawer Modal */}
                {activeCommentsItem?._id === item._id && (
                  <div className="comments-modal-backdrop" onClick={() => setActiveCommentsItem(null)}>
                    <div className="comments-modal-content" onClick={(e) => e.stopPropagation()}>
                      <div className="comments-header">
                        <span>Reviews & Comments ({commentsList.length})</span>
                        <button onClick={() => setActiveCommentsItem(null)} style={{ color: '#94a3b8' }}>✕</button>
                      </div>

                      <div className="comments-list">
                        {commentsList.length === 0 ? (
                          <p style={{ fontSize: '0.85rem', color: '#64748b', textAlign: 'center', margin: '1rem 0' }}>
                            Be the first to leave a review for this dish!
                          </p>
                        ) : (
                          commentsList.map((c, i) => (
                            <div key={i} className="comment-item">
                              <div className="comment-avatar">{(c.user || 'F').charAt(0)}</div>
                              <div>
                                <strong style={{ color: '#fff', fontSize: '0.85rem' }}>{c.user || 'Foodie'}</strong>
                                <p style={{ color: '#cbd5e1', fontSize: '0.85rem', marginTop: '2px' }}>{c.text || c}</p>
                              </div>
                            </div>
                          ))
                        )}
                      </div>

                      <form className="comment-form" onSubmit={(e) => handleAddComment(e, item._id)}>
                        <input
                          type="text"
                          placeholder="Add a culinary review..."
                          className="comment-input"
                          value={commentText}
                          onChange={(e) => setCommentText(e.target.value)}
                        />
                        <button type="submit" className="comment-submit-btn">Post</button>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default ReelFeed;
