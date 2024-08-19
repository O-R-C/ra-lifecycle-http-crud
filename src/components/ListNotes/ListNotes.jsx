import PropTypes from 'prop-types'
import Note from '../Note/Note'
import styles from './ListNotes.module.css'

export default function ListNotes({ notes, onRemoveNote }) {
  const handleRemove = (evt) => {
    const id = evt.target.dataset.id
    if (!id) return

    onRemoveNote(id)
  }

  return (
    <ul
      className={styles.listNotes}
      onClick={handleRemove}
    >
      {notes.map((note) => (
        <li key={note.id}>
          <Note {...note} />
        </li>
      ))}
    </ul>
  )
}

ListNotes.propTypes = {
  notes: PropTypes.array.isRequired,
  onRemoveNote: PropTypes.func.isRequired,
}
