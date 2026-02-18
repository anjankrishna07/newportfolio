import { motion } from 'framer-motion'
import './Education.css'

const Education = () => {
  const education = [
    {
      degree: "M.S. in Data Science",
      school: "University at Buffalo, The State University of New York",
      period: "2022 – 2024",
      description: `My time at Buffalo was where machine learning stopped being "a cool thing I tinker with" and became a
      framework for how I think about problems. Coming in with an electronics background, I suddenly found
      myself surrounded by probability theory, statistical learning, optimization, and a lot of assignments
      that forced me to dive deeper than just using libraries. Courses in machine learning, data mining, and
      large-scale data systems pushed me to understand why models behaved the way they did instead of just
      memorizing which one "works better" on a benchmark. I spent a lot of evenings in labs and coffee shops
      bouncing between Jupyter notebooks and research papers, trying to connect the math in lectures with the
      messy datasets I was experimenting on.`
    },
    {
      degree: "B.Tech in Electronics and Communication Engineering",
      school: "SRM University AP, India",
      period: "2018 – 2022",
      description: `SRM University AP is where everything really started. I enrolled in electronics and communication
      engineering because I liked the idea of understanding how systems work end-to-end: from signals and
      circuits all the way up to communication networks. In the beginning, most of my time was spent on core
      ECE subjects — signal processing, digital logic, control systems — and learning how to think in terms
      of constraints, noise, and trade-offs. Somewhere along the way, courses and small projects involving
      image processing and pattern recognition caught my attention, and I realized I was spending more time
      playing with Python and open-source frameworks than on anything else. That curiosity slowly turned into
      proper research work, like our pneumonia detection project using chest X-rays, where I got my first real
      taste of training models, handling imperfect data, and writing a paper.`
    }
  ]

  const timeline = [
    { year: "2018", event: "Started B.Tech in ECE at SRM University AP" },
    { year: "2019–2021", event: "Got pulled into computer vision and deep learning projects" },
    { year: "2022", event: "Moved to the U.S. to start M.S. in Data Science at UB" },
    { year: "2022–2024", event: "Deepened my focus on ML, data, and pipelines" },
    { year: "Now", event: "Trying to combine both worlds — systems thinking + practical ML" }
  ]

  return (
    <div className="education-page">
      <motion.section
        className="education-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <motion.h1
            className="page-title"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Education
          </motion.h1>
          <motion.p
            className="page-subtitle"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            How I went from circuits and signals to models, data, and systems.
          </motion.p>
        </div>
      </motion.section>

      <section className="education-section">
        <div className="container">
          <div className="education-grid">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="edu-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="edu-badge">{edu.period}</div>
                <h3 className="edu-degree">{edu.degree}</h3>
                <div className="edu-school">{edu.school}</div>
                <p className="edu-description">{edu.description}</p>
                <div className="edu-decoration">
                  <div className="dec-line"></div>
                  <div className="dec-dot"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="timeline-section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Timeline
          </motion.h2>
          <div className="timeline-container">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-event">{item.event}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Education

