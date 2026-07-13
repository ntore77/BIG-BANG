import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HardHat, ExternalLink, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

// 👥 Employees Data
const teamMembers = [
  {
    name: 'BANTWANAYO Rodrigue',
    role: 'Managing Director',
    image: '/icon2.jpg',
  },
  {
    name: 'Eng Jacques NTEZIMANA',
    role: 'General Manager',
    image: '/1.png',
  },
  {
    name: 'Eng KIRERE JeanDeDieu',
    role: 'Project manager & Structure Design',
    image: '/1.png',
  },
  {
    name: 'ITUGARURUKIRE Divine Martine',
    role: 'Quantity Surveyor',
    image: '/2.jpg',
  },
  {
    name: 'NIHORIMBERE IGIRANEZA Augisistin',
    role: 'Civil Engineer',
    image: '/5.jpg',
  },
  {
    name: 'MUPENZI Phanuel',
    role: 'Civil Engineer',
    image: '/3.jpg',
  },
  {
    name: 'ANACLET BIRASA',
    role: 'Surveyor',
    image: '/1.png',
  },
  {
    name: 'GAKURU Aimable',
    role: 'Site Technician',
    image: '/1.jpg',
  },
  {
    name: 'IRAKOZE Hope Josiane',
    role: 'Accountant and Finance Manager',
    image: '/4.jpg',
  },
];

