import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import CostEstimator from '@/components/CostEstimator';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <CostEstimator />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}



