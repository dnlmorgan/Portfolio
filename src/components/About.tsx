export default function About() {
  return (
    <section id="about" className="relative">
      <div className="rounded-3xl bg-white/[0.02] border border-white/10 p-7 md:p-9 backdrop-blur-xl overflow-hidden">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="space-y-5">
            <p className="section-title">About</p>
            <h2 className="section-heading">Building systems, solving problems.</h2>
            <div className="space-y-4 text-base text-slate-300 leading-7 max-w-2xl">
              <p>
                I am a student at UBC Sauder pursuing a Combined Major in <strong className="text-white font-medium">Business and Computer Science</strong>. I specialize in building scalable software, designing data-driven systems, and translating complex user problems into elegant technical solutions.
              </p>
              <p>
                Whether I am developing full-stack applications, analyzing algorithmic models, or executing high-level product strategies, my focus is always on creating efficient and impactful systems. I am deeply passionate about technology-driven problem solving in fast-paced environments.
              </p>
              <p>
                I also enjoy collaborating across product, design, and engineering teams to ensure that solutions are practical for users and aligned with long-term business goals.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-white/[0.03] border border-white/10 p-6 sm:p-7">
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-cyan-300 font-semibold text-sm uppercase tracking-[0.18em]">Education</h3>
                <p className="text-white font-medium">UBC Sauder School of Business</p>
                <p className="text-slate-400 text-sm">Business + Computer Science</p>
              </div>

              <div className="space-y-2 border-t border-white/10 pt-4">
                <h3 className="text-cyan-300 font-semibold text-sm uppercase tracking-[0.18em]">Key awards</h3>
                <ul className="text-slate-300 text-sm space-y-2">
                  <li className="flex gap-2"><span className="text-cyan-400">▹</span> UBC BizTech UX Open Best Design '25</li>
                  <li className="flex gap-2"><span className="text-cyan-400">▹</span> VEX Provincial Tournament Champions '24</li>
                  <li className="flex gap-2"><span className="text-cyan-400">▹</span> CEMC Math Distinction</li>
                </ul>
              </div>

              <div className="space-y-2 border-t border-white/10 pt-4">
                <h3 className="text-cyan-300 font-semibold text-sm uppercase tracking-[0.18em]">Core stack</h3>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'C++', 'TypeScript', 'React', 'Next.js', 'TensorFlow', 'PyTorch', 'Git'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-white/[0.05] border border-white/10 rounded-full text-[11px] font-medium text-slate-300 backdrop-blur-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
