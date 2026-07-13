import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, X, ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';

// Restructured projects data so every project has an array of images
const projects = [
  {
    title: 'Pili Pili Road Project',
    category: 'Civil Works',
    images: ['/load.png', '/apart13.jpg'],
    location: 'Kibagabaga',
  },
   {
    title: 'Hashi Station',
    category: 'Industrial',
    images: ['/station.jpg', '/apart11.jpg'],
    location: 'Rusororo',
  },
    {
    title: 'Tennis Court',
    category: 'Sports',
    images: ['/tenis.jpg', '/apart12.jpg'],
    location: 'Morriah Resort Karongi',
  },
  {
    title: 'House Construction',
    category: 'Project Owner',
    images: ['/apart9.jpg', '/apart10.jpg', '/apart8.jpg'],
    location: 'Rusororo / Remera / Nyabisindu',
  },
  {
    title: 'Pioneer Primary School',
    category: 'Institutional',
    images: ['/school.jpg'],
    location: 'Bugesera Gashora',
  },
  {
    title: 'Modern Apartments',
    category: 'Residential',
    images: ['/apartment.jpg'],
    location: 'Kibagabaga',
  },
  {
    title: 'Vision City Housing',
    category: 'Residential',
    images: ['/city.jpg'],
    location: 'Kigali',
  },
 

  {
    title: 'Construction Apartment',
    category: 'Project Owner',
    images: ['/apart.jpg', '/apart2.jpg'],
    location: 'Rebero',
  },
  {
    title: 'Recreation Center',
    category: 'Infrastructure',
    images: ['/apart3.jpg', '/apart5.jpg'],
    location: 'Rusororo',
  },
  {
    title: 'Construction of apartment',
    category: 'Project Owner',
    images: ['/apart6.jpg'],
    location: 'Kamagarama',
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4); // Displays exactly 4 projects initially

  const toggleShowMore = () => {
    if (visibleCount >= projects.length) {
      setVisibleCount(4); // Collapse back to 4 projects
    } else {
      setVisibleCount(projects.length); // Display all projects
    }
  };

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0); // Reset gallery slider to the first image
  };

  const nextImage = (e) => {
    e.stopPropagation();
    if (!selectedProject) return;
    setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (!selectedProject) return;
    setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
  };

  // Slice the projects array to display only the current visible count
  const visibleProjects = projects.slice(0, visibleCount);

  return (
    <section
      id="projects"
      className="py-24 bg-slate-900 text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl mr-[110px]">
            <h2 className="text-primary font-bold uppercase tracking-[0.4em] text-xs mb-6">
              Portfolio
            </h2>
            <h3 className="text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[0.85] uppercase">
              Selected <br />
              <span className="text-primary">Works</span>
            </h3>
          </div>

          <div className="flex flex-col items-start md:items-end gap-6">
            <p className="text-slate-400 max-w-xs md:text-right text-sm border-l-2 md:border-l-0 md:border-r-2 border-primary/30 pl-4 md:pl-0 md:pr-6 leading-relaxed">
              A showcase of our most challenging and successful structural achievements.
            </p>
          </div>
        </div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                onClick={() => openProjectModal(project)}
                className="group cursor-pointer"
              >
                {/* IMAGE CARD - Displays the first image of the array as cover */}
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-4 shadow-xl border border-white/5">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-all
                      duration-700
                      md:grayscale
                      md:group-hover:grayscale-0
                      md:group-hover:scale-105
                    "
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-black/20 md:group-hover:bg-transparent transition-all duration-500" />

                  {/* IMAGE COUNT BADGE */}
                  {project.images.length > 1 && (
                    <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] tracking-wider uppercase font-bold text-slate-300 border border-white/10">
                      {project.images.length} Photos
                    </div>
                  )}

                  {/* ICON */}
                  <div
                    className="
                      absolute
                      top-3
                      right-3
                      w-9
                      h-9
                      rounded-full
                      bg-black/50
                      backdrop-blur-md
                      flex
                      items-center
                      justify-center
                      text-white
                      opacity-100
                      md:opacity-0
                      md:group-hover:opacity-100
                      transition-all
                      duration-300
                    "
                  >
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>

                {/* TEXT */}
                <div className="space-y-1 px-1">
                  <span className="text-primary font-bold text-[10px] uppercase tracking-[0.2em]">
                    {project.category}
                  </span>
                  <h4 className="text-xl font-bold transition-colors group-hover:text-primary line-clamp-1">
                    {project.title}
                  </h4>
                  <p className="text-slate-400 text-xs">
                    {project.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* SEE MORE / SHOW LESS BUTTON */}
        {projects.length > 4 && (
          <div className="flex justify-center mt-16">
            <button
              onClick={toggleShowMore}
              className="
                flex 
                items-center 
                gap-3 
                px-8 
                py-4 
                bg-slate-800 
                hover:bg-primary 
                hover:text-black 
                text-white 
                text-xs 
                font-bold 
                uppercase 
                tracking-widest 
                rounded-full 
                transition-all 
                duration-300 
                border 
                border-white/10
                shadow-2xl
              "
            >
              {visibleCount >= projects.length ? (
                <>
                  Show Less <ChevronUp size={16} />
                </>
              ) : (
                <>
                  See More Projects ({projects.length - 4} More) <ChevronDown size={16} />
                </>
              )}
            </button>
          </div>
        )}

      </div>

      {/* FULL SCREEN MODAL WITH GALLERY FUNCTIONALITY */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/95
            backdrop-blur-md
            p-4
          "
        >
          {/* BACKDROP */}
          <div
            className="absolute inset-0"
            onClick={() => setSelectedProject(null)}
          />

          {/* MODAL CONTENT CONTAINER */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-2xl flex flex-col justify-center mx-auto z-10"
          >
            {/* BIG IMAGE CONTAINER */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl w-full aspect-[3/4] max-h-[70vh] bg-slate-950">
              
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setSelectedProject(null)}
                className="
                  absolute
                  top-4
                  right-4
                  z-50
                  w-11
                  h-11
                  rounded-full
                  bg-black/60
                  backdrop-blur-md
                  text-white
                  flex
                  items-center
                  justify-center
                  shadow-xl
                  hover:bg-red-500
                  hover:scale-110
                  transition-all
                  border
                  border-white/20
                "
              >
                <X size={22} />
              </button>

              {/* IMAGE CAROUSEL CONTROLS (Only visible if project has multiple images) */}
              {selectedProject.images.length > 1 && (
                <>
                  {/* Left Arrow */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center hover:bg-primary hover:text-black transition-all"
                  >
                    <ChevronLeft size={24} />
                  </button>

                  {/* Right Arrow */}
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center hover:bg-primary hover:text-black transition-all"
                  >
                    <ChevronRight size={24} />
                  </button>

                  {/* Image Counter Indicator */}
                  <div className="absolute bottom-4 right-4 z-40 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold">
                    {currentImageIndex + 1} / {selectedProject.images.length}
                  </div>
                </>
              )}

              {/* MAIN DISPLAY IMAGE */}
              <motion.img
                key={currentImageIndex} // Key ensures Framer motion triggers re-render animation smoothly
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                src={selectedProject.images[currentImageIndex]}
                alt={`${selectedProject.title} view ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* INFO PANEL */}
            <div className="text-center mt-6">
              <span className="text-primary text-xs font-bold uppercase tracking-[0.3em]">
                {selectedProject.category}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 tracking-tight uppercase">
                {selectedProject.title}
              </h2>
              <p className="text-slate-400 text-sm md:text-base mt-2">
                {selectedProject.location}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}