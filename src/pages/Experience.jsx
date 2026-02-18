import { motion } from 'framer-motion'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      role: "Machine Learning Engineer",
      company: "Chyantech",
      location: "Los Angeles",
      period: "20XX – Present",
      title: "Building an Enterprise Knowledge Assistant & visual search systems",
      description: `At Chyantech, I've spent most of my time building things that didn't fully exist yet—at least not in a
      usable form. When I first joined, the idea of an "Enterprise Knowledge Assistant" was more of a hope
      than a product. Teams were drowning in internal PDFs, support tickets, logs, and documents, and the
      tools they had either hallucinated or returned random results. So I started by trying to understand how
      people actually searched for information, and that led me into designing an end-to-end RAG pipeline
      from scratch—everything from hybrid structural + semantic chunking, embedding generation, and FAISS
      retrieval tuning, to fine-tuning Llama-style models with domain-specific terminology to reduce
      hallucinations. The more I worked on it, the clearer it became that people didn't just want answers;
      they wanted something that could think with them. That's when I introduced an agentic reasoning layer
      using tools like LangChain and CrewAI, which let the assistant break tasks down, compare documents,
      synthesize information, and automate small workflows. Deploying it meant learning how to scale things
      properly—containerizing GPU services, orchestrating them in the cloud, monitoring drift, and setting
      guardrails so nothing quietly fell apart in the background.`
    },
    {
      role: "Undergraduate Researcher",
      company: "SRM University AP",
      location: "India",
      period: "20XX – 20XX",
      title: "Early work on medical imaging & transfer learning",
      description: `During my time at SRM University, my most memorable project started with a simple observation:
      pneumonia diagnosis often depends on radiologists manually inspecting X-ray images, and even
      experienced clinicians can disagree when cases get subtle. That curiosity turned into a research
      project where I worked with a small team to see if deep learning could help flag obvious cases so
      doctors could focus on the harder ones. We didn't have huge compute or unlimited data, so we collected
      and cleaned a public chest X-ray dataset and experimented with different transfer-learning setups using
      models like VGG-16, VGG-19, and Inception-ResNet V2. A big chunk of my time went into surprisingly
      unglamorous work—resizing images, handling inconsistent formats, building augmentation pipelines, and
      making sure the train/validation splits weren't leaking information. Over time, things started to
      stabilize: VGG-19 consistently came out ahead, and we were able to reach strong accuracy and precision
      on pneumonia detection without overfitting.`
    }
  ]

  return (
    <div className="experience-page">
      <motion.section
        className="experience-hero"
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
            Experience
          </motion.h1>
          <motion.p
            className="page-subtitle"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Where I've learned to build, debug, and ship things with real users on the other side.
          </motion.p>
        </div>
      </motion.section>

      <section className="experience-section">
        <div className="container">
          <motion.div
            className="timeline"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="timeline-marker">
                  <div className="timeline-dot" />
                  <div className="timeline-line" />
                </div>
                <motion.div
                  className="timeline-content"
                  whileHover={{ scale: 1.02, x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="exp-header">
                    <div>
                      <h3 className="exp-role">{exp.role}</h3>
                      <div className="exp-company">{exp.company}</div>
                    </div>
                    <div className="exp-meta">
                      <span>{exp.period}</span>
                      <span className="exp-location">{exp.location}</span>
                    </div>
                  </div>
                  <div className="exp-title">{exp.title}</div>
                  <p className="exp-description">{exp.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="work-philosophy">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            How I Like to Work
          </motion.h2>
          <motion.div
            className="philosophy-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {[
              "I care a lot about clear problem statements before fancy architectures.",
              "I like writing things down—assumptions, weird edge cases, failed ideas.",
              "I try to keep feedback loops short so mistakes surface early.",
              "I'm comfortable saying 'I don't know yet' and then going to find out."
            ].map((point, index) => (
              <motion.div
                key={index}
                className="philosophy-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="philosophy-icon">✨</div>
                <p>{point}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Experience

