import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Sparkles, BarChart3, ArrowRight } from "lucide-react";
import Home1 from "../imports/Home1";
import Home5 from "../imports/Home5";
import Home2 from "../imports/Home2";

export function Prototype() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const mockups = [
    {
      title: "Rewards Dashboard",
      description: "Track your cashback, points, and Community Impact Score in real-time",
      component: Home1,
    },
    {
      title: "Business Analytics",
      description: "AI-powered insights help merchants optimize offers and understand customer trends",
      component: Home5,
    },
    {
      title: "Interactive SoundMap",
      description: "Discover nearby partner businesses with live offers and personalized recommendations",
      component: Home2,
    },
  ];

  return (
    <section ref={ref} className="py-24" style={{ backgroundColor: '#F7F8FA' }}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-6" style={{ color: '#003057', fontWeight: 700 }}>
            Prototype Highlights.
          </h2>
          <p className="max-w-2xl mx-auto mb-8" style={{ color: '#444444', fontSize: '1.125rem' }}>
            Built at HuskyHack 2025, our interactive prototype demonstrates the core functionality 
            of SoundScape with real AI-powered features and engaging user experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {mockups.map((mockup, index) => (
            <motion.div
              key={mockup.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="bg-white rounded-xl p-6 shadow-md h-full" style={{ border: '1px solid #E5E7EB' }}>
                {/* Phone mockup with actual Figma screen */}
                <div className="relative mb-6 flex justify-center">
                  <div 
                    className="rounded-3xl p-2 shadow-xl overflow-hidden relative"
                    style={{ 
                      backgroundColor: '#111111', 
                      width: '280px',
                      height: '580px'
                    }}
                  >
                    {/* Phone notch */}
                    <div 
                      className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 rounded-b-xl z-10" 
                      style={{ backgroundColor: '#111111' }}
                    />
                    
                    {/* Screen content - Figma import */}
                    <div 
                      className="w-full h-full rounded-2xl overflow-hidden"
                      style={{ 
                        backgroundColor: '#000'
                      }}
                    >
                      <div style={{
                        transform: 'scale(0.68)',
                        transformOrigin: 'top left',
                        width: '373px',
                        height: '100%'
                      }}>
                        <mockup.component />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="text-center">
                  <h4 className="mb-2" style={{ color: '#003057', fontWeight: 700 }}>{mockup.title}</h4>
                  <p className="text-sm" style={{ color: '#444444' }}>{mockup.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Demo CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div 
            className="rounded-xl p-8 md:p-12 text-center shadow-xl relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #003057 0%, #0066B3 100%)' }}
          >
            {/* Yellow glow orb */}
            <div 
              className="absolute w-64 h-64 rounded-full blur-3xl"
              style={{
                backgroundColor: '#FFD100',
                opacity: 0.15,
                right: '-10%',
                bottom: '-10%'
              }}
            />

            {/* Animated background pattern */}
            <motion.div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
              animate={{
                backgroundPosition: ["0px 0px", "30px 30px"],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <div className="relative z-10">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="inline-block mb-6"
              >
                <Sparkles className="w-12 h-12 text-white" />
              </motion.div>

              <h3 className="text-white mb-4" style={{ fontWeight: 700 }}>
                Experience SoundScape Live
              </h3>
              <p className="text-white/90 mb-8 max-w-xl mx-auto" style={{ fontSize: '1.125rem' }}>
                See our fully functional prototype in action. Explore the interactive map, 
                generate AI-powered offers, and experience the future of local commerce.
              </p>

              <div className="flex justify-center">
                <motion.a 
                  href="https://soundscape-app-ea975.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-lg shadow-lg transition-all flex items-center justify-center gap-2"
                  style={{ 
                    backgroundColor: '#FFD100',
                    color: '#003057',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    textDecoration: 'none'
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 20px 25px -5px rgba(255, 209, 0, 0.3), 0 8px 10px -6px rgba(255, 209, 0, 0.2)'
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Launch Interactive Demo
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}