import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: '#0f172a', color: '#e5e7eb', padding: '4rem 5vw', fontFamily: 'Inter, sans-serif' }}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ maxWidth: '800px', margin: '0 auto', background: 'rgba(23, 26, 38, 0.7)', padding: '3rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}
      >
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#FF3278', textDecoration: 'none', marginBottom: '2rem', fontWeight: 'bold' }}>
          <ArrowLeft size={20} /> Back to Home
        </Link>
        
        <h1 style={{ fontSize: '3rem', fontFamily: 'Bebas Neue', color: '#ffffff', marginBottom: '2rem' }}>PRIVACY POLICY</h1>
        
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
          <p>At Strength Arena, we are committed to protecting your privacy and ensuring the security of your personal data. This Privacy Policy outlines how we collect, use, and safeguard your information.</p>

          <h2 style={{ color: '#FFDB17', marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem' }}>1. Information We Collect</h2>
          <p>When you register for a membership or contact us, we collect basic personal information including your name, email address, phone number, physical address, and emergency contact details. We may also collect health questionnaires to ensure your safety during physical activities.</p>
          
          <h2 style={{ color: '#FFDB17', marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem' }}>2. How We Use Your Information</h2>
          <p>Your data is used strictly for internal purposes, including:</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li>Processing your membership and payments.</li>
            <li>Sending important updates regarding facility hours, class schedules, or policy changes.</li>
            <li>Customizing your fitness and diet plans (for Elite and Premium members).</li>
            <li>Responding to emergency situations on the premises.</li>
          </ul>

          <h2 style={{ color: '#FFDB17', marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem' }}>3. Data Security and CCTV</h2>
          <p>We implement robust security measures to protect your digital data. Please be aware that for the safety of our members and staff, the Strength Arena facility is monitored by 24/7 CCTV surveillance, excluding locker rooms and therapy rooms.</p>

          <h2 style={{ color: '#FFDB17', marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem' }}>4. Common Gym Rules</h2>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li>Photography or video recording of other members without their explicit consent is strictly prohibited and violates our privacy terms.</li>
            <li>Members must not share their access credentials or allow non-members entry into the facility.</li>
          </ul>

          <p>We will never sell or rent your personal data to third-party marketers. If you have questions regarding your data, please contact our management team.</p>
        </div>
      </motion.div>
    </div>
  );
}
