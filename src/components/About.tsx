export default function About() {
  return (
    <section id="about" className="relative">
      <div className="rounded-3xl bg-white/[0.02] border border-white/10 p-6 sm:p-7 md:p-9 overflow-hidden">
        <div className="grid gap-6 sm:gap-7 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="space-y-5">
            <p className="section-title">About</p>
            <h2 className="section-heading">Building systems, solving problems.</h2>
            <div className="space-y-4 text-base text-slate-300 leading-7 max-w-2xl">
              <p>
                I'm a student at UBC Sauder pursuing a Combined Major in <strong className="text-white font-medium">Business and Computer Science</strong>. I chose a mix of the two because I'm interested in both how technology is built and what makes it useful to people.
              </p>
              <p>
                So far, I've worked on everything from <strong className="text-white font-medium">geospatial computer vision</strong> during my software engineering internship to AI, full-stack, and product-focused projects through hackathons. I enjoy getting into the details, learning new tools, and taking an idea from something rough to something people can actually use.
              </p>
              <p>
                I also enjoy the parts of building that happen between the technical work: understanding the problem, listening to users, sharing ideas early, and working through trade-offs with a team. I'm still figuring out exactly where I want to take that, but I know I want to keep <strong className="text-white font-medium">building, learning, and solving problems that I find genuinely interesting.</strong>
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-white/[0.03] border border-white/10 p-6 sm:p-7">
            <div className="space-y-4">
              <div className="space-y-1">
                <h3 className="text-cyan-300 font-semibold text-sm uppercase tracking-[0.18em]">Education</h3>
                <p className="text-white font-medium">UBC Sauder School of Business</p>
                <p className="text-slate-400 text-sm">Business and Computer Science</p>
                <p className="text-slate-400 text-sm">Dean's List</p>
              </div>

              <div className="space-y-1 border-t border-white/10 pt-3">
                <h3 className="text-cyan-300 font-semibold text-sm uppercase tracking-[0.18em]">Key awards</h3>
                <p className="text-slate-300 text-sm leading-6">StormHacks · Best Use of Snowflake (2026)<br />UBC BUCS Hackathon · Audience Favourite (2026)<br />UBC BizTech UX Open · Best UX Design (2025)<br />Alberta VEX Robotics Provincial Champions (2024)</p>
              </div>

              <div className="space-y-1 border-t border-white/10 pt-3">
                <h3 className="text-cyan-300 font-semibold text-sm uppercase tracking-[0.18em]">Skills</h3>
                <div className="space-y-1 text-sm leading-6">
                  <p className="text-slate-300"><strong className="text-white">Languages:</strong> Python, C++, TypeScript, JavaScript, SQL</p>
                  <p className="text-slate-300"><strong className="text-white">Development & AI:</strong> React, Next.js, PyTorch, TensorFlow, OpenCV, Gemini, ElevenLabs</p>
                  <p className="text-slate-300"><strong className="text-white">Systems & tools:</strong> Snowflake, GDAL, Eigen, LiDAR, KD-trees, multithreading, Firebase, Git, GitHub, Figma</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
