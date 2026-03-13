import BackgroundParticles from '@/components/BackgroundParticles';
import Hero from '@/components/Hero';
import ROI from '@/components/sections/ROI';
import Solutions from '@/components/sections/Solutions';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <main className="relative z-10">
      <BackgroundParticles />
      <Hero />
      <ROI />
      <Solutions />
      <Footer />
    </main>
  );
}
