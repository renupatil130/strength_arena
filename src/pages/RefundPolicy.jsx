import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function RefundPolicy() {
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
        
        <h1 style={{ fontSize: '3rem', fontFamily: 'Bebas Neue', color: '#ffffff', marginBottom: '2rem' }}>REFUND POLICY</h1>
        
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
          <h2 style={{ color: '#FFDB17', marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem' }}>1. Membership Cancellations</h2>
          <p>All membership purchases at Strength Arena are generally non-refundable. However, we understand that exceptional circumstances (such as severe medical conditions or relocation out of the city) may arise. In such cases, members may apply for a prorated refund or freeze their membership, subject to management approval and valid documentation.</p>
          
          <h2 style={{ color: '#FFDB17', marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem' }}>2. Group Class Packages</h2>
          <p>Group class packages (Yoga, Dance, Karate, Gymnastics, Bouldering) are strictly non-refundable and non-transferable once the batch has commenced. If you need to switch batches, you must do so within the first 3 days of the month, subject to availability.</p>

          <h2 style={{ color: '#FFDB17', marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem' }}>3. Personal Training (PT) Sessions</h2>
          <p>Unused Personal Training sessions cannot be refunded. If a trainer is unavailable, a substitute trainer of equal qualification will be provided, or the session will be rescheduled.</p>

          <h2 style={{ color: '#FFDB17', marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem' }}>4. Common Gym Rules</h2>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li>Proper athletic attire and clean, closed-toe gym shoes are mandatory at all times.</li>
            <li>Members must re-rack their weights and wipe down equipment after use.</li>
            <li>Outside food and glass containers are strictly prohibited on the gym floor.</li>
            <li>Disrespectful behavior, harassment, or verbal abuse towards staff or other members will result in immediate termination of membership without a refund.</li>
          </ul>

          <p>For any refund queries, please contact our support desk directly at the facility or via our official contact email.</p>
        </div>
      </motion.div>
    </div>
  );
}
