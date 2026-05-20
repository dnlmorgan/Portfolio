import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="rounded-2xl bg-white/[0.02] border border-white/10 p-10 md:p-16 backdrop-blur-xl overflow-hidden relative"
      >

        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-6">About me</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-8">
              Building systems, solving problems.
            </h2>
            <div className="space-y-6 text-base text-slate-300 leading-relaxed font-normal">
              <p>
                I am a student at UBC Sauder pursuing a Combined Major in <strong className="text-white font-medium">Business and Computer Science</strong>. I specialize in building scalable software, designing data-driven systems, and translating complex user problems into elegant technical solutions.
              </p>
              <p>
                Whether I am developing full-stack applications, analyzing algorithmic models, or executing high-level product strategies, my focus is always on creating efficient and impactful systems. I am deeply passionate about technology-driven problem solving in fast-paced environments.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 self-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="col-span-1 sm:col-span-2 rounded-xl bg-white/[0.03] p-6 border border-white/10 hover:border-cyan-500/30 transition-colors"
            >
              <h3 className="text-white font-semibold mb-3">Education</h3>
              <p className="text-slate-200 font-medium text-sm mb-1">UBC Sauder School of Business</p>
              <p className="text-slate-400 text-sm">Business & Computer Science</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-xl bg-white/[0.03] p-6 border border-white/10 hover:border-purple-500/30 transition-colors"
            >
              <h3 className="text-white font-semibold mb-3">Key Awards</h3>
              <ul className="text-slate-300 space-y-2 text-sm">
                <li className="flex gap-2"><span className="text-cyan-500">▹</span> UBC BizTech UX Open Best Design '25</li>
                <li className="flex gap-2"><span className="text-cyan-500">▹</span> VEX Provincial Tournament Champions '24</li>
                <li className="flex gap-2"><span className="text-cyan-500">▹</span> CEMC Math Distinction</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-xl bg-white/[0.03] p-6 border border-white/10 hover:border-cyan-500/30 transition-colors"
            >
              <h3 className="text-white font-semibold mb-3">Core Stack</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'C++', 'TypeScript', 'React', 'Next.js', 'TensorFlow', 'PyTorch', 'Git'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-white/[0.05] border border-white/10 rounded-lg text-xs font-medium text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
