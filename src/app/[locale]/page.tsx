import BackgroundParticles from '@/components/BackgroundParticles';
import Hero from '@/components/Hero';
import ROI from '@/components/sections/ROI';
import Solutions from '@/components/sections/Solutions';

export default function Page() {
  return (
    <main>
      <BackgroundParticles />
      <Hero />

      <ROI />
      <Solutions />

      <section id="contact" className="mx-auto max-w-6xl px-5 pb-28">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <h3 className="text-xl font-semibold text-white">Contact</h3>
          <p className="mt-2 text-white/70">We’ll add the form next.</p>
        </div>
      </section>
    </main>
  );
}
