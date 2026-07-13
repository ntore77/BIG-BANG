import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Menu,
  HardHat,
  MessageCircle,
  ArrowRight,
} from 'lucide-react';

import { Button } from '@/components/ui/button';

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Estimator', href: '#estimator' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  /* NAVBAR BACKGROUND CHANGED ON SCROLL */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* 🔥 CLEAN & STABLE SMOOTH SCROLL */
  const handleNavigation = (e, href) => {
    e.preventDefault();

    // If it's the home link, scroll straight to top smoothly
    if (href === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      return;
    }

    const section = document.querySelector(href);
    if (!section) return;

    // Use standard, predictable page offsets instead of dynamic boundingClientRect bounding math
    const navbarOffset = 90; 
    const elementPosition = section.offsetTop;
    const offsetPosition = elementPosition - navbarOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`
        fixed
        top-0
        left-0
        right-0
        z-50
        transition-all
        duration-500
        ${isScrolled ? 'py-4' : 'py-8'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* NAVBAR INNER CONTAINER */}
        <div
          className={`
            flex
            justify-between
            items-center
            px-6
            py-3
            rounded-full
            transition-all
            duration-500
            ${
              isScrolled
                ? 'bg-white/80 backdrop-blur-xl shadow-2xl border border-white/20'
                : 'bg-transparent'
            }
          `}
        >

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <img
              src="/icon.png"
              alt="Logo"
              className="h-[80px] w-[120px] object-contain"
            />
            <span
              className={`
                text-xl
                font-black
                tracking-tighter
                uppercase
                transition-colors
                duration-300
                ${isScrolled ? 'text-slate-900' : 'text-white'}
              `}
            >
              BIBACO<span className="text-primary">.LTD</span>
            </span>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-5 lg:gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavigation(e, link.href)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className={`
                  relative
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  font-bold
                  cursor-pointer
                  transition-all
                  duration-300
                  hover:text-primary
                  group
                  ${isScrolled ? 'text-slate-700' : 'text-white/90'}
                `}
              >
                {link.name}

                {/* UNDERLINE */}
                <span
                  className="
                    absolute
                    -bottom-1
                    left-0
                    h-[2px]
                    w-0
                    bg-primary
                    transition-all
                    duration-500
                    ease-out
                    group-hover:w-full
                  "
                />
              </motion.a>
            ))}
          </div>

          {/* MOBILE MENU */}
          <div className="md:hidden">
            <Sheet>
              {/* MENU BUTTON */}
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`
                    rounded-full
                    ${isScrolled ? 'text-slate-900' : 'text-white'}
                  `}
                >
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>

              {/* MOBILE SIDEBAR */}
              <SheetContent
                side="right"
                className="
                  w-full
                  sm:w-[320px]
                  bg-slate-950/95
                  backdrop-blur-2xl
                  border-white/10
                  text-white
                  p-0
                "
              >
                <div className="flex flex-col h-full p-8">
                  {/* MOBILE HEADER */}
                  <div className="flex items-center gap-3 mb-12">
                    <div className="bg-primary p-2 rounded-full">
                      <HardHat className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-lg font-black tracking-tighter uppercase">
                      BIBACO<span className="text-primary">.LTD</span>
                    </span>
                  </div>

                  {/* MOBILE LINKS */}
                  <div className="flex flex-col gap-1">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 mb-6 px-4">
                      Navigation
                    </p>

                    {navLinks.map((link, i) => (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: i * 0.07,
                          duration: 0.4,
                        }}
                      >
                        <SheetClose asChild>
                          <a
                            href={link.href}
                            onClick={(e) => handleNavigation(e, link.href)}
                            className="
                              text-[11px]
                              font-bold
                              tracking-[0.2em]
                              uppercase
                              py-5
                              px-4
                              rounded-xl
                              hover:bg-white/5
                              hover:text-primary
                              transition-all
                              duration-300
                              flex
                              justify-between
                              items-center
                              group
                            "
                          >
                            {link.name}
                            <ArrowRight
                              className="
                                w-3
                                h-3
                                opacity-0
                                -translate-x-2
                                group-hover:opacity-100
                                group-hover:translate-x-0
                                transition-all
                                duration-300
                              "
                            />
                          </a>
                        </SheetClose>
                      </motion.div>
                    ))}
                  </div>

                  {/* WHATSAPP */}
                  <div className="mt-auto pt-8 border-t border-white/10">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 mb-6">
                      Connect via WhatsApp
                    </p>
                    <div className="flex gap-4">
                      <a
                        href="https://wa.me/250782666574"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          w-12
                          h-12
                          rounded-full
                          bg-[#25D366]
                          flex
                          items-center
                          justify-center
                          hover:bg-[#20ba5a]
                          hover:scale-110
                          transition-all
                          duration-300
                          shadow-lg
                          shadow-green-500/20
                        "
                      >
                        <MessageCircle className="w-6 h-6 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </motion.nav>
  );
}