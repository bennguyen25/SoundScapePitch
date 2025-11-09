import { motion } from "motion/react";
import { Waves } from "lucide-react";

interface PhoneMockupProps {
  children?: React.ReactNode;
  animate?: boolean;
  icon?: string;
  color?: string;
}

export function PhoneMockup({ children, animate = true, icon, color }: PhoneMockupProps) {
  return (
    <motion.div
      className="relative w-80 h-[600px] rounded-[3rem] p-3 shadow-2xl"
      style={{ backgroundColor: '#111111' }}
      animate={animate ? {
        y: [0, -10, 0],
      } : {}}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Phone notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 rounded-b-3xl z-10" style={{ backgroundColor: '#111111' }} />
      
      {/* Screen */}
      <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative" style={{ background: 'linear-gradient(180deg, #003057 0%, #004B87 50%, #0066B3 100%)' }}>
        {/* Yellow glow in screen */}
        <div 
          className="absolute w-32 h-32 rounded-full blur-3xl"
          style={{
            backgroundColor: '#FFD100',
            opacity: 0.2,
            left: '10%',
            top: '15%'
          }}
        />
        
        <div className="p-6 h-full flex flex-col relative z-10">
          {/* Wave icon at top */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-white rounded-full shadow-xl flex items-center justify-center">
              <Waves className="w-12 h-12" style={{ color: '#003057' }} />
            </div>
          </div>

          {/* App branding */}
          <div className="text-center mb-6">
            <h3 className="text-white mb-2" style={{ fontWeight: 700 }}>SoundScape</h3>
            <p style={{ color: '#FFD100', fontSize: '1rem', fontWeight: 600 }}>Banking That Feels Like Belonging</p>
          </div>

          {/* Description */}
          <p className="text-white/90 text-center text-sm mb-8">
            Connect with local businesses, earn rewards, and make an impact in your Washington community
          </p>

          {/* Connect button */}
          <div className="px-4">
            <div 
              className="rounded-lg p-4 text-center shadow-lg"
              style={{ backgroundColor: '#FFD100' }}
            >
              <span style={{ color: '#003057', fontWeight: 600, fontSize: '0.875rem' }}>
                Connect Your Account →
              </span>
            </div>
          </div>

          <p className="text-white/60 text-center text-sm mt-4">Sound Credit Union Member</p>

          {/* Map mockup at bottom */}
          <div className="mt-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4">
              <div className="space-y-2">
                <div className="h-2 bg-white/30 rounded-full w-3/4" />
                <div className="h-2 bg-white/30 rounded-full w-1/2" />
              </div>
              
              {/* Floating pins */}
              <div className="relative h-24 mt-3">
                <motion.div
                  className="absolute w-6 h-6 rounded-full shadow-lg"
                  style={{ backgroundColor: '#FFD100', left: "30%", top: "20%" }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute w-6 h-6 rounded-full shadow-lg"
                  style={{ backgroundColor: '#FFD100', left: "60%", top: "40%" }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
                />
              </div>
            </div>
          </div>

          {/* Custom children content */}
          {children}
        </div>
      </div>
    </motion.div>
  );
}