import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'

type SectionKey = 'home' | 'about' | 'experience' | 'projects' | 'contact'
type HeroProps = {
  onNavigate: (section: SectionKey) => void
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="flex min-h-[78vh] flex-col justify-end gap-6 sm:gap-8 md:gap-10 py-16 sm:py-24 md:py-32 pb-10 sm:pb-16 md:pb-20 pt-16 sm:pt-24 md:pt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >


        <p className="section-title">UBC Business & CS student</p>
      </motion.div>

      <motion.div
        className="max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white min-h-[100px] sm:min-h-[120px] md:min-h-[100px] flex items-center leading-tight">
          <span>
            Hello World! I'm{' '}
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
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 typing-cursor"
              cursor={false}
            />
          </span>
        </h1>



        <motion.div
          className="mt-10 flex flex-col sm:flex-row flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <a
            href="https://drive.google.com/file/d/1R6bBs3iZma8hgCbyR0JzLDIaXQD7ILpd/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-white transition hover:opacity-90 shadow-lg shadow-purple-500/30"
          >
            Resume Link
          </a>
          <button
            type="button"
            onClick={() => onNavigate('projects')}
            className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            View Projects
          </button>
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center justify-center rounded-full border border-slate-700 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white"
          >
            Let's Connect
          </button>
        </motion.div>
      </motion.div>
    </section>
  )
}
