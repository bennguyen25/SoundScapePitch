import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Users, Building, Heart, Sparkles, Waves } from "lucide-react";

export function Solution() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #003057 0%, #004B87 50%, #0066B3 100%)' }}>
      {/* Yellow glow orbs */}
      <div 
        className="absolute w-40 h-40 rounded-full blur-3xl"
        style={{
          backgroundColor: '#FFD100',
          opacity: 0.15,
          left: '10%',
          top: '20%'
        }}
      />
      <div 
        className="absolute w-48 h-48 rounded-full blur-3xl"
        style={{
          backgroundColor: '#FFD100',
          opacity: 0.12,
          right: '10%',
          bottom: '20%'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-6 text-white" style={{ fontWeight: 700 }}>
            SoundScape Makes Every Transaction Count.
          </h2>
          <p className="max-w-2xl mx-auto text-white/90" style={{ fontSize: '1.125rem' }}>
            SoundScape is an AI-powered module that integrates seamlessly into Sound Credit Union's mobile app, 
            creating a thriving ecosystem where members, merchants, and the community all win.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left: Connection diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Center hub with wave icon */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full flex items-center justify-center shadow-2xl z-10"
                style={{ backgroundColor: '#FFD100' }}
                animate={{
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    "0 20px 25px -5px rgba(255, 209, 0, 0.3)",
                    "0 20px 25px -5px rgba(255, 209, 0, 0.5)",
                    "0 20px 25px -5px rgba(255, 209, 0, 0.3)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Waves className="w-12 h-12" style={{ color: '#003057' }} />
              </motion.div>

              {/* Orbiting elements */}
              {[
                { Icon: Users, label: "Members", angle: 0, color: '#0066B3' },
                { Icon: Building, label: "Merchants", angle: 120, color: '#004B87' },
                { Icon: Heart, label: "Community", angle: 240, color: '#003057' },
              ].map(({ Icon, label, angle, color }, index) => {
                const radian = (angle * Math.PI) / 180;
                const radius = 140;
                const x = Math.cos(radian) * radius;
                const y = Math.sin(radian) * radius;

                return (
                  <motion.div
                    key={label}
                    className="absolute top-1/2 left-1/2"
                    style={{
                      x: x - 40,
                      y: y - 40,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
                  >
                    <motion.div
                      animate={{
                        y: [0, -8, 0],
                      }}
                      transition={{
                        duration: 2,
                        delay: index * 0.3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="w-20 h-20 rounded-xl flex items-center justify-center shadow-xl bg-white">
                        <Icon className="w-10 h-10" style={{ color: color }} />
                      </div>
                      <p className="text-center mt-2 text-white" style={{ fontWeight: 600 }}>{label}</p>
                    </motion.div>

                    {/* Connection line */}
                    <motion.div
                      className="absolute top-10 left-10 w-1"
                      style={{
                        height: `${radius - 80}px`,
                        transformOrigin: "top",
                        rotate: `${angle + 180}deg`,
                        background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.3), transparent)'
                      }}
                      initial={{ scaleY: 0 }}
                      animate={isInView ? { scaleY: 1 } : {}}
                      transition={{ delay: 0.6 + index * 0.2, duration: 0.8 }}
                    />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: App interface mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white rounded-xl shadow-2xl p-8" style={{ border: '1px solid rgba(255, 209, 0, 0.2)' }}>
              {/* App header */}
              <div className="flex items-center gap-3 mb-6 pb-6" style={{ borderBottom: '1px solid #E5E7EB' }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#0066B3' }}>
                  <span className="text-white">💳</span>
                </div>
                <div>
                  <h4 style={{ color: '#003057', fontWeight: 700 }}>Sound Credit Union</h4>
                  <p className="text-sm" style={{ color: '#6B7280' }}>Mobile Banking App</p>
                </div>
              </div>

              {/* Menu items */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-[#F7F8FA]">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#F7F8FA' }}>
                    <span className="text-sm">🏠</span>
                  </div>
                  <span className="text-sm" style={{ color: '#444444' }}>Dashboard</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-[#F7F8FA]">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#F7F8FA' }}>
                    <span className="text-sm">💰</span>
                  </div>
                  <span className="text-sm" style={{ color: '#444444' }}>Accounts</span>
                </div>

                {/* SoundScape module - highlighted */}
                <motion.div
                  className="relative p-4 rounded-xl shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #003057 0%, #0066B3 100%)' }}
                  animate={{
                    boxShadow: [
                      "0 4px 6px -1px rgba(0, 102, 179, 0.3)",
                      "0 10px 15px -3px rgba(0, 102, 179, 0.4)",
                      "0 4px 6px -1px rgba(0, 102, 179, 0.3)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="absolute -right-2 -top-2 w-6 h-6 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: '#FFD100' }}>
                    <Sparkles className="w-3 h-3" style={{ color: '#003057' }} />
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <Waves className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h5 className="text-white" style={{ fontWeight: 700 }}>SoundScape</h5>
                      <p className="text-white/80 text-sm">Discover local businesses</p>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-2">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 text-center">
                      <p className="text-white text-xs" style={{ fontWeight: 700 }}>12</p>
                      <p className="text-white/70 text-xs">Nearby</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 text-center">
                      <p className="text-white text-xs" style={{ fontWeight: 700 }}>5</p>
                      <p className="text-white/70 text-xs">New Offers</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 text-center">
                      <p className="text-white text-xs" style={{ fontWeight: 700 }}>$245</p>
                      <p className="text-white/70 text-xs">Impact</p>
                    </div>
                  </div>
                </motion.div>

                <div className="flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-[#F7F8FA]">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#F7F8FA' }}>
                    <span className="text-sm">📊</span>
                  </div>
                  <span className="text-sm" style={{ color: '#444444' }}>Reports</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}