import { useState, useEffect } from 'react'
import Modal from '../Modal/Modal'
import ListNotes from '../ListNotes/ListNotes'
import NotesHeader from '../NotesHeader/NotesHeader'
import FormNewNote from '../FormNewNote/FormNewNote'
import FetchAPI from './FetchAPI'
import styles from './Notes.module.css'

const fetchAPI = new FetchAPI()

export default function Notes() {
  const [notes, setNotes] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    if (!isLoading) return

    fetchAPI.fetchNotes(setNotes, setIsLoading)
  }, [isLoading])

  const handleRemove = (id) => {
    fetchAPI.removeNote(id, setIsLoading)
  }

  const handleAdd = (note) => {
    fetchAPI.addNote(note, setIsLoading, setShowForm)
  }

  return (
    <div className={[`${styles.notes} ${isLoading && styles.loading}`]}>
      <NotesHeader
        title={'Notes'}
        loading={isLoading}
        onRefresh={() => setIsLoading(true)}
        onAddNote={() => setShowForm(true)}
      />
      <ListNotes
        notes={notes}
        onRemoveNote={handleRemove}
      />
      {showForm && (
        <Modal onClose={() => setShowForm(false)}>
          <FormNewNote onAddNote={handleAdd} />
        </Modal>
      )}
    </div>
  )
}
