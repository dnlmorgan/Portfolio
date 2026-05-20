import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section className="mb-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="rounded-2xl bg-white/[0.02] p-8 md:p-16 border border-white/10 text-center relative overflow-hidden"
      >

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-6">Let's connect</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-8">Let's build something together.</h2>

          <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl rounded-2xl bg-white/[0.02] border border-white/5 p-6 backdrop-blur-md hover:bg-white/[0.04] transition-colors mb-8">
            <p className="text-slate-500 text-xs uppercase tracking-[0.15em] mb-2">Email</p>
            <a
              href="mailto:danielmichelmorgan@gmail.com"
              className="text-lg md:text-xl font-semibold text-white transition-colors hover:text-cyan-400"
            >
              danielmichelmorgan<span className="text-slate-500">@gmail.com</span>
            </a>
          </div>

          <p className="text-base text-slate-400 leading-relaxed mb-8 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
            Always open to discussing new opportunities, demanding technical challenges, and high-impact product roles. Let's create something meaningful.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://github.com/danielmorganofficial/" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10">
              GitHub
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </a>
            <a href="https://www.linkedin.com/in/danielmmorgan/" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10">
              LinkedIn
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
