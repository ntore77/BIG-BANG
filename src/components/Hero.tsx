import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-start pb-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1601181712262-b0e0e41b8e56?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Modern Skyscraper Architecture"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-40 md:pt-56 lg:pt-80">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-primary" />
              <span className="text-primary text-xs font-bold tracking-[0.4em] uppercase">
                Engineering the Future
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.95] md:leading-[0.9] tracking-tighter mb-12 uppercase">
              BIG BANG <br />
              <span className="text-primary">CONSTRUCTION</span> <br /> 
              LTD
            </h1>
            <p className="text-base md:text-xl text-white/70 mb-12 max-w-xl leading-relaxed font-normal border-l-4 border-primary pl-6">
              BIBACO Ltd delivers high-quality infrastructural engineering and precision construction services across Rwanda since 2020.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#estimator"
                className="inline-flex items-center justify-center h-16 px-10 text-sm font-black uppercase rounded tracking-widest bg-primary text-primary-foreground hover:bg-primary/90 shadow-md shadow-primary/20 group transition-all"
              >
                Get Estimation
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 p-8 hidden lg:block">
        <div className="flex gap-8">
          <div className="text-white">
            <div className="text-4xl font-black text-primary">5+</div>
            <div className="text-sm uppercase tracking-widest opacity-60">Years Experience</div>
          </div>
          <div className="text-white">
            <div className="text-4xl font-black text-primary">800M+</div>
            <div className="text-sm uppercase tracking-widest opacity-60">Max Project Value (RWF)</div>
          </div>
        </div>
      </div>
    </section>
  );
}