export default function About() {
  const [showPhilosophy, setShowPhilosophy] = useState(false);

  // 👇 LIGHTBOX STATE
  const [selectedMember, setSelectedMember] = useState(null);

  // 👇 SHOW MORE STATE
  const [showAllEmployees, setShowAllEmployees] = useState(false);

  // 👇 SHOW ONLY 4 FIRST
  const visibleEmployees = showAllEmployees
    ? teamMembers
    : teamMembers.slice(0, 4);

  return (
    <section id="about" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* COMPANY SECTION */}
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16 mb-24">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/home.png"
                alt="Construction Engineering"
                className="w-full h-auto"
              />
            </div>

            {/* EXPERIENCE BOX */}
            <div className="absolute -bottom-10 -right-4 lg:-right-10 z-20 bg-primary p-6 lg:p-8 rounded-2xl shadow-xl hidden md:block">
              <div className="text-5xl font-black text-primary-foreground mb-1">
                5+
              </div>

              <div className="text-sm font-bold uppercase tracking-widest text-primary-foreground/80">
                Years of Quality Construction
              </div>
            </div>

            {/* BACKGROUND EFFECT */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full -z-0 blur-3xl" />
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h2 className="text-primary font-bold uppercase tracking-[0.4em] text-xs mb-6">
              Established 2020
            </h2>

            <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-slate-900 mb-10 leading-[0.95] md:leading-[0.9] uppercase">
              RELIABLE <br />
              <span className="text-primary">INFRASTRUCTURE</span>
            </h3>

            <p className="text-slate-500 text-lg mb-10 leading-relaxed font-normal border-l-2 border-primary/30 pl-6">
              BIBACO Ltd is a Rwandan construction and civil engineering
              company established in 2020. Since our founding, we have built a
              solid reputation for delivering high-quality and durable
              construction projects that contribute to the country's rapid
              infrastructural growth.
            </p>

            {/* SERVICES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 mb-12">
              {[
                'Project Supervision',
                'Road Maintenance',
                'Structural Engineering',
                'Court Construction',
                'Professional Consultancy',
                'Innovation & Safety',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform" />

                  <span className="font-medium text-slate-700 tracking-tight">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* BUTTON */}
            <div className="space-y-6">
              <Button
                size="lg"
                variant="secondary"
                className="px-12 h-16 font-black uppercase tracking-[0.2em] rounded-none group transition-all border-2 border-primary/20 hover:border-primary"
                onClick={() =>
                  setShowPhilosophy(!showPhilosophy)
                }
              >
                Our Vision & Mission

                <ChevronDown
                  className={`ml-2 w-5 h-5 transition-transform duration-300 ${
                    showPhilosophy ? 'rotate-180' : ''
                  }`}
                />
              </Button>

              <AnimatePresence>
                {showPhilosophy && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="overflow-hidden"
                  >
                    <div className="p-10 bg-slate-900 text-white rounded-none border-l-4 border-primary shadow-2xl relative overflow-hidden">

                      <div className="absolute top-0 right-0 p-4 opacity-10">
                        <HardHat className="w-24 h-24" />
                      </div>

                      <div className="mb-8">
                        <p className="text-xl font-bold tracking-tighter uppercase text-primary mb-2">
                          Vision
                        </p>

                        <p className="text-slate-300 leading-relaxed font-normal">
                          To become one of Rwanda’s leading construction
                          companies, recognized for excellence, integrity,
                          and innovation in delivering sustainable
                          infrastructure.
                        </p>
                      </div>

                      <div>
                        <p className="text-xl font-bold tracking-tighter uppercase text-primary mb-2">
                          Mission
                        </p>

                        <p className="text-slate-300 leading-relaxed font-normal">
                          To provide reliable, high-quality, and affordable
                          construction services through professional expertise,
                          modern techniques, and strong partnerships.
                        </p>
                      </div>

                      <div className="mt-8 pt-8 border-t border-white/10">
                        <p className="text-sm font-bold">
                          Msc BARUTWANAYO Rodrigue
                        </p>

                        <p className="text-xs text-slate-400 uppercase tracking-widest">
                          Managing Director
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        <hr className="border-slate-200 my-16" />

        {/* TEAM SECTION */}
        <div className="mt-20">

          {/* TITLE */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary font-bold uppercase tracking-[0.4em] text-xs mb-3">
              Our Experts
            </h2>

            <h3 className="text-3xl sm:text-4xl font-bold tracking-tighter text-slate-900 uppercase">
              Meet the Professional <span className="text-primary">Team</span>
            </h3>

            <p className="text-slate-500 mt-4 text-sm tracking-wide">
              The driving force behind BIBACO Ltd's commitment to structural
              integrity, safety, and construction excellence.
            </p>
          </div>

          {/* EMPLOYEE GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

            {visibleEmployees.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedMember(member)}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl border border-slate-100 transition-all duration-300 flex flex-col cursor-pointer group"
              >

                {/* IMAGE */}
                <div className="p-5 flex justify-center items-center bg-slate-50/50">
                  <div className="relative w-36 h-36 rounded-full bg-slate-100 overflow-hidden border-2 border-slate-200 group-hover:border-primary transition-colors duration-300 shadow-sm">

                    <div className="absolute inset-0 flex items-center justify-center text-slate-300 bg-slate-100 z-0">
                      <HardHat className="w-10 h-10 stroke-[1.5]" />
                    </div>

                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover relative z-10 transition-all duration-500 md:grayscale md:group-hover:grayscale-0 md:group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />

                    <div className="absolute inset-0 bg-transparent md:bg-black/10 md:group-hover:bg-transparent transition-all duration-500 z-20" />

                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 z-30">
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                {/* TEXT */}
                <div className="p-5 pt-2 flex-grow flex flex-col justify-between text-center">
                  <div>
                    <h4 className="text-sm font-black text-slate-900 tracking-tight leading-snug uppercase mb-1 transition-colors group-hover:text-primary">
                      {member.name}
                    </h4>

                    <p className="text-[11px] font-bold text-primary tracking-wider uppercase min-h-[2rem] flex items-center justify-center">
                      {member.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* SEE MORE BUTTON */}
          {teamMembers.length > 4 && (
            <div className="flex justify-center mt-12">
              <Button
                onClick={() =>
                  setShowAllEmployees(!showAllEmployees)
                }
                className="px-10 py-6 text-sm font-bold uppercase tracking-widest"
              >
                {showAllEmployees
                  ? 'Show Less'
                  : 'See More Employees'}
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4"
          >

            {/* BACKDROP */}
            <div
              className="absolute inset-0"
              onClick={() => setSelectedMember(null)}
            />

            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-lg mx-auto"
            >

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 z-50 w-11 h-11 rounded-full bg-black/80 text-white flex items-center justify-center shadow-lg hover:bg-red-500 hover:scale-110 transition-all"
              >
                <X size={22} />
              </button>

              {/* IMAGE */}
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-slate-900 aspect-[4/5]">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* TEXT */}
              <div className="text-center mt-5 text-white">
                <span className="text-primary text-xs font-bold uppercase tracking-widest">
                  {selectedMember.role}
                </span>

                <h2 className="text-2xl font-black mt-2 uppercase tracking-tight">
                  {selectedMember.name}
                </h2>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}