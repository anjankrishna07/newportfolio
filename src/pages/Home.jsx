import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import './Home.css'

const Home = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="home-page" ref={ref}>
      {/* Hero Section */}
      <motion.section
        className="hero"
        style={{ y, opacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-bg">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
        <div className="hero-content">
          <motion.div
            className="hero-highlight"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <span className="pulse-dot"></span>
            <span>Currently: ML Engineer/Data Engineer @ Chyantech (Los Angeles)</span>
          </motion.div>
          
          <motion.h1
            className="hero-text"
            variants={itemVariants}
          >
            I build ML systems
            <br />
            <span className="gradient-text">that actually ship.</span>
          </motion.h1>
          
          <motion.p
            className="hero-subtitle"
            variants={itemVariants}
          >
            Machine Learning Engineer · Data Scientist · Part Time Writer · Fitness Geek
          </motion.p>
          
          <motion.div
            className="cta-buttons"
            variants={itemVariants}
          >
            <Link to="/projects" className="btn btn-primary">
              <motion.span
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                View Projects 🚀
              </motion.span>
            </Link>
            <a
              href="mailto:krishkandimalla07@gmail.com"
              className="btn btn-secondary"
            >
              <motion.span
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Get in Touch ✉️
              </motion.span>
            </a>
          </motion.div>

          <motion.div
            className="scroll-indicator"
            variants={itemVariants}
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="mouse">
              <div className="wheel"></div>
            </div>
            <p>Scroll to explore</p>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        className="about-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>
          <div className="about-content">
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p>
                I'm <strong>Anjan Krishna</strong>, a machine learning engineer originally from India and
                now based in Los Angeles. I first fell in love with ML during my undergrad
                at SRM University AP, where small computer-vision research projects pulled me deeper into
                the world of deep learning. That passion carried through my Data Science master's at
                SUNY Buffalo, and eventually shaped my path into building practical,
                production-ready ML systems.
              </p>
              <p style={{ marginTop: '1.5rem' }}>
                On weekdays during my free time you'll usually find me reading the latest arXiv papers;
                on weekends, I try to reproduce the results, benchmark models, and explore
                ideas that catch my curiosity. Outside of work, I'm a fitness geek — I love training people, helping them
                build healthier routines, and experimenting with my own programming and nutrition.
              </p>
            </motion.div>
            <motion.div
              className="about-stats"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="stat-card">
                <div className="stat-number">18%</div>
                <div className="stat-label">Accuracy Improvement</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">25%</div>
                <div className="stat-label">Latency Reduction</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">96%+</div>
                <div className="stat-label">Medical Image Accuracy</div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Quick Links */}
      <motion.section
        className="quick-links"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Explore
          </motion.h2>
          <div className="links-grid">
            {[
              { to: '/projects', icon: '🚀', title: 'Projects', desc: 'ML, CV, NLP experiments' },
              { to: '/experience', icon: '💼', title: 'Experience', desc: 'Professional journey' },
              { to: '/education', icon: '🎓', title: 'Education', desc: 'Academic background' },
              { to: '/notes', icon: '📝', title: 'Notes', desc: 'Thoughts & learnings' },
            ].map((link, index) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Link to={link.to} className="link-card">
                  <div className="link-icon">{link.icon}</div>
                  <h3>{link.title}</h3>
                  <p>{link.desc}</p>
                  <div className="link-arrow">→</div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default Home

