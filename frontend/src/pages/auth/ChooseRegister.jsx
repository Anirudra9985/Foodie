import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/auth-shared.css';

const ChooseRegister = () => {
  return (
    <div className="auth-page-wrapper">
      <div className="auth-card" role="region" aria-labelledby="choose-register-title">
        <header>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--color-primary-gradient)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', color: '#fff' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M12 6v6l4 2"/></svg>
          </div>
          <h1 id="choose-register-title" className="auth-title">Join FoodVibe</h1>
          <p className="auth-subtitle">Select your account type to register.</p>
        </header>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Link
            to="/customer/register"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1.1rem 1.25rem',
              borderRadius: 'var(--radius-md)',
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              color: '#fff',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
              boxShadow: 'var(--shadow-sm)'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-primary)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255, 75, 62, 0.15)', color: '#ff4b3e', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
              🍔
            </div>
            <div>
              <strong style={{ display: 'block', fontSize: '1.05rem', color: '#fff' }}>Customer Account</strong>
              <span style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)' }}>Explore short reels, bookmark dishes & post reviews</span>
            </div>
          </Link>

          <Link
            to="/admin/register"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1.1rem 1.25rem',
              borderRadius: 'var(--radius-md)',
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              color: '#fff',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
              boxShadow: 'var(--shadow-sm)'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#818cf8'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(99, 102, 241, 0.15)', color: '#818cf8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
              🛡️
            </div>
            <div>
              <strong style={{ display: 'block', fontSize: '1.05rem', color: '#fff' }}>Admin & Partner Account</strong>
              <span style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)' }}>Showcase restaurant dishes via short video reels</span>
            </div>
          </Link>
        </div>

        <div className="auth-alt-action" style={{ marginTop: '0.5rem', borderTop: '1px solid var(--color-border)', paddingTop: '1rem' }}>
          Already have an account? <Link to="/login">Sign in here</Link>
        </div>
      </div>
    </div>
  );
};

export default ChooseRegister;
