import React, { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, CheckCircle2, Phone, Mail, MapPin, MessageCircle, Menu, X } from 'lucide-react'

const galleryImages = [
  'https://strengtharena.in/wp-content/uploads/2025/05/1-1024x1024.jpg',
  'https://strengtharena.in/wp-content/uploads/2025/05/2-1024x1024.jpg',
  'https://strengtharena.in/wp-content/uploads/2025/05/3-1024x1024.jpg',
  'https://strengtharena.in/wp-content/uploads/2025/05/4-1024x1024.jpg',
  'https://strengtharena.in/wp-content/uploads/2025/05/5-1024x1024.jpg',
  'https://strengtharena.in/wp-content/uploads/2025/05/6-1024x1024.jpg',
  'https://strengtharena.in/wp-content/uploads/2025/05/7-1024x1024.jpg',
  'https://strengtharena.in/wp-content/uploads/2025/05/8-1024x1024.jpg',
  'https://strengtharena.in/wp-content/uploads/2025/05/9-1024x1024.jpg',
  'https://strengtharena.in/wp-content/uploads/2025/05/10-1024x1024.jpg',
  'https://strengtharena.in/wp-content/uploads/2025/05/11-1024x1024.jpg',
  'https://strengtharena.in/wp-content/uploads/2025/05/12-1024x1024.jpg',
  'https://strengtharena.in/wp-content/uploads/2025/05/13-1024x1024.jpg',
  'https://strengtharena.in/wp-content/uploads/2025/05/IMG_3809.jpg',
  'https://strengtharena.in/wp-content/uploads/2025/05/IMG_5990-1024x895.jpg'
]

// Dummy video URLs (using a sleek Pexels/Pixabay fitness loop or placeholder)
const dummyVideo = "https://cdn.pixabay.com/video/2016/09/21/5460-184089938_tiny.mp4"
const trainers = Array(10).fill(dummyVideo)

