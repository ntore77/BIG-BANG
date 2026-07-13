import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Facebook, MessageCircle, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h2 className="text-primary font-bold uppercase tracking-[0.4em] text-xs mb-6">Connect</h2>
            <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-slate-900 mb-10 leading-[0.9] uppercase">
              Start <br />
              <span className="text-primary">Project</span>
            </h3>
            <p className="text-slate-500 mb-12 leading-relaxed font-normal text-lg border-l-2 border-primary/30 pl-6">
              Ready to discuss your next structural challenge? Our team is standing by to assist you through our social channels and direct contact.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 bg-white shadow-lg rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-500 relative overflow-hidden">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute inset-0 bg-primary/10"
                  />
                  <Phone className="w-6 h-6 text-primary group-hover:text-primary-foreground relative z-10" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-1">Call Us</h4>
                  <p className="text-lg font-bold text-slate-900">+250 782 666 574</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 bg-white shadow-lg rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-500">
                  <Mail className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-1">Email Us</h4>
                  <p className="text-sm font-bold text-slate-900">bibaco.rw@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group cursor-pointer sm:col-span-2">
                <div className="w-14 h-14 bg-white shadow-lg rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-500">
                  <MapPin className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-1">Our Location</h4>
                  <p className="text-lg font-bold text-slate-900">Gasabo District, Kimironko Sector, Kigali - Rwanda</p>
                  
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:w-1/2 bg-slate-900 p-12 md:p-16 rounded-[2rem] text-white flex flex-col justify-center"
          >
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-10">Direct Contact</h4>
            <div className="space-y-6">
              <a href="https://wa.me/250782666574" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-8 rounded-3xl border-2 border-[#25D366]/20 bg-[#25D366]/5 hover:bg-[#25D366]/10 transition-all group scale-100 hover:scale-[1.02]">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-10 bg-[#25D366] rounded-2xl flex items-center justify-center shadow-xl shadow-green-500/20">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-lg font-black uppercase tracking-widest text-[#25D366]">WhatsApp Us</p>
                    <p className="text-slate-400 font-bold">+250 782 666 574</p>
                  </div>
                </div>
                <ExternalLink className="w-6 h-6 text-[#25D366]" />
              </a>
              
              <div className="p-8 rounded-3xl border border-white/5 bg-white/5">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-4">Availability</p>
                <p className="text-sm font-medium text-slate-300">Our team is available 24/7 via WhatsApp for emergency inquiries and project consultations.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
