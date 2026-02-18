import { useState } from 'react'
import { motion } from 'framer-motion'
import './Projects.css'

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const projects = [
    {
      title: "Pneumonia Detection from Chest X-Rays",
      tag: "Medical Imaging · VGG-19",
      tech: "Python · TensorFlow · Keras · CNN · Transfer Learning",
      desc: "I worked on a simple but meaningful project where the goal was to classify chest X-ray images as 'pneumonia' or 'normal.' Instead of training a model from scratch, I used VGG-19 as a starting point and adapted it through transfer learning. Most of the time went into cleaning the dataset, resizing and normalizing images, and making sure the train/validation split wasn't leaking information.",
      color: "#6366f1"
    },
    {
      title: "Toxic Comment Detection with BERT",
      tag: "NLP · BERT",
      tech: "Python · PyTorch · Hugging Face · Streamlit",
      desc: "This project came from my curiosity about how transformers handle messy text from real users. I used a BERT-based model to classify comments into multiple toxicity labels. A lot of the work was on the data side: cleaning the text, dealing with class imbalance, and deciding which preprocessing steps were actually helpful.",
      color: "#ec4899"
    },
    {
      title: "YOLO + SAM: Detection & Segmentation",
      tag: "Computer Vision",
      tech: "Python · YOLO · SAM · PyTorch",
      desc: "This project started from a simple question: 'What happens if I combine a detector and a modern segmentation model?' I trained YOLO on a small custom dataset and then used its bounding boxes as input to SAM to generate segmentation masks. A surprising amount of time went into fixing annotation issues and checking label quality.",
      color: "#22c55e"
    },
    {
      title: "Visual Search System",
      tag: "Similarity Search",
      tech: "Python · CLIP-style Embeddings · Vector DB",
      desc: "I built a small visual search system where a user can upload an image and get back similar images from a dataset. Instead of predicting labels, the system uses pre-trained encoders (similar to CLIP) to turn each image into an embedding and stores them in a vector database.",
      color: "#f59e0b"
    },
    {
      title: "RAG System",
      tag: "LLMs · RAG",
      tech: "Python · Embeddings · Vector DB · LLM API",
      desc: "This project was my first attempt at building a simple RAG pipeline. I took a small collection of PDFs and text files, split them into chunks, and generated embeddings with a sentence transformer. The embeddings went into a vector database, and on each user query I retrieved the top relevant chunks.",
      color: "#8b5cf6"
    },
    {
      title: "End-to-End ML Pipeline",
      tag: "End-to-End · MLOps",
      tech: "Python · scikit-learn · MLflow · Docker",
      desc: "I wanted one project where I touched almost every part of the ML lifecycle on a tabular problem, from data loading to a simple deployed service. I started with a structured dataset, built a small pipeline for preprocessing, and then trained a few baseline models like logistic regression and gradient boosting.",
      color: "#06b6d4"
    },
    {
      title: "Data Science Case Study",
      tag: "Data Science",
      tech: "Python · Pandas · Matplotlib/Seaborn",
      desc: "In this project, I treated a public dataset like a small 'data science case study.' I explored how users interacted with a product over time, looking at basic things like retention, activity patterns, and the difference between engaged and non-engaged users.",
      color: "#ef4444"
    },
    {
      title: "Batch Data Pipeline",
      tag: "Data Engineering",
      tech: "Python · SQL · Spark · Airflow",
      desc: "For this project, I focused on the data engineering side instead of the model. I built a simple batch pipeline that pulled raw data from a source, cleaned it, transformed it into a more analytics-friendly format, and stored it so that downstream tasks could use it.",
      color: "#14b8a6"
    },
    {
      title: "Exploratory Data Analysis",
      tag: "EDA",
      tech: "Python · Pandas · Matplotlib · Jupyter",
      desc: "This project was mostly about slowing down and just listening to the data. I picked a real-world dataset and spent time on unglamorous tasks: checking distributions, spotting outliers, looking at correlations, and slicing the data into different groups to see how behaviour changed.",
      color: "#f97316"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="projects-page">
      <motion.section
        className="projects-hero"
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
            Featured Projects
          </motion.h1>
          <motion.p
            className="page-subtitle"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            ML, CV, NLP, data science, and pipeline work I've built to learn by doing.
          </motion.p>
        </div>
      </motion.section>

      <section className="projects-section">
        <div className="container">
          <motion.div
            className="projects-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                style={{
                  borderColor: hoveredIndex === index ? project.color : 'rgba(255, 255, 255, 0.1)',
                  boxShadow: hoveredIndex === index 
                    ? `0 20px 60px ${project.color}40` 
                    : '0 10px 30px rgba(0, 0, 0, 0.3)'
                }}
              >
                <div 
                  className="project-accent"
                  style={{ background: project.color }}
                />
                <span className="project-tag">{project.tag}</span>
                <h3>{project.title}</h3>
                <div className="project-tech">{project.tech}</div>
                <p className="project-desc">{project.desc}</p>
                <motion.div
                  className="project-hover-effect"
                  style={{ background: project.color }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: hoveredIndex === index ? 1 : 0,
                    opacity: hoveredIndex === index ? 0.1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="publications-section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Publications
          </motion.h2>
          <div className="publications-grid">
            <motion.div
              className="publication-card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ x: 10 }}
            >
              <div className="pub-year">2021</div>
              <h3>CICN 2021</h3>
              <p>Transfer Learning based Detection of Pneumonia from Chest X-Ray Images</p>
              <a href="https://ieeexplore.ieee.org/document/9574689" target="_blank" rel="noopener noreferrer" className="pub-link">
                View Paper →
              </a>
            </motion.div>
            <motion.div
              className="publication-card"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ x: -10 }}
            >
              <div className="pub-year">2020</div>
              <h3>IRJET 2020</h3>
              <p>Computer Vision based Sudoku Solving with Augmented Reality</p>
              <a href="https://www.irjet.net/archives/V7/i10/IRJET-V7I10253.pdf" target="_blank" rel="noopener noreferrer" className="pub-link">
                View Paper →
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects

