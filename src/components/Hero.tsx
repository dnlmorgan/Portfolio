import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'

type SectionKey = 'home' | 'about' | 'experience' | 'projects' | 'contact'
type HeroProps = {
  onNavigate: (section: SectionKey) => void
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="flex min-h-[90vh] flex-col justify-center gap-12 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">UBC Business & CS student</p>
      </motion.div>

      <motion.div
        className="max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl min-h-[120px] sm:min-h-[140px] md:min-h-[100px] flex items-center">
          <span>
            Hello, I'm{' '}
            <TypeAnimation
              sequence={[
                "Daniel Morgan.",
                3000,
                "a developer.",
                2000,
                "a designer.",
                2000,
                "a builder.",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              className="text-cyan-400"
            />
          </span>
        </h1>



        <motion.div
          className="mt-12 flex flex-col sm:flex-row flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <a
            href="https://drive.google.com/file/d/1R6bBs3iZma8hgCbyR0JzLDIaXQD7ILpd/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-cyan-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500"
          >
            Resume
          </a>
          <button
            type="button"
            onClick={() => onNavigate('projects')}
            className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            View Projects
          </button>
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10\"
          >
            Let's Connect
          </button>
        </motion.div>
      </motion.div>
    </section>
  )
}
