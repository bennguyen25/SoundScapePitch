import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { Tag, DollarSign, Users, Building } from "lucide-react";

function AnimatedCounter({ end, duration = 2, prefix = "", suffix = "" }: { end: number; duration?: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function Impact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { icon: Users, value: 170000, prefix: "", suffix: "", label: "Credit Union Members", color: '#0066B3' },
    { icon: Building, value: 8000, prefix: "", suffix: "+", label: "Partner Businesses", color: '#004B87' },
    { icon: DollarSign, value: 3, prefix: "$", suffix: "B", label: "Assets Managed", color: '#FFD100' },
    { icon: Tag, value: 1000, prefix: "", suffix: "+", label: "Business Offers", color: '#FFD100' },
  ];

  return (
    <section ref={ref} className="py-24 relative overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-6" style={{ color: '#003057', fontWeight: 700 }}>
            Every Swipe Shapes the Community.
          </h2>
          <p className="max-w-2xl mx-auto" style={{ color: '#444444', fontSize: '1.125rem' }}>
            Real-time data and AI-driven insights show how member spending creates tangible impact 
            in the local economy, building stronger communities one transaction at a time.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div 
                className="rounded-xl p-6 transition-all shadow-md"
                style={{ 
                  backgroundColor: '#F7F8FA',
                  border: '1px solid #E5E7EB'
                }}
              >
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: stat.color }}
                >
                  <stat.icon className="w-6 h-6" style={{ color: stat.color === '#FFD100' ? '#003057' : 'white' }} />
                </div>
                <div className="mb-2" style={{ fontSize: '2rem', fontWeight: 700, color: '#003057' }}>
                  <AnimatedCounter end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </div>
                <p className="text-sm" style={{ color: '#6B7280' }}>{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Map visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div 
            className="rounded-xl p-8 shadow-xl relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #003057 0%, #0066B3 100%)' }}
          >
            {/* Yellow glow */}
            <div 
              className="absolute w-64 h-64 rounded-full blur-3xl"
              style={{
                backgroundColor: '#FFD100',
                opacity: 0.1,
                right: '-10%',
                top: '-10%'
              }}
            />

            <h3 className="text-white mb-6 text-center relative z-10" style={{ fontWeight: 700 }}>Community Impact Map</h3>
            
            {/* Simplified map visualization */}
            <div className="relative h-80 rounded-xl overflow-hidden" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
              {/* Grid overlay */}
              <div className="absolute inset-0 opacity-20">
                <div className="w-full h-full" style={{
                  backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                  backgroundSize: "30px 30px"
                }} />
              </div>

              {/* Animated impact pins */}
              {[
                { x: "20%", y: "30%", delay: 0 },
                { x: "45%", y: "25%", delay: 0.3 },
                { x: "70%", y: "35%", delay: 0.6 },
                { x: "35%", y: "55%", delay: 0.9 },
                { x: "60%", y: "60%", delay: 1.2 },
                { x: "25%", y: "70%", delay: 1.5 },
                { x: "75%", y: "70%", delay: 1.8 },
              ].map((pin, index) => (
                <motion.div
                  key={index}
                  className="absolute"
                  style={{ left: pin.x, top: pin.y }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay: pin.delay, duration: 0.5 }}
                >
                  {/* Ripple effect */}
                  <motion.div
                    className="absolute -translate-x-1/2 -translate-y-1/2 w-12 h-12 border-2 rounded-full"
                    style={{ borderColor: '#FFD100' }}
                    animate={{
                      scale: [1, 2.5, 2.5],
                      opacity: [1, 0.5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: pin.delay,
                    }}
                  />
                  
                  {/* Pin marker */}
                  <motion.div
                    className="relative w-4 h-4 rounded-full shadow-lg -translate-x-1/2 -translate-y-1/2"
                    style={{ backgroundColor: '#FFD100' }}
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: pin.delay,
                    }}
                  />
                </motion.div>
              ))}

              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <motion.path
                  d="M 20% 30% Q 32.5% 42.5% 35% 55%"
                  stroke="#0066B3"
                  strokeWidth="2"
                  strokeOpacity="0.5"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1.5, delay: 1 }}
                />
                <motion.path
                  d="M 45% 25% Q 52.5% 42.5% 60% 60%"
                  stroke="#0066B3"
                  strokeWidth="2"
                  strokeOpacity="0.5"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1.5, delay: 1.3 }}
                />
                <motion.path
                  d="M 70% 35% Q 72.5% 52.5% 75% 70%"
                  stroke="#0066B3"
                  strokeWidth="2"
                  strokeOpacity="0.5"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1.5, delay: 1.6 }}
                />
              </svg>
            </div>

            <div className="mt-6 flex items-center justify-center gap-6 text-sm relative z-10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FFD100' }} />
                <span className="text-white/80">Active Business</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 border-2 rounded-full" style={{ borderColor: '#FFD100' }} />
                <span className="text-white/80">Impact Radius</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}