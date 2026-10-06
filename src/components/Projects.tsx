const projects = [
  {
    name: 'SURGE: Real-Time Flood Response Platform',
    description: 'Built a two-way real-time emergency communication platform that synchronizes government directives, evacuation routes, SOS reports, and resident updates across separate interfaces. Integrated Gemini and ElevenLabs into a contextual voice agent for speech-to-text, text-to-speech, live emergency queries, and location-based incident reporting.',
    tech: 'Next.js · React · TypeScript · Snowflake · Gemini · ElevenLabs',
    link: 'https://github.com/dnlmorgan/SURGE',
  },
  {
    name: 'UBC Pair: AI-Powered Campus Matchmaking Platform',
    description: 'Built a full-stack campus matchmaking platform using Next.js, TypeScript, and Firebase, implementing a compatibility algorithm across interests, personality traits, and availability. Integrated LLM APIs to generate personalized match recommendations from user profiles and compatibility data.',
    tech: 'Next.js · TypeScript · Firebase · LLM APIs',
    link: 'https://github.com/dnlmorgan/UBC-Pair',
  },
  {
    name: 'Mockr: AI Interview Simulation Platform',
    description: 'Built an AI-powered mock interview platform during a 24-hour hackathon using TypeScript, Python, OpenCV, and LLM APIs. Integrated speech, computer vision, and AI components into an end-to-end interview simulation workflow.',
    tech: 'TypeScript · Python · OpenCV · LLM APIs',
    link: 'https://github.com/dnlmorgan/Mockr',
  },
  {
    name: 'Pawmora: Social Pet Matching Platform',
    description: 'Translated user research and competitive analysis into product requirements for a social pet adoption platform. Built a React, TypeScript, and Supabase MVP with core user and pet-matching functionality.',
    tech: 'React · TypeScript · Supabase',
    link: 'https://github.com/dnlmorgan/Pawmora',
  },
  {
    name: 'Anchor: Peer Accountability Productivity App',
    description: 'Led primary user research and designed a peer-based productivity platform in Figma, using survey insights to inform product decisions. Developed social accountability and incentive-based features to improve user engagement and productivity.',
    tech: 'Figma · UX Research · Product Design',
    link: 'https://pin-child-74912954.figma.site',
  },
]

export default function Projects() {
  return (
    <section>
      <div className="flex flex-col gap-3">
        <p className="section-title">Projects</p>
        <h2 className="section-heading">Selected work</h2>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        {projects.map((project) => {
          const isLink = !!project.link;

          if (isLink) {
            return (
              <a
                key={project.name}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="group relative flex flex-col items-start justify-between rounded-3xl bg-white/[0.02] border border-white/[0.05] p-6 overflow-hidden transition-all duration-500 hover:bg-white/[0.04] hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-[0_0_32px_-10px_rgba(6,182,212,0.15)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative z-10 flex w-full items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold text-white tracking-tight">{project.name}</h3>
                  </div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.05] text-white transition-all group-hover:bg-cyan-500 group-hover:text-slate-950">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  </span>
                </div>
                <p className="relative z-10 mt-5 text-slate-300 leading-7 font-light">{project.description}</p>
                <div className="relative z-10 mt-6 flex flex-wrap gap-2">
                  {project.tech.split('·').map(t => (
                    <span key={t.trim()} className="rounded-full bg-white/[0.05] border border-white/10 px-3 py-1 text-xs font-medium text-slate-300 backdrop-blur-sm">{t.trim()}</span>
                  ))}
                </div>
              </a>
            );
          } else {
            return (
              <article
                key={project.name}
                className="group relative flex flex-col items-start justify-between rounded-3xl bg-white/[0.02] border border-white/[0.05] p-5 sm:p-6 overflow-hidden transition-all duration-500 hover:bg-white/[0.04] hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-[0_0_32px_-10px_rgba(6,182,212,0.15)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative z-10 flex w-full items-center justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold text-white tracking-tight">{project.name}</h3>
                  </div>
                </div>
                <p className="relative z-10 mt-5 text-slate-300 leading-7 font-light">{project.description}</p>
                <div className="relative z-10 mt-6 flex flex-wrap gap-2">
                  {project.tech.split('·').map(t => (
                    <span key={t.trim()} className="rounded-full bg-white/[0.05] border border-white/10 px-3 py-1 text-xs font-medium text-slate-300 backdrop-blur-sm">{t.trim()}</span>
                  ))}
                </div>
              </article>
            );
          }
        })}
      </div>
    </section>
  )
}
