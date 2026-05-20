import { motion } from 'framer-motion'

const experienceItems = [
  {
    role: 'Event Manager',
    company: 'Sauder Summit Case Competition',
    period: 'Jan 2026 - Mar 2026',
    location: 'Vancouver, BC',
    details: 'Coordinated execution of an international case competition hosting 16 teams, managing event logistics and operational timelines. Served as primary liaison between competitors, judges, and organizing committee during high-pressure Global Week.',
  },
  {
    role: 'Competitor & Participant',
    company: 'JDC West Junior Case Development Program',
    period: 'Jan 2026 - Mar 2026',
    details: 'Developed structured recommendations under strict time constraints, synthesizing financial and strategic trade-offs.',
  },
  {
    role: 'Club Executive',
    company: 'Citizens of Churchill Club',
    period: 'Sep 2022 - Jun 2025',
    details: 'Led coordination of large-scale events serving 1,500+ attendees, aligning 150+ volunteers around structured timelines.',
  },
  {
    role: 'Builder & Programmer',
    company: 'VEX Robotics',
    period: 'Jun 2023 - May 2024',
    details: 'Optimized robotics systems using C++, applying iterative prototyping and structured performance testing. Competed at the VEX World Championship, diagnosing and resolving real-time system failures during competition, improving mechanical and code reliability.',
  },
]

export default function Experience() {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-3"
      >
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Experience</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Professional highlights</h2>
        <p className="max-w-2xl text-base text-slate-400 leading-relaxed mt-4">
          A few meaningful contributions and roles where I combined strategic product thinking, rigorous quantitative analysis, and scalable software engineering to deliver high-impact results.
        </p>
      </motion.div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {experienceItems.map((item, idx) => (
          <motion.article
            key={item.role}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative overflow-hidden rounded-xl bg-white/[0.03] p-6 border border-white/5 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/[0.04]"
          >
            <div className="relative z-10 h-full flex flex-col">
              <div className="mb-4">
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-slate-400">{item.period}</p>
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">{item.role}</h3>
              <p className="text-sm font-medium text-slate-300 mb-4">{item.company}</p>
              <p className="text-sm text-slate-400 leading-relaxed mt-auto">{item.details}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
