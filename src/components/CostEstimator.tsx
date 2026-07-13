import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calculator, TrendingUp, Clock, MapPin, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CostEstimator() {
  const [formData, setFormData] = useState({
    type: 'apartment',
    size: 100,
    location: 'urban',
    quality: 'medium'
  });

  const [estimate, setEstimate] = useState({
    min: 0,
    max: 0,
    duration: 0
  });

  const calculate = () => {
    let basePrice = 450000; // per sqm in RWF
    if (formData.type === 'villa') basePrice = 650000;
    if (formData.type === 'office') basePrice = 550000;
    if (formData.type === 'road') basePrice = 350000;
    if (formData.type === 'court') basePrice = 300000;

    let locationMultiplier = 1;
    if (formData.location === 'premium') locationMultiplier = 1.3;
    if (formData.location === 'rural') locationMultiplier = 0.9;

    let qualityMultiplier = 1;
    if (formData.quality === 'high') qualityMultiplier = 1.4;
    if (formData.quality === 'low') qualityMultiplier = 0.8;

    const totalBase = basePrice * formData.size * locationMultiplier * qualityMultiplier;
    
    setEstimate({
      min: Math.round(totalBase * 0.95),
      max: Math.round(totalBase * 1.05),
      duration: Math.ceil((formData.size / 100) + (formData.quality === 'high' ? 6 : 4))
    });
  };

  useEffect(() => {
    calculate();
  }, [formData]);

  return (
    <section id="estimator" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-16">
          <div className="md:w-1/2">
            <h2 className="text-primary font-bold uppercase tracking-[0.4em] text-xs mb-6">Smart Tools</h2>
            <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-slate-900 mb-10 leading-[0.95] md:leading-[0.9] uppercase">
              Project <br />
              <span className="text-primary">Estimator</span>
            </h3>
            <p className="text-slate-500 mb-12 leading-relaxed font-normal text-lg border-l-2 border-primary/30 pl-6">
              Get an instant estimation for your construction project in Rwanda. Our tools analyze regional material costs and engineering complexity.
            </p>

            <div className="space-y-8 bg-slate-50 p-10 border border-slate-100">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Project Type</label>
                  <select 
                    value={formData.type}
                    onChange={(e) => setFormData({...formData, type: e.target.value})}
                    className="w-full bg-white border border-slate-200 px-6 py-4 outline-none focus:border-primary transition-colors appearance-none font-bold text-xs uppercase tracking-widest"
                  >
                    <option value="apartment">Standard Housing</option>
                    <option value="villa">Luxury Residential</option>
                    <option value="office">Commercial Building</option>
                    <option value="road">Road Construction</option>
                    <option value="court">Sports Court</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Area (sqm / m)</label>
                  <input 
                    type="number" 
                    value={formData.size}
                    onChange={(e) => setFormData({...formData, size: Number(e.target.value)})}
                    className="w-full bg-white border border-slate-200 px-6 py-4 outline-none focus:border-primary transition-colors font-bold text-xs uppercase tracking-widest"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Location</label>
                  <select 
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    className="w-full bg-white border border-slate-200 px-6 py-4 outline-none focus:border-primary transition-colors appearance-none font-bold text-xs uppercase tracking-widest"
                  >
                    <option value="urban">Kigali Urban</option>
                    <option value="premium">Prime Location</option>
                    <option value="rural">Rural Provinces</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Finish Level</label>
                  <select 
                    value={formData.quality}
                    onChange={(e) => setFormData({...formData, quality: e.target.value})}
                    className="w-full bg-white border border-slate-200 px-6 py-4 outline-none focus:border-primary transition-colors appearance-none font-bold text-xs uppercase tracking-widest"
                  >
                    <option value="low">Standard</option>
                    <option value="medium">Premium</option>
                    <option value="high">High-End Engineering</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 flex flex-col justify-center">
            <div className="grid grid-cols-1 gap-8">
              <motion.div 
                key={estimate.min}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-slate-900 p-8 md:p-12 text-white relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <TrendingUp className="w-32 h-32" />
                </div>
                <h4 className="text-[11px] uppercase tracking-[0.5em] font-black text-primary mb-10 border-b border-white/10 pb-4">Estimated Cost Range (FRW)</h4>
                <div className="flex flex-col gap-6 lg:gap-8">
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-widest text-slate-500 mb-2">Minimum Projection</span>
                    <span className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter font-heading text-white">
                      {estimate.min.toLocaleString()} <span className="text-sm font-black font-heading text-primary ml-2 tracking-widest italic">FRW</span>
                    </span>
                  </div>
                  
                  <div className="w-12 h-1 bg-primary/20" />

                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-widest text-slate-500 mb-2">Maximum Projection</span>
                    <span className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter font-heading text-primary">
                      {estimate.max.toLocaleString()} <span className="text-sm font-black font-heading text-slate-400 ml-2 tracking-widest italic">FRW</span>
                    </span>
                  </div>
                </div>
                <p className="mt-8 text-slate-400 text-xs md:text-sm uppercase tracking-widest font-medium">
                  *Preliminary estimate based on standard regional rates.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <motion.div 
                  key={estimate.duration}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-primary p-10 text-primary-foreground"
                >
                  <Clock className="w-8 h-8 mb-6" />
                  <h4 className="text-[10px] uppercase tracking-widest font-bold mb-2">Est. Duration</h4>
                  <p className="text-4xl font-black tracking-tighter uppercase">{estimate.duration} Months</p>
                </motion.div>

                <div className="bg-slate-50 p-10 border border-slate-100 flex flex-col justify-center">
                  <Calculator className="w-8 h-8 text-primary mb-6" />
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-2">Calculation Status</h4>
                  <p className="text-xl font-bold text-slate-900 uppercase tracking-tighter">Verified by AI Engine</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
