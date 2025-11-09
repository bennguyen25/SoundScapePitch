import { motion } from "motion/react";
import { Button } from "./ui/button";
import { PhoneMockup } from "./PhoneMockup";

export function Hero() {
  // Yellow glow orbs
  const glowOrbs = [
    { size: 150, x: '15%', y: '20%', delay: 0, opacity: 0.27 },
    { size: 200, x: '75%', y: '70%', delay: 1, opacity: 0.20 },
  ];

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #003057 0%, #004B87 50%, #0066B3 100%)'
      }}
    >
      {/* Yellow glow orbs */}
      {glowOrbs.map((orb, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full blur-3xl"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            backgroundColor: '#FFD100',
            opacity: orb.opacity,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [orb.opacity, orb.opacity * 0.7, orb.opacity],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}

      {/* Wave pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="wave-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 50 Q 25 40, 50 50 T 100 50" fill="none" stroke="#0066B3" strokeWidth="2"/>
              <path d="M0 60 Q 25 50, 50 60 T 100 60" fill="none" stroke="#0066B3" strokeWidth="2"/>
              <path d="M0 70 Q 25 60, 50 70 T 100 70" fill="none" stroke="#0066B3" strokeWidth="2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wave-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-6 px-4 py-2 rounded-full"
              style={{ 
                backgroundColor: 'rgba(255, 209, 0, 0.15)',
                border: '1px solid rgba(255, 209, 0, 0.3)'
              }}
            >
              <span style={{ color: '#FFD100', fontWeight: 600 }}>Powered by Sound Credit Union</span>
            </motion.div>

            <h1 className="mb-6 text-white" style={{ fontWeight: 700, lineHeight: 1.2 }}>
              Where every local dollar creates a ripple of community good.
            </h1>

            <p className="mb-8 max-w-xl mx-auto lg:mx-0 text-white/90" style={{ fontSize: '1.125rem' }}>
              SoundScape connects credit union members and local businesses through AI-powered engagement.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  asChild
                  className="px-8 py-6 shadow-lg hover:shadow-xl transition-all" 
                  style={{ 
                    backgroundColor: '#FFD100', 
                    color: '#003057',
                    borderRadius: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    fontSize: '0.875rem',
                    fontWeight: 600
                  }}
                >
                  <a href="https://soundscape-app-ea975.web.app/" target="_blank" rel="noopener noreferrer">
                    View Prototype
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Right content - Phone mockup with floating icons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative flex justify-center items-center"
          >
            {/* Phone mockup with wave icon */}
            <PhoneMockup />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 rounded-full flex justify-center pt-2" style={{ borderColor: '#FFD100' }}>
          <motion.div
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: '#FFD100' }}
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}