import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Overlay from './components/Overlay'
import RefundPolicy from './pages/RefundPolicy'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'
import './index.css'

function App() {
  const [showSplash, setShowSplash] = useState(true)

  // Detect iOS devices (iPhone, iPad, iPod)
  const isIOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent)

  useEffect(() => {
    // Failsafe: Hide splash screen after 5 seconds if video fails to play/end
    const timer = setTimeout(() => setShowSplash(false), 5000);
    return () => clearTimeout(timer);
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Overlay />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      
      <AnimatePresence>
        {showSplash && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: '#000000',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              pointerEvents: 'none' // Ensures clicks pass through while it fades out
            }}
          >
            <video
              src={isIOS ? "/strength-arena-logo.mp4" : "/strength-arena-logo.webm"}
              autoPlay
              muted
              playsInline
              onEnded={() => setShowSplash(false)}
              onError={() => setShowSplash(false)}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                mixBlendMode: isIOS ? 'screen' : 'normal',
                clipPath: isIOS ? 'circle(35% at center)' : 'none',
                WebkitClipPath: isIOS ? 'circle(35% at center)' : 'none'
              }}
            />
            <audio src="/roar.ogg" autoPlay />
          </motion.div>
        )}
      </AnimatePresence>
    </Router>
  )
}

export default App
