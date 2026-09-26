import React, { useState } from 'react';
import '../../styles/auth-shared.css';
import { authAPI } from '../../services/api';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const CustomerLogin = () => {
  const navigate = useNavigate();
  const { loginUserSession } = useAuth();
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setLoading(true);

    try {
      const email = e.target.email.value;
      const password = e.target.password.value;

      const response = await authAPI.loginUser({ email, password });
      loginUserSession(response.data.user, response.data.token);
      navigate("/");
    } catch (err) {
      setErrorMsg(err.response?.data?.message || "Invalid customer credentials. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page-wrapper">
      <div className="auth-card" role="region" aria-labelledby="customer-login-title">
        {/* Customer Badge */}
        <div style={{
          alignSelf: 'center',
          background: 'rgba(255, 75, 62, 0.15)',
          border: '1px solid rgba(255, 75, 62, 0.35)',
          color: '#ff4b3e',
          fontSize: '0.78rem',
          fontWeight: 700,
          padding: '4px 14px',
          borderRadius: '9999px',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          textTransform: 'uppercase',
          letterSpacing: '0.06em'
        }}>
          🍔 Customer Portal
        </div>

        <header>
          <h1 id="customer-login-title" className="auth-title">Customer Sign In</h1>
          <p className="auth-subtitle">Welcome back! Access your saved food reels, review favorites, and foodie profile.</p>
        </header>

        {errorMsg && (
          <div style={{
            color: '#ef4444',
            background: 'rgba(239, 68, 68, 0.1)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            padding: '0.75rem',
            borderRadius: '8px',
            fontSize: '0.88rem'
          }}>
            {errorMsg}
          </div>
        )}

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="field-group">
            <label htmlFor="customer-email">Customer Email</label>
            <input
              id="customer-email"
              name="email"
              type="email"
              placeholder="customer@example.com"
              autoComplete="email"
              required
            />
          </div>

          <div className="field-group">
            <label htmlFor="customer-password">Password</label>
            <input
              id="customer-password"
              name="password"
              type="password"
              placeholder="••••••••"
              autoComplete="current-password"
              required
            />
          </div>

          <button className="auth-submit" type="submit" disabled={loading}>
            {loading ? 'Signing In...' : 'Sign In as Customer 🍔'}
          </button>
        </form>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.6rem',
          alignItems: 'center',
          borderTop: '1px solid var(--color-border)',
          paddingTop: '1rem'
        }}>
          <div className="auth-alt-action">
            New foodie customer? <Link to="/customer/register">Create Customer Account</Link>
          </div>
          <div className="auth-alt-action" style={{ fontSize: '0.85rem' }}>
            Are you an Admin or Partner? <Link to="/admin/login" style={{ color: '#818cf8' }}>Go to Admin Portal 🛡️</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerLogin;
