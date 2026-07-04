import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Terms() {
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
        
        <h1 style={{ fontSize: '3rem', fontFamily: 'Bebas Neue', color: '#ffffff', marginBottom: '2rem' }}>TERMS & CONDITIONS</h1>
        
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
          <p>Welcome to Strength Arena. By accessing our facility and purchasing a membership, you agree to abide by the following terms and conditions.</p>

          <h2 style={{ color: '#FFDB17', marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem' }}>1. Membership & Access</h2>
          <p>Memberships are strictly non-transferable. Access to the facility requires a valid active membership. Management reserves the right to deny entry or revoke membership without refund if these terms are violated.</p>
          
          <h2 style={{ color: '#FFDB17', marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem' }}>2. Health & Safety</h2>
          <p>You agree that you are physically capable of engaging in the activities provided by Strength Arena. You are strongly advised to seek medical clearance before beginning any new exercise regimen. Strength Arena is not liable for any injuries sustained on the premises resulting from improper use of equipment or failure to follow trainer instructions.</p>

          <h2 style={{ color: '#FFDB17', marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem' }}>3. Common Gym Rules</h2>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li><strong>Hygiene:</strong> Use a personal towel during workouts and wipe down equipment after use.</li>
            <li><strong>Equipment:</strong> All weights, dumbbells, and plates must be returned to their designated racks immediately after use. Do not drop weights aggressively.</li>
            <li><strong>Etiquette:</strong> Allow others to "work in" between your sets if they request it. Do not monopolize multiple pieces of equipment during peak hours.</li>
            <li><strong>Conduct:</strong> Use of foul language, aggressive behavior, or fighting will result in immediate expulsion from the gym.</li>
            <li><strong>Dress Code:</strong> Proper athletic attire (no jeans or sandals) is strictly enforced for safety reasons.</li>
          </ul>

          <h2 style={{ color: '#FFDB17', marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem' }}>4. Facility Operating Hours</h2>
          <p>Management reserves the right to alter operating hours, class schedules, and trainer availability due to holidays, maintenance, or unforeseen circumstances. We will make every effort to notify members in advance.</p>

          <p style={{ marginTop: '2rem' }}>By joining Strength Arena, you commit to upholding these standards to ensure a safe, motivating, and welcoming environment for everybody.</p>
        </div>
      </motion.div>
    </div>
  );
}
