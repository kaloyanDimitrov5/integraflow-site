'use client';

import {useCallback} from 'react';
import Particles from '@tsparticles/react';
import type {Engine} from '@tsparticles/engine';
import {loadSlim} from '@tsparticles/slim';

export default function BackgroundParticles() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      {/* soft aurora gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(99,102,241,.28),transparent_55%),radial-gradient(900px_circle_at_85%_35%,rgba(34,211,238,.20),transparent_50%),radial-gradient(1000px_circle_at_40%_90%,rgba(168,85,247,.16),transparent_55%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/80" />

      <Particles
        id="tsparticles"
        // particlesInit={particlesInit}
        options={{
          fullScreen: {enable: false},
          background: {color: {value: 'transparent'}},
          fpsLimit: 45, // lower for perf
          detectRetina: false, // huge perf win on mac/retina
          particles: {
            number: {value: 45, density: {enable: true}},
            color: {value: ['#7c3aed', '#22d3ee', '#6366f1']},
            links: {
              enable: true,
              distance: 140,
              opacity: 0.14,
              width: 1
            },
            move: {
              enable: true,
              speed: 0.45,
              direction: 'none',
              outModes: {default: 'out'}
            },
            opacity: {value: 0.28},
            size: {value: {min: 1, max: 2.2}}
          },
          interactivity: {
            events: {
              onHover: {enable: true, mode: 'grab'}
            },
            modes: {
              grab: {distance: 160, links: {opacity: 0.22}}
            }
          }
        }}
      />
    </div>
  );
}
