import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/auth-shared.css';
import { authAPI } from '../../services/api';
import { useAuth } from '../../context/AuthContext';

const FoodPartnerRegister = () => {
  const navigate = useNavigate();
  const { loginPartnerSession } = useAuth();
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setLoading(true);

    try {
      const businessName = e.target.businessName.value;
      const contactName = e.target.contactName.value;
      const phone = e.target.phone.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
      const address = e.target.address.value;

      const response = await authAPI.registerFoodPartner({
        name: businessName,
        contactName,
        phone,
        email,
        password,
        address
      });

      loginPartnerSession(response.data.foodPartner, response.data.token);
      navigate("/create-food");
    } catch (err) {
      setErrorMsg(err.response?.data?.message || "Partner registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page-wrapper">
      <div className="auth-card" role="region" aria-labelledby="partner-register-title">
        <header>
          <h1 id="partner-register-title" className="auth-title">Partner Sign Up</h1>
          <p className="auth-subtitle">Share your culinary creations and grow your restaurant business.</p>
        </header>

        <nav className="auth-alt-action" style={{ marginTop: '-4px' }}>
          <strong style={{ fontWeight: 600 }}>Switch:</strong> <Link to="/user/register">User</Link> • <Link to="/food-partner/register">Food partner</Link>
        </nav>

        {errorMsg && (
          <div style={{ color: '#ef4444', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', padding: '0.75rem', borderRadius: '8px', fontSize: '0.88rem', margin: '0.5rem 0' }}>
            {errorMsg}
          </div>
        )}

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="field-group">
            <label htmlFor="businessName">Business Name</label>
            <input id="businessName" name="businessName" placeholder="e.g., Gourmet Kitchen" autoComplete="organization" required />
          </div>
          <div className="two-col">
            <div className="field-group">
              <label htmlFor="contactName">Contact Name</label>
              <input id="contactName" name="contactName" placeholder="Jane Doe" autoComplete="name" required />
            </div>
            <div className="field-group">
              <label htmlFor="phone">Phone</label>
              <input id="phone" name="phone" placeholder="+1 555 123 4567" autoComplete="tel" required />
            </div>
          </div>
          <div className="field-group">
            <label htmlFor="email">Business Email</label>
            <input id="email" name="email" type="email" placeholder="business@example.com" autoComplete="email" required />
          </div>
          <div className="field-group">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" placeholder="••••••••" autoComplete="new-password" required />
          </div>
          <div className="field-group">
            <label htmlFor="address">Address</label>
            <input id="address" name="address" placeholder="123 Market Street" autoComplete="street-address" required />
            <p className="small-note">Full address helps customers locate your restaurant easily.</p>
          </div>
          <button className="auth-submit" type="submit" disabled={loading}>
            {loading ? 'Registering Account...' : 'Create Partner Account'}
          </button>
        </form>
        <div className="auth-alt-action">
          Already a partner? <Link to="/food-partner/login">Sign in</Link>
        </div>
      </div>
    </div>
  );
};

export default FoodPartnerRegister;
