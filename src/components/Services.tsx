import { motion } from 'motion/react';
import { Building2, Route, Gavel, HardHat, Drill, Truck, Settings } from 'lucide-react';

const services = [
  {
    title: 'Project Supervision & Consultancy',
    description: 'Professional site inspection and construction management ensuring every project meets approved designs and standards.',
    icon: HardHat,
  },
  {
    title: 'Building Construction',
    description: 'Design and construction of residential, commercial, and institutional buildings like offices, schools, and hospitals.',
    icon: Building2,
  },
  {
    title: 'Road Construction & Maintenance',
    description: 'Comprehensive road works from feasibility studies and site preparation to drainage and paving.',
    icon: Route,
  },
  {
    title: 'Court Construction',
    description: 'Specialized building of judicial and sports courts (basketball, tennis, volleyball) tailored to specific safety requirements.',
    icon: Gavel,
  },
  {
    title: 'Civil & Structural Engineering',
    description: 'Earthworks, drainage systems, water supply networks, and concrete structures using advanced engineering techniques.',
    icon: Settings,
  },
  {
    title: 'Renovation & Rehabilitation',
    description: 'Handing expansion and remodeling of existing buildings to meet modern standards while preserving functionality.',
    icon: Drill,
  },
  {
    title: 'Equipment Hire & Logistics',
    description: 'Rental of heavy machinery, trucks, and specialized tools required for large-scale civil engineering works.',
    icon: Truck,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-white section-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-primary font-bold uppercase tracking-[0.4em] text-xs mb-6 ml-[50px]">Expertise</h2>
            <h3 className="text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter text-slate-900 leading-[0.85] uppercase ml-[40px]">
              Core <br />
              <span className="text-primary">Capabilities</span>
            </h3>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-slate-500 max-w-sm text-lg font-normal border-l-2 border-primary/30 pl-6 leading-relaxed mb-2"
          >
            We leverage cutting-edge technology to redefine the construction lifecycle, from initial concept modeling to smart site management.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-slate-100 overflow-hidden rounded-3xl">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`bg-white p-12 hover:bg-slate-50 transition-colors duration-500 group relative border border-slate-100 ${
                index === services.length - 1 && index % 3 === 0 ? 'lg:col-span-3' : 
                index === services.length - 1 && index % 3 === 1 ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="relative z-10">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:rotate-6 transition-all duration-500 shadow-sm">
                  <service.icon className="w-8 h-8 text-slate-400 group-hover:text-primary-foreground transition-colors duration-500" />
                </div>
                <h4 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors">
                  {service.title}
                </h4>
                <p className="text-slate-500 leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
              {/* Subtle hover indicator */}
              <div className="absolute top-0 left-0 w-1 h-0 bg-primary transition-all duration-500 group-hover:h-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
