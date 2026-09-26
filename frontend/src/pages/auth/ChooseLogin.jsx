import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/auth-shared.css';

const ChooseLogin = () => {
  return (
    <div className="auth-page-wrapper">
      <div className="auth-card" role="region" aria-labelledby="choose-login-title">
        <header>
          <div style={{
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            background: 'var(--color-primary-gradient)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1rem',
            color: '#fff',
            boxShadow: 'var(--shadow-glow)'
          }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
              <polyline points="10 17 15 12 10 7"/>
              <line x1="15" y1="12" x2="3" y2="12"/>
            </svg>
          </div>
          <h1 id="choose-login-title" className="auth-title">FoodVibe Portal Sign In</h1>
          <p className="auth-subtitle">Please select your portal type to continue.</p>
        </header>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          {/* Customer Portal Link */}
          <Link
            to="/customer/login"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.25rem',
              padding: '1.25rem',
              borderRadius: 'var(--radius-lg)',
              background: 'var(--color-surface)',
              border: '1.5px solid rgba(255, 75, 62, 0.3)',
              color: '#fff',
              textDecoration: 'none',
              transition: 'all 0.25s ease',
              boxShadow: 'var(--shadow-md)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-primary)';
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 75, 62, 0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 75, 62, 0.3)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--shadow-md)';
            }}
          >
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              background: 'rgba(255, 75, 62, 0.18)',
              color: '#ff4b3e',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              flexShrink: 0
            }}>
              🍔
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '3px' }}>
                <strong style={{ fontSize: '1.1rem', color: '#fff' }}>Customer Login</strong>
                <span style={{ fontSize: '0.68rem', fontWeight: 700, padding: '2px 8px', borderRadius: '9999px', background: 'rgba(255, 75, 62, 0.2)', color: '#ff4b3e' }}>Foodie Portal</span>
              </div>
              <span style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: 1.4, display: 'block' }}>
                Watch food reels, save favorite dishes, like, and review local kitchens.
              </span>
            </div>
          </Link>

          {/* Admin & Partner Portal Link */}
          <Link
            to="/admin/login"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.25rem',
              padding: '1.25rem',
              borderRadius: 'var(--radius-lg)',
              background: 'var(--color-surface)',
              border: '1.5px solid rgba(99, 102, 241, 0.3)',
              color: '#fff',
              textDecoration: 'none',
              transition: 'all 0.25s ease',
              boxShadow: 'var(--shadow-md)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#818cf8';
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(99, 102, 241, 0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.3)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--shadow-md)';
            }}
          >
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              background: 'rgba(99, 102, 241, 0.18)',
              color: '#818cf8',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              flexShrink: 0
            }}>
              🛡️
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '3px' }}>
                <strong style={{ fontSize: '1.1rem', color: '#fff' }}>Admin & Partner Login</strong>
                <span style={{ fontSize: '0.68rem', fontWeight: 700, padding: '2px 8px', borderRadius: '9999px', background: 'rgba(99, 102, 241, 0.2)', color: '#818cf8' }}>Admin Portal</span>
              </div>
              <span style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: 1.4, display: 'block' }}>
                Upload video reels, manage restaurant profiles, and track video analytics.
              </span>
            </div>
          </Link>
        </div>

        <div className="auth-alt-action" style={{ marginTop: '0.5rem', borderTop: '1px solid var(--color-border)', paddingTop: '1rem' }}>
          Don't have an account yet? <Link to="/register">Register here</Link>
        </div>
      </div>
    </div>
  );
};

export default ChooseLogin;
