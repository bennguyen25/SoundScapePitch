import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { TrendingDown, Building2, Store, TrendingUp } from "lucide-react";

export function Problem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #003057 0%, #004B87 50%, #0066B3 100%)' }}>
      {/* Yellow glow orbs */}
      <div 
        className="absolute w-40 h-40 rounded-full blur-3xl"
        style={{
          backgroundColor: '#FFD100',
          opacity: 0.1,
          left: '10%',
          top: '30%'
        }}
      />
      <div 
        className="absolute w-48 h-48 rounded-full blur-3xl"
        style={{
          backgroundColor: '#FFD100',
          opacity: 0.12,
          right: '10%',
          bottom: '30%'
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
            Local Businesses Are Falling Behind.
          </h2>
          <p className="max-w-2xl mx-auto text-white/90" style={{ fontSize: '1.125rem' }}>
            Small businesses struggle to compete with large platforms that have sophisticated data analytics, 
            targeted marketing, and customer loyalty programs. Meanwhile, credit union members want to support 
            local commerce but lack the tools and incentives to make it convenient.
          </p>
        </motion.div>

        {/* Comparison visual */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Big Tech side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div 
              className="rounded-xl p-8 shadow-xl h-full flex flex-col"
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid rgba(255, 255, 255, 0.3)'
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#DC2626' }}>
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h3 style={{ color: '#003057', fontWeight: 700 }}>Big Tech Platforms</h3>
              </div>

              <div className="space-y-4 flex-1">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#DC2626' }} />
                  <p className="text-sm flex-1" style={{ color: '#444444' }}>Advanced AI and data analytics</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#DC2626' }} />
                  <p className="text-sm flex-1" style={{ color: '#444444' }}>Massive marketing budgets</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#DC2626' }} />
                  <p className="text-sm flex-1" style={{ color: '#444444' }}>Sophisticated loyalty programs</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#DC2626' }} />
                  <p className="text-sm flex-1" style={{ color: '#444444' }}>Seamless digital experiences</p>
                </div>
              </div>

              <motion.div
                className="mt-6 flex items-center gap-2 p-3 rounded-lg"
                style={{ backgroundColor: 'rgba(22, 163, 74, 0.1)' }}
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <TrendingUp className="w-5 h-5" style={{ color: '#16A34A' }} />
                <span className="text-sm" style={{ fontWeight: 600, color: '#16A34A' }}>Growing market share</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Local Business side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div 
              className="rounded-xl p-8 shadow-xl h-full flex flex-col"
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid rgba(255, 255, 255, 0.3)'
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#0066B3' }}>
                  <Store className="w-6 h-6 text-white" />
                </div>
                <h3 style={{ color: '#003057', fontWeight: 700 }}>Local Businesses</h3>
              </div>

              <div className="space-y-4 flex-1">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#6B7280' }} />
                  <p className="text-sm flex-1" style={{ color: '#444444' }}>Limited tech resources</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#6B7280' }} />
                  <p className="text-sm flex-1" style={{ color: '#444444' }}>Small marketing budgets</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#6B7280' }} />
                  <p className="text-sm flex-1" style={{ color: '#444444' }}>No unified loyalty system</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#6B7280' }} />
                  <p className="text-sm flex-1" style={{ color: '#444444' }}>Struggling to compete</p>
                </div>
              </div>

              <motion.div
                className="mt-6 flex items-center gap-2 p-3 rounded-lg"
                style={{ backgroundColor: 'rgba(220, 38, 38, 0.1)' }}
                animate={{ x: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <TrendingDown className="w-5 h-5" style={{ color: '#DC2626' }} />
                <span className="text-sm" style={{ fontWeight: 600, color: '#DC2626' }}>Losing ground</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
