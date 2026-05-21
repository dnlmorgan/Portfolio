export default function About() {
  return (
    <section id="about" className="relative">
      <div className="rounded-2xl bg-white/[0.02] border border-white/10 p-10 md:p-16 backdrop-blur-xl overflow-hidden relative">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1.5 text-sm font-semibold tracking-wide text-cyan-300 mb-6 self-start">
              <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] animate-pulse" />
              ABOUT ME
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight mb-8">
              Building systems, solving problems.
            </h2>
            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>
                I am a student at UBC Sauder pursuing a Combined Major in <strong className="text-white font-medium">Business and Computer Science</strong>. I specialize in building scalable software, designing data-driven systems, and translating complex user problems into elegant technical solutions.
              </p>
              <p>
                Whether I am developing full-stack applications, analyzing algorithmic models, or executing high-level product strategies, my focus is always on creating efficient and impactful systems. I am deeply passionate about technology-driven problem solving in fast-paced environments.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 self-center">
            <div className="col-span-1 sm:col-span-2 rounded-xl bg-white/[0.03] p-6 border border-white/10 hover:border-cyan-500/30 transition-colors">
              <h3 className="text-purple-400 font-semibold mb-2">Education</h3>
              <p className="text-white font-medium text-lg mb-1">UBC Sauder School of Business</p>
              <p className="text-slate-400 font-light">Business & Computer Science</p>
            </div>

            <div className="rounded-xl bg-white/[0.03] p-6 border border-white/10 hover:border-purple-500/30 transition-colors">
              <h3 className="text-cyan-400 font-semibold mb-3">Key Awards</h3>
              <ul className="text-slate-300 font-light space-y-2 text-sm">
                <li className="flex gap-2"><span className="text-cyan-500">▹</span> UBC BizTech UX Open Best Design '25</li>
                <li className="flex gap-2"><span className="text-cyan-500">▹</span> VEX Provincial Tournament Champions '24</li>
                <li className="flex gap-2"><span className="text-cyan-500">▹</span> CEMC Math Distinction</li>
              </ul>
            </div>

            <div className="rounded-xl bg-white/[0.03] p-6 border border-white/10 hover:border-pink-500/30 transition-colors">
              <h3 className="text-pink-400 font-semibold mb-3">Core Stack</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'C++', 'TypeScript', 'React', 'Next.js', 'TensorFlow', 'PyTorch', 'Git'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-white/[0.05] border border-white/10 rounded-full text-xs font-medium text-slate-300 backdrop-blur-sm transition-colors hover:bg-white/10">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
