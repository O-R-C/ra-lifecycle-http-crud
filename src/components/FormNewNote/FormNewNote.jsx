import { useRef } from 'react'
import PropTypes from 'prop-types'
import showError from './showError'
import resetText from './resetText'
import styles from './FormNewNote.module.css'

export default function FormNewNote({ onAddNote }) {
  const textRef = useRef(null)

  const handleSubmit = (evt) => {
    evt.preventDefault()

    if (!textRef.current.value.trim()) {
      resetText(textRef.current)
      showError(textRef.current)
      return
    }

    onAddNote(textRef.current.value)
    resetText(textRef.current)
  }

  return (
    <form
      className={styles.formNewNote}
      onSubmit={handleSubmit}
    >
      <div className={styles.wrapper}>
        <textarea
          className={styles.textarea}
          name='content'
          placeholder='Enter new note'
          rows='10'
          cols='50'
          ref={textRef}
          autoFocus
          required
        />
        <button
          className={styles.button}
          type='submit'
        >
          Add
        </button>
      </div>
    </form>
  )
}

FormNewNote.propTypes = {
  onAddNote: PropTypes.func.isRequired,
}
