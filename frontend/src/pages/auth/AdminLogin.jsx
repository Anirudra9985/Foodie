import React, { useState } from 'react';
import '../../styles/auth-shared.css';
import { authAPI } from '../../services/api';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const AdminLogin = () => {
  const navigate = useNavigate();
  const { loginPartnerSession } = useAuth();
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setLoading(true);

    try {
      const email = e.target.email.value;
      const password = e.target.password.value;

      const response = await authAPI.loginFoodPartner({ email, password });
      loginPartnerSession(response.data.foodPartner, response.data.token);
      navigate("/create-food");
    } catch (err) {
      setErrorMsg(err.response?.data?.message || "Invalid admin/partner credentials. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page-wrapper" style={{ background: 'radial-gradient(circle at 50% 20%, rgba(99, 102, 241, 0.18) 0%, #080b12 70%)' }}>
      <div className="auth-card" role="region" aria-labelledby="admin-login-title" style={{ borderColor: 'rgba(99, 102, 241, 0.25)' }}>
        {/* Admin Badge */}
        <div style={{
          alignSelf: 'center',
          background: 'rgba(99, 102, 241, 0.18)',
          border: '1px solid rgba(99, 102, 241, 0.4)',
          color: '#818cf8',
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
          🛡️ Admin & Partner Portal
        </div>

        <header>
          <h1 id="admin-login-title" className="auth-title">Admin Sign In</h1>
          <p className="auth-subtitle">Access administrative controls, manage food video reels, and upload kitchen menus.</p>
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
            <label htmlFor="admin-email">Admin / Business Email</label>
            <input
              id="admin-email"
              name="email"
              type="email"
              placeholder="admin@restaurant.com"
              autoComplete="email"
              required
            />
          </div>

          <div className="field-group">
            <label htmlFor="admin-password">Password</label>
            <input
              id="admin-password"
              name="password"
              type="password"
              placeholder="••••••••"
              autoComplete="current-password"
              required
            />
          </div>

          <button
            className="auth-submit"
            type="submit"
            disabled={loading}
            style={{
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              boxShadow: '0 6px 20px rgba(99, 102, 241, 0.4)'
            }}
          >
            {loading ? 'Authenticating...' : 'Sign In as Admin 🛡️'}
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
            Need an Admin/Partner Account? <Link to="/admin/register" style={{ color: '#818cf8' }}>Register Admin Portal</Link>
          </div>
          <div className="auth-alt-action" style={{ fontSize: '0.85rem' }}>
            Are you a foodie customer? <Link to="/customer/login" style={{ color: 'var(--color-primary)' }}>Switch to Customer Login 🍔</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
