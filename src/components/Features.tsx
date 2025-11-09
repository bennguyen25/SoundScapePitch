import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Map, Brain, Award } from "lucide-react";

const features = [
  {
    icon: Map,
    title: "SoundMap",
    description: "Interactive map of nearby partners, live offers, and community impact.",
    color: '#0066B3',
    details: [
      "Real-time location-based discovery",
      "Live offers and promotions",
      "Community impact visualization",
      "Personalized recommendations",
    ],
  },
  {
    icon: Brain,
    title: "Smart Business Assistant",
    description: "AI dashboard that helps merchants generate offers and understand trends.",
    color: '#FFD100',
    details: [
      "AI-powered offer generation",
      "Customer behavior analytics",
      "Trend forecasting",
      "Performance insights",
    ],
  },
  {
    icon: Award,
    title: "Personalized Reward Engine",
    description: "Tailored offers and a Community Impact Score for members.",
    color: '#004B87',
    details: [
      "Custom reward recommendations",
      "Community Impact Score tracking",
      "Gamified engagement",
      "Exclusive member benefits",
    ],
  },
];

export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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
            Core Features
          </h2>
          <p className="max-w-2xl mx-auto" style={{ color: '#444444', fontSize: '1.125rem' }}>
            Three powerful tools working together to create a seamless local commerce ecosystem.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <motion.div
                className="rounded-xl p-8 h-full shadow-md transition-all duration-300"
                style={{ 
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E5E7EB'
                }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 10px 25px -5px rgba(0, 48, 87, 0.15), 0 8px 10px -6px rgba(0, 48, 87, 0.1)'
                }}
              >
                {/* Icon */}
                <motion.div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-md"
                  style={{ backgroundColor: feature.color }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <feature.icon className="w-8 h-8" style={{ color: feature.title === "Smart Business Assistant" ? '#003057' : 'white' }} />
                </motion.div>

                {/* Title and description */}
                <h3 className="mb-3" style={{ color: '#003057', fontWeight: 700 }}>{feature.title}</h3>
                <p className="mb-6" style={{ color: '#444444' }}>{feature.description}</p>

                {/* Details list */}
                <div className="space-y-3">
                  {feature.details.map((detail, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.2 + idx * 0.1 }}
                      className="flex items-start gap-2"
                    >
                      <div 
                        className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" 
                        style={{ backgroundColor: feature.color }}
                      />
                      <p className="text-sm" style={{ color: '#444444' }}>{detail}</p>
                    </motion.div>
                  ))}
                </div>

                {/* App-style visual preview */}
                <motion.div
                  className="mt-6 rounded-xl p-4"
                  style={{ backgroundColor: '#F7F8FA' }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.2 }}
                >
                  <div className="space-y-2">
                    <div 
                      className="h-2 rounded-full w-3/4" 
                      style={{ backgroundColor: feature.color }}
                    />
                    <div className="h-2 bg-[#E5E7EB] rounded-full w-1/2" />
                    <div className="h-2 bg-[#E5E7EB] rounded-full w-2/3" />
                  </div>
                  
                  {/* Animated pulse indicator */}
                  <motion.div
                    className="mt-3 flex items-center gap-2"
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div 
                      className="w-2 h-2 rounded-full" 
                      style={{ backgroundColor: feature.color }}
                    />
                    <span className="text-xs" style={{ color: '#6B7280' }}>Active</span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
