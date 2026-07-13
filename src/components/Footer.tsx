import { HardHat, MessageCircle, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-3">
              <img src="/icon.png" alt="Logo" style={{ height: "80px", width: "120px"}} />
         </div>
              <span className="text-2xl font-black tracking-tighter font-heading uppercase">
                BIBACO<span className="text-primary">.LTD</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Leading Rwandan construction and civil engineering firm. Delivering excellence since 2020.
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/250782666574"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center hover:bg-[#20ba5a] text-white transition-all duration-300 shadow-lg shadow-green-500/10"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary" />
            </h4>
            <ul className="space-y-4 text-slate-400">
              {['Home', 'About Us', 'Our Services', 'Recent Projects', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 relative inline-block">
              Services
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary" />
            </h4>
            <ul className="space-y-4 text-slate-400">
              {['General Contracting', 'Commercial Building', 'Residential Design', 'Architecture', 'Safety Inspection'].map((service) => (
                <li key={service}>
                  <a href="#" className="hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-top border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} BIG BANG CONSTRUCTION LTD (BIBACO Ltd). All rights reserved.
          </p>
          <div className="flex gap-8 text-slate-500 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={scrollToTop}
            className="rounded-full border-white/10 hover:bg-primary hover:text-primary-foreground"
          >
            <ArrowUp className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