export default function Overlay() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [backgroundVideoSrc, setBackgroundVideoSrc] = useState('/background.mp4')
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.playbackRate = 0.2 // Slow down the background video even more
    video.load()
    video
      .play()
      .catch((error) => {
        console.warn('Background video playback failed, using fallback:', error)
        if (backgroundVideoSrc !== dummyVideo) {
          setBackgroundVideoSrc(dummyVideo)
        }
      })
  }, [backgroundVideoSrc])

  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const headerY = useTransform(scrollYProgress, [0, 0.1], ['0%', '-100%']) // Hide header on scroll down if wanted, but let's just do an entrance

  return (
    <div className="overlay-container">
      <motion.header 
        className="header"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
      >
        <a href="#home" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src="/logo.jpeg" alt="Strength Arena" style={{ height: '40px', borderRadius: '50%' }} />
          STRENGTH<span>ARENA</span>
        </a>
        <nav className="nav-links" style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          <a href="#about">ABOUT US</a>
          <a href="#trainers">TRAINERS</a>
          <a href="#memberships">MEMBERSHIPS</a>
          <a href="#facility">FACILITY</a>
          <a href="#contact">CONTACT</a>
        </nav>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              width: '100%',
              background: '#171A26',
              display: 'flex',
              flexDirection: 'column',
              padding: '1.5rem 5vw',
              gap: '1.5rem',
              borderBottom: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.2rem' }}>ABOUT US</a>
            <a href="#trainers" onClick={() => setIsMobileMenuOpen(false)} style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.2rem' }}>TRAINERS</a>
            <a href="#memberships" onClick={() => setIsMobileMenuOpen(false)} style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.2rem' }}>MEMBERSHIPS</a>
            <a href="#facility" onClick={() => setIsMobileMenuOpen(false)} style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.2rem' }}>FACILITY</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.2rem' }}>CONTACT</a>
          </motion.div>
        )}
      </motion.header>

      {/* Hero Section */}
      <section id="home" className="section">
        {/* Full-bleed background media just like cult.fit */}
        <div className="hero-media-bg" style={{ overflow: 'hidden' }}>
          <motion.video 
            ref={videoRef}
            autoPlay 
            loop 
            muted 
            playsInline 
            preload="auto"
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover', 
              y: heroY,
              scale: 1.25,
              transformOrigin: 'bottom left'
            }}
          >
            <source src={backgroundVideoSrc} type="video/mp4" />
          </motion.video>
        </div>
        <div className="hero-gradient-overlay" />

        <motion.div
          className="hero-layout"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          <motion.div 
            className="hero-text"
            variants={{
              hidden: { opacity: 0, scale: 0.8, y: 50 },
              visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 1, type: "spring", bounce: 0.5 } }
            }}
          >
            <motion.h1 
              className="hero-title" 
              style={{ fontSize: 'clamp(4rem, 10vw, 7rem)', textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 50 } }
              }}
            >
              STRENGTH FOR EVERYBODY.<br/>ANY AGE, ANY STAGE.
            </motion.h1>
            <motion.p 
              className="hero-subtitle" 
              style={{ margin: '0 auto 2.5rem', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 50 } }
              }}
            >
              Regular exercise boosts your energy levels, helping you tackle daily tasks with more vitality and enthusiasm.
            </motion.p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <motion.a 
              href="#memberships" 
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ boxShadow: '0 10px 30px rgba(255, 50, 120, 0.4)' }}
            >
              <span>EXPLORE PLANS</span> <ArrowRight size={20} color="#171A26" />
            </motion.a>

            <motion.a 
              href="#" 
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ boxShadow: '0 10px 30px rgba(255, 50, 120, 0.4)' }}
            >
              <span>PAY FEE AND JOIN US</span>
            </motion.a>
          </div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="section" style={{ paddingBottom: '4rem', minHeight: 'auto', paddingTop: '4rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <h2 className="section-title">ABOUT <span>US</span></h2>
          <motion.div 
            className="glass-card" 
            style={{ maxWidth: '900px' }}
            whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.6)" }}
          >
            <p style={{ fontSize: '1.2rem', color: '#e5e7eb', marginBottom: '1.5rem', fontWeight: 'bold' }}>
              “Strength for Everybody – any age, any stage”
            </p>
            <p style={{ fontSize: '1.1rem', color: '#9ca3af', marginBottom: '1.5rem' }}>
              Karnataka is witnessing a significant transformation in its sports and fitness landscape with the development of several state-of-the-art facilities across the state. These initiatives aim to promote athletic excellence, foster community engagement, and position Karnataka as a premier destination for sports enthusiasts.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#9ca3af', marginBottom: '1.5rem' }}>
              Strength Arena is one of Karnataka’s largest premium sports and fitness facilities, spanning an impressive 25,000 square feet. Located in Davangere, this state-of-the-art fitness destination is designed to provide world-class amenities for a wide range of fitness, sports, and wellness activities. Built with a vision to inspire healthier lifestyles, Strength Arena combines modern infrastructure, advanced equipment, and expert training to deliver an exceptional fitness experience. As one of the most ambitious fitness projects in the region, it stands as a landmark development that is set to redefine the fitness culture in Davangere and across Karnataka.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Founder Section */}
      <section id="founder" className="section" style={{ paddingBottom: '4rem', paddingTop: '4rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="section-title">
            MEET THE <span>FOUNDER</span>
          </h2>
          <div className="glass-card" style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center' }}>
            <motion.div 
              style={{ flex: '1 1 300px', borderRadius: '16px', overflow: 'hidden', border: '2px solid #FF3278', boxShadow: '0 10px 30px rgba(255, 50, 120, 0.3)' }}
              whileHover={{ scale: 1.02 }}
            >
              <img src="/ceo.jpeg" alt="Surya K Ballari" style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover', maxHeight: '550px' }} />
            </motion.div>
            <div style={{ flex: '2 1 400px' }}>
              <h3 style={{ fontSize: '3rem', color: '#ffffff', marginBottom: '0.2rem', fontFamily: 'Bebas Neue', letterSpacing: '1px' }}>SURYA K BALLARI</h3>
              <p style={{ fontSize: '1.2rem', color: '#FF3278', fontWeight: 'bold', letterSpacing: '2px', marginBottom: '1.5rem' }}>
                FOUNDER & CEO
              </p>
              <p style={{ fontSize: '1.1rem', color: '#e5e7eb', lineHeight: '1.8' }}>
                Surya K Ballari is the Founder and CEO of Strength Arena Sports & Fitness and the Founder of Surya Groups. A passionate martial artist with over 10 years of experience in the fitness industry, Surya has dedicated his life to inspiring healthier lifestyles and promoting physical excellence. Strength Arena is not just a business for him—it is the realization of a lifelong dream built with passion, dedication, and a clear vision. 
                <br /><br />
                His mission is to transform Davangere into a healthier and fitter community by providing world-class fitness facilities, expert guidance, and a motivating environment where people of all ages can achieve their health and wellness goals. Through his leadership, experience, and unwavering commitment, Surya continues to empower individuals to become stronger, healthier, and more confident versions of themselves.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Trainers Section */}
      <section id="trainers" className="section" style={{ paddingBottom: '4rem', paddingTop: '4rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="section-title">
            OUR <span>TRAINERS</span>
          </h2>
          <div className="glass-card" style={{ maxWidth: '900px', marginBottom: '2rem' }}>
            <p style={{ fontSize: '1.2rem', color: '#ffffff', lineHeight: '1.8' }}>
              Our elite trainers are the driving force behind your transformation. They bring years of professional experience, unmatched dedication, and personalized attention to every single session. Whether your goal is to build strength, increase flexibility, or improve cardiovascular health, our team will design the perfect roadmap for you. We believe in educating our members, ensuring perfect form, and cultivating a community of relentless improvement.
              <br /><br />
              Our programs are tailored to push your limits safely and effectively, ensuring you break plateaus and achieve sustainable results. Join us and experience the difference that expert coaching, unwavering support, and a highly motivating environment can make in your life.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Memberships & Group Classes Section */}
      <section id="memberships" className="section" style={{ paddingBottom: '4rem', paddingTop: '4rem' }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
        >
          <motion.h2 
            className="section-title"
            variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
            style={{ marginBottom: '1rem' }}
          >
            MEMBERSHIP <span>PACKAGES</span>
          </motion.h2>

          {/* Short Term Memberships */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            {[{m: '01-MONTH', p: '2999'}, {m: '03-MONTH', p: '7999'}, {m: '06-MONTH', p: '12999'}].map((plan, i) => (
              <motion.div 
                key={i}
                className="glass-card"
                style={{ padding: '1.5rem', flex: '1 1 300px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid rgba(255, 219, 23, 0.5)' }}
                whileHover={{ y: -5, boxShadow: '0 5px 15px rgba(255, 219, 23, 0.2)' }}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              >
                <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{plan.m} MEMBERSHIP</span>
                <span style={{ color: '#FFDB17', fontSize: '1.5rem', fontWeight: 'bold' }}>₹ {plan.p}/-</span>
              </motion.div>
            ))}
          </div>

          {/* 1-Year Memberships */}
          <div className="grid-3" style={{ marginBottom: '5rem' }}>
            {/* 1-Year Basic */}
            <motion.div 
              className="glass-card" 
              style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}
              variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ y: -10, borderColor: '#FFDB17', boxShadow: '0 10px 30px rgba(255, 219, 23, 0.2)' }}
            >
              <h3 style={{ fontSize: '2rem', fontFamily: 'Bebas Neue', color: '#FFDB17', marginBottom: '1rem' }}>1-YEAR BASIC MEMBERSHIP</h3>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem', fontSize: '1rem', flex: 1, color: '#e5e7eb' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '12px' }}><CheckCircle2 size={18} color="#FFDB17" style={{ flexShrink: 0, marginTop: '4px' }} /> Full floor access, excluding therapy room</li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '12px' }}><CheckCircle2 size={18} color="#FFDB17" style={{ flexShrink: 0, marginTop: '4px' }} /> Access to scheduled group classes as planed from the management</li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '12px' }}><CheckCircle2 size={18} color="#FFDB17" style={{ flexShrink: 0, marginTop: '4px' }} /> General locker use</li>
              </ul>
              <p style={{ color: '#FF3278', fontSize: '2rem', fontWeight: 'bold', marginTop: 'auto' }}>₹ 16,899/-</p>
            </motion.div>

            {/* 1-Year Premium */}
            <motion.div 
              className="glass-card" 
              style={{ padding: '2rem', display: 'flex', flexDirection: 'column', border: '1px solid #FFDB17' }}
              variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(255, 219, 23, 0.4)' }}
            >
              <h3 style={{ fontSize: '2rem', fontFamily: 'Bebas Neue', color: '#FFDB17', marginBottom: '1rem' }}>1-YEAR PREMIUM MEMBERSHIP</h3>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem', fontSize: '1rem', flex: 1, color: '#e5e7eb' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '12px' }}><CheckCircle2 size={18} color="#FFDB17" style={{ flexShrink: 0, marginTop: '4px' }} /> Complete access to the entire floor</li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '12px' }}><CheckCircle2 size={18} color="#FFDB17" style={{ flexShrink: 0, marginTop: '4px' }} /> Access to the therapy room for one session per month</li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '12px' }}><CheckCircle2 size={18} color="#FFDB17" style={{ flexShrink: 0, marginTop: '4px' }} /> Personal locker with customizable number and name engraving</li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '12px' }}><CheckCircle2 size={18} color="#FFDB17" style={{ flexShrink: 0, marginTop: '4px' }} /> Access to scheduled group classes as planed from the management</li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '12px' }}><CheckCircle2 size={18} color="#FFDB17" style={{ flexShrink: 0, marginTop: '4px' }} /> Complimentary Wi-Fi access</li>
              </ul>
              <p style={{ color: '#FF3278', fontSize: '2rem', fontWeight: 'bold', marginTop: 'auto' }}>₹ 22,899/-</p>
            </motion.div>

            {/* 1-Year Elite */}
            <motion.div 
              className="glass-card" 
              style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}
              variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ y: -10, borderColor: '#FFDB17', boxShadow: '0 10px 30px rgba(255, 219, 23, 0.2)' }}
            >
              <h3 style={{ fontSize: '2rem', fontFamily: 'Bebas Neue', color: '#FFDB17', marginBottom: '1rem' }}>1-YEAR ELITE MEMBERSHIP</h3>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem', fontSize: '1rem', flex: 1, color: '#e5e7eb' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '12px' }}><CheckCircle2 size={18} color="#FFDB17" style={{ flexShrink: 0, marginTop: '4px' }} /> Exclusive access to the entire floor</li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '12px' }}><CheckCircle2 size={18} color="#FFDB17" style={{ flexShrink: 0, marginTop: '4px' }} /> Access to the therapy room for one session per month</li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '12px' }}><CheckCircle2 size={18} color="#FFDB17" style={{ flexShrink: 0, marginTop: '4px' }} /> Personal locker with customizable number and name engraving</li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '12px' }}><CheckCircle2 size={18} color="#FFDB17" style={{ flexShrink: 0, marginTop: '4px' }} /> Access to scheduled group classes as planed from the management</li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '12px' }}><CheckCircle2 size={18} color="#FFDB17" style={{ flexShrink: 0, marginTop: '4px' }} /> Customized diet meals as requested by the client (50 meals per membership)</li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '12px' }}><CheckCircle2 size={18} color="#FFDB17" style={{ flexShrink: 0, marginTop: '4px' }} /> Complimentary Wi-Fi access</li>
              </ul>
              <p style={{ color: '#FF3278', fontSize: '2rem', fontWeight: 'bold', marginTop: 'auto' }}>₹ 28,899/-</p>
            </motion.div>
          </div>

          {/* Group Classes Section */}
          <motion.h2 
            className="section-title"
            variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
            style={{ marginBottom: '1.5rem', marginTop: '2rem' }}
          >
            GROUP CLASS <span>PACKAGES</span>
          </motion.h2>

          <div className="grid-3">
            
            {/* Bouldering */}
            <motion.div className="glass-card" variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
              <h3 style={{ fontSize: '1.8rem', color: '#FFDB17', marginBottom: '0.2rem' }}>INDOOR BOULDERING WALL</h3>
              <p style={{ color: '#9ca3af', marginBottom: '1rem', fontSize: '0.9rem' }}>3 TO 19 YEARS</p>
              <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}><strong style={{color:'#FF3278'}}>BATCH-1:</strong> 06AM TO 07AM<br/><strong style={{color:'#FF3278'}}>BATCH-2:</strong> 07PM TO 08PM</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '0.5rem', fontSize: '1.1rem', fontWeight: 'bold' }}>
                <span>01-MONTH CLASSES</span> <span style={{ color: '#FF3278' }}>₹1999/-</span>
                <span>03-MONTH CLASSES</span> <span style={{ color: '#FF3278' }}>₹4999/-</span>
                <span>06-MONTH CLASSES</span> <span style={{ color: '#FF3278' }}>₹9999/-</span>
              </div>
            </motion.div>

            {/* Yoga */}
            <motion.div className="glass-card" variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
              <h3 style={{ fontSize: '1.8rem', color: '#FFDB17', marginBottom: '0.2rem' }}>YOGA CLASSES</h3>
              <p style={{ color: '#9ca3af', marginBottom: '1rem', fontSize: '0.9rem' }}>3 TO 18 YEARS</p>
              <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}><strong style={{color:'#FF3278'}}>BATCH-1:</strong> 05AM TO 06AM<br/><strong style={{color:'#FF3278'}}>BATCH-2:</strong> 05PM TO 06PM</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '0.5rem', fontSize: '1.1rem', fontWeight: 'bold' }}>
                <span>01-MONTH CLASSES</span> <span style={{ color: '#FF3278' }}>₹1499/-</span>
                <span>03-MONTH CLASSES</span> <span style={{ color: '#FF3278' }}>₹3999/-</span>
                <span>06-MONTH CLASSES</span> <span style={{ color: '#FF3278' }}>₹7499/-</span>
              </div>
            </motion.div>

            {/* Karate */}
            <motion.div className="glass-card" variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
              <h3 style={{ fontSize: '1.8rem', color: '#FFDB17', marginBottom: '0.2rem' }}>KARATE CLASSES</h3>
              <p style={{ color: '#9ca3af', marginBottom: '1rem', fontSize: '0.9rem' }}>3 TO 18 YEARS</p>
              <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}><strong style={{color:'#FF3278'}}>BATCH-1:</strong> 06AM TO 07AM<br/><strong style={{color:'#FF3278'}}>BATCH-2:</strong> 05PM TO 06PM</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '0.5rem', fontSize: '1.1rem', fontWeight: 'bold' }}>
                <span>01-MONTH CLASSES</span> <span style={{ color: '#FF3278' }}>₹1999/-</span>
                <span>03-MONTH CLASSES</span> <span style={{ color: '#FF3278' }}>₹4999/-</span>
                <span>06-MONTH CLASSES</span> <span style={{ color: '#FF3278' }}>₹9999/-</span>
              </div>
            </motion.div>

            {/* Gymnastics */}
            <motion.div className="glass-card" variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
              <h3 style={{ fontSize: '1.8rem', color: '#FFDB17', marginBottom: '0.2rem' }}>GYMNASTIC CLASSES</h3>
              <p style={{ color: '#9ca3af', marginBottom: '1rem', fontSize: '0.9rem' }}>3 TO 18 YEARS</p>
              <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}><strong style={{color:'#FF3278'}}>BATCH-1:</strong> 07AM TO 08AM<br/><strong style={{color:'#FF3278'}}>BATCH-2:</strong> 06PM TO 07PM</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '0.5rem', fontSize: '1.1rem', fontWeight: 'bold' }}>
                <span>01-MONTH CLASSES</span> <span style={{ color: '#FF3278' }}>₹1999/-</span>
                <span>03-MONTH CLASSES</span> <span style={{ color: '#FF3278' }}>₹4999/-</span>
                <span>06-MONTH CLASSES</span> <span style={{ color: '#FF3278' }}>₹9999/-</span>
              </div>
            </motion.div>

            {/* Dance */}
            <motion.div className="glass-card" variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
              <h3 style={{ fontSize: '1.8rem', color: '#FFDB17', marginBottom: '0.2rem' }}>DANCE CLASSES</h3>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', fontSize: '0.8rem' }}>
                <div>
                  <p style={{ color: '#9ca3af', marginBottom: '0.5rem' }}>FITNESS</p>
                  <p><strong style={{color:'#FF3278'}}>B1:</strong> 06-07AM (L)</p>
                  <p><strong style={{color:'#FF3278'}}>B2:</strong> 07-08AM (G)</p>
                  <p><strong style={{color:'#FF3278'}}>B3:</strong> 10:30-11:30AM (L)</p>
                  <p><strong style={{color:'#FF3278'}}>B4:</strong> 06-07PM (L)</p>
                </div>
                <div>
                  <p style={{ color: '#9ca3af', marginBottom: '0.5rem' }}>REGULAR</p>
                  <p><strong style={{color:'#FF3278'}}>B1:</strong> 05-06PM (C)</p>
                  <p><strong style={{color:'#FF3278'}}>B2:</strong> 06-07PM</p>
                  <p><strong style={{color:'#FF3278'}}>B3:</strong> 07-08PM</p>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '0.5rem', fontSize: '1.1rem', fontWeight: 'bold' }}>
                <span>01-MONTH CLASSES</span> <span style={{ color: '#FF3278' }}>₹1499/-</span>
                <span>03-MONTH CLASSES</span> <span style={{ color: '#FF3278' }}>₹3999/-</span>
                <span>06-MONTH CLASSES</span> <span style={{ color: '#FF3278' }}>₹7499/-</span>
              </div>
            </motion.div>

            {/* Combo */}
            <motion.div className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', border: '1px solid #FF3278' }} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
              <h3 style={{ fontSize: '2rem', color: '#FFDB17', marginBottom: '0.5rem' }}>KARATE + GYMNASTICS</h3>
              <p style={{ color: '#9ca3af', marginBottom: '1rem', fontSize: '1rem' }}>3 TO 18 YEARS</p>
              <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#FF3278' }}>₹2999 <span style={{fontSize:'1rem'}}>/MONTH</span></p>
            </motion.div>

          </div>
        </motion.div>
      </section>


      {/* Facility Section */}
      <section id="facility" className="section" style={{ paddingBottom: '4rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="section-title">
            OUR <span>FACILITY</span>
          </h2>
          <div className="gallery-grid">
            {galleryImages.map((src, index) => (
              <motion.div 
                key={index} 
                className="gallery-item"
                whileHover={{ scale: 1.05 }}
              >
                <img src={src} alt={`Facility ${index + 1}`} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section" style={{ minHeight: 'auto', padding: '6rem 5vw', background: 'rgba(23, 26, 38, 0.95)', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>GET IN <span>TOUCH</span></h2>
          <p style={{ color: '#9ca3af', marginBottom: '3rem', fontSize: '1.2rem' }}>Ready to start your fitness journey? Contact us today.</p>
          
          <motion.div 
            style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', justifyContent: 'center' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
          >
            {/* Call */}
            <a href="tel:+918884444652" style={{ textDecoration: 'none', color: 'inherit' }}>
              <motion.div 
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', cursor: 'pointer' }}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: "spring" } } }}
              >
                <motion.div style={{ background: 'rgba(255, 50, 120, 0.1)', padding: '1rem', borderRadius: '50%' }} whileHover={{ scale: 1.2, rotate: 360, transition: { duration: 0.5 } }}>
                  <Phone size={32} color="#FF3278" />
                </motion.div>
                <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Call Us</p>
                <p style={{ fontSize: '1rem', color: '#9ca3af' }}>+91 888-444-4652</p>
              </motion.div>
            </a>

            {/* WhatsApp */}
            <a href="https://wa.me/918884444652" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              <motion.div 
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', cursor: 'pointer' }}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: "spring" } } }}
              >
                <motion.div style={{ background: 'rgba(37, 211, 102, 0.1)', padding: '1rem', borderRadius: '50%' }} whileHover={{ scale: 1.2, rotate: 360, transition: { duration: 0.5 } }}>
                  <MessageCircle size={32} color="#25D366" />
                </motion.div>
                <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>WhatsApp</p>
                <p style={{ fontSize: '1rem', color: '#9ca3af' }}>+91 888-444-4652</p>
              </motion.div>
            </a>
            
            {/* Email */}
            <a href="mailto:strengtharena25@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>
              <motion.div 
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', cursor: 'pointer' }}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: "spring" } } }}
              >
                <motion.div style={{ background: 'rgba(98, 177, 242, 0.1)', padding: '1rem', borderRadius: '50%' }} whileHover={{ scale: 1.2, rotate: -360, transition: { duration: 0.5 } }}>
                  <Mail size={32} color="#62B1F2" />
                </motion.div>
                <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Email</p>
                <p style={{ fontSize: '1rem', color: '#9ca3af' }}>strengtharena25@gmail.com</p>
              </motion.div>
            </a>
            
            {/* Location */}
            <a href="https://maps.app.goo.gl/k1i6pcBQsJG6cjzX6" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              <motion.div 
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', cursor: 'pointer' }}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: "spring" } } }}
              >
                <motion.div style={{ background: 'rgba(255, 219, 23, 0.1)', padding: '1rem', borderRadius: '50%' }} whileHover={{ scale: 1.2, y: -10, transition: { type: "spring", bounce: 0.7 } }}>
                  <MapPin size={32} color="#FFDB17" />
                </motion.div>
                <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Location</p>
                <p style={{ fontSize: '1rem', color: '#9ca3af' }}>Davangere, Karnataka</p>
              </motion.div>
            </a>
          </motion.div>
        </div>
        
        {/* Policy Footer */}
        <div style={{ width: '100%', borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '4rem', paddingTop: '2rem', display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <Link to="/refund-policy" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.9rem' }}>Refund Policy</Link>
          <Link to="/privacy-policy" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.9rem' }}>Privacy Policy</Link>
          <Link to="/terms" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.9rem' }}>Terms & Conditions</Link>
        </div>
      </section>
    </div>
  )
}
