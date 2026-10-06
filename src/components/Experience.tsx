const workExperience = [
  {
    role: 'Software Engineering Intern',
    company: 'GeoIntel · Calgary, AB',
    period: 'Apr 2026 - Aug 2026',
    details: [
      'Developed and optimized computer-vision pipelines for a City of Edmonton urban tree-canopy project, processing aerial imagery and LiDAR with PyTorch, TensorFlow, LibTorch, and GDAL.',
      'Built model training, evaluation, and optimization workflows for large-scale geospatial datasets, improving reliability across diverse imagery and spatial data.',
      'Implemented C++ inference and spatial-processing pipelines, using Eigen and KD-tree searches to accelerate geometric operations.',
    ],
  },
]

const leadershipExperience = [
  {
    role: 'Events Director',
    company: 'UBC Startups',
    period: 'Jul 2026 - Present',
    details: ['Coordinate startup and technical events with founders, industry professionals, and student teams.'],
  },
  {
    role: 'Event Manager',
    company: 'Sauder Summit Case Competition',
    period: 'Jan 2026 - Mar 2026',
    details: ['Managed event logistics for 16 teams and served as liaison between competitors, judges, and organizers.'],
  },
  {
    role: 'Club Executive',
    company: 'Citizens of Churchill Club',
    period: 'Sep 2022 - Jun 2025',
    details: ['Led school events for 1,500+ attendees, coordinating 150+ volunteers.'],
  },
  {
    role: 'Builder & Programmer',
    company: 'VEX Robotics · Calgary, AB',
    period: 'Jun 2023 - May 2024',
    details: ['Built and tested C++ robotics systems; competed at the VEX World Championship.'],
  },
]

function ExperienceCard({ item }: { item: (typeof workExperience)[number] }) {
  return (
    <article className="rounded-3xl bg-white/[0.02] p-4 sm:p-5 border border-white/10 border-l-4 border-l-cyan-400/25 transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/[0.04]">
      <div className="space-y-2">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h4 className="text-lg font-semibold text-white tracking-tight">{item.role}</h4>
            <p className="text-sm text-slate-300">{item.company}</p>
          </div>
          <p className="text-xs uppercase tracking-[0.24em] text-cyan-400">{item.period}</p>
        </div>
        <ul className="list-disc space-y-1 pl-5 text-sm text-slate-400 leading-7 marker:text-cyan-400/70">
          {item.details.map((detail) => <li key={detail}>{detail}</li>)}
        </ul>
      </div>
    </article>
  )
}

export default function Experience() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-7 md:p-9">
      <div className="flex flex-col gap-3">
        <p className="section-title">Experience</p>
        <h2 className="section-heading">Work & leadership</h2>
      </div>

      <div className="mt-6">
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">Work Experience</h3>
        <div className="space-y-4">
          {workExperience.map((item) => <ExperienceCard key={`${item.role}-${item.company}`} item={item} />)}
        </div>
      </div>

      <div className="mt-7 border-t border-white/10 pt-6">
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">Leadership & Volunteer Experience</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {leadershipExperience.map((item) => <ExperienceCard key={`${item.role}-${item.company}`} item={item} />)}
        </div>
      </div>
    </section>
  )
}
