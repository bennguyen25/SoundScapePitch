import { motion } from "motion/react";
import { Smartphone, Github, Mail, Heart, Waves } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-16" style={{ backgroundColor: '#003057', color: 'white' }}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: '#FFD100' }}
              >
                <Waves className="w-6 h-6" style={{ color: '#003057' }} />
              </div>
              <h3 className="text-white" style={{ fontWeight: 700 }}>SoundScape</h3>
            </div>
            <p className="text-white/70 text-sm mb-4">
              AI-powered local commerce for Sound Credit Union members.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/70">
              <Heart className="w-4 h-4" style={{ color: '#FFD100' }} />
              <span>Built with community in mind</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4" style={{ fontWeight: 700 }}>Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <motion.a 
                  href="#" 
                  className="text-white/70 text-sm flex items-center gap-2 transition-colors"
                  whileHover={{ color: '#FFD100', x: 5 }}
                >
                  <Smartphone className="w-4 h-4" />
                  View Prototype
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#" 
                  className="text-white/70 text-sm flex items-center gap-2 transition-colors"
                  whileHover={{ color: '#FFD100', x: 5 }}
                >
                  <Github className="w-4 h-4" />
                  GitHub Repository
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#" 
                  className="text-white/70 text-sm flex items-center gap-2 transition-colors"
                  whileHover={{ color: '#FFD100', x: 5 }}
                >
                  <Mail className="w-4 h-4" />
                  Contact Team
                </motion.a>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-white mb-4" style={{ fontWeight: 700 }}>Features</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <motion.li 
                className="cursor-pointer transition-colors"
                whileHover={{ color: '#FFD100', x: 5 }}
              >
                SoundMap
              </motion.li>
              <motion.li 
                className="cursor-pointer transition-colors"
                whileHover={{ color: '#FFD100', x: 5 }}
              >
                Smart Business Assistant
              </motion.li>
              <motion.li 
                className="cursor-pointer transition-colors"
                whileHover={{ color: '#FFD100', x: 5 }}
              >
                Reward Engine
              </motion.li>
              <motion.li 
                className="cursor-pointer transition-colors"
                whileHover={{ color: '#FFD100', x: 5 }}
              >
                Impact Tracking
              </motion.li>
            </ul>
          </div>

          {/* Hackathon Info */}
          <div>
            <h4 className="text-white mb-4" style={{ fontWeight: 700 }}>Event</h4>
            <div 
              className="rounded-xl p-4"
              style={{ 
                backgroundColor: 'rgba(255, 209, 0, 0.1)',
                border: '1px solid rgba(255, 209, 0, 0.3)'
              }}
            >
              <div className="text-sm mb-2" style={{ color: '#FFD100', fontWeight: 600 }}>HuskyHack 2025</div>
              <div className="text-xs text-white/60 mb-3">University of Washington</div>
              <div className="flex items-center gap-2">
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: '#FFD100' }}
                >
                  <span className="text-xs">💜</span>
                </div>
                <div className="text-xs text-white/60">UW Seattle</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6">
              {/* Sound Credit Union logo placeholder */}
              <div className="flex items-center gap-2">
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: '#0066B3' }}
                >
                  <span className="text-xs">💳</span>
                </div>
                <span className="text-sm text-white/60">Powered by Sound Credit Union</span>
              </div>
            </div>

            <div className="flex items-center gap-6 text-sm text-white/60">
              <span>© 2025 SoundScape</span>
              <span className="hidden md:inline">•</span>
              <span>Made at HuskyHack</span>
            </div>

            <div className="flex items-center gap-4">
              <motion.a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: '#FFD100'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5 text-white/70" />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: '#FFD100'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5 text-white/70" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
