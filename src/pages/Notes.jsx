import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Notes.css'

const Notes = () => {
  const [notes, setNotes] = useState([])
  const [selectedNote, setSelectedNote] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    fetch('/notes.json')
      .then(res => res.json())
      .then(data => setNotes(data))
      .catch(err => console.error('Error loading notes:', err))
  }, [])

  const openModal = (note) => {
    setSelectedNote(note)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = ''
    setTimeout(() => setSelectedNote(null), 300)
  }

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal()
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isModalOpen])

  return (
    <div className="notes-page">
      <motion.section
        className="notes-hero"
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
            Notes & Writing
          </motion.h1>
          <motion.p
            className="page-subtitle"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Short thoughts on ML, MLOps, and learning in public.
          </motion.p>
        </div>
      </motion.section>

      <section className="notes-section">
        <div className="container">
          <motion.div
            className="notes-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {notes.map((note, index) => (
              <motion.div
                key={index}
                className="note-card"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => openModal(note)}
              >
                <span className="note-tag">{note.tag}</span>
                <h3 className="note-title">{note.title}</h3>
                <div className="note-date">{note.date}</div>
                <p className="note-preview">{note.preview}</p>
                <div className="note-read-more">Read more →</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {isModalOpen && selectedNote && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="modal-content"
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={closeModal}>
                ×
              </button>
              <span className="modal-tag">{selectedNote.tag}</span>
              <h2 className="modal-title">{selectedNote.title}</h2>
              <div className="modal-date">{selectedNote.date}</div>
              <div className="modal-body">{selectedNote.content}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Notes

