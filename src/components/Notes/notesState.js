import { useState } from 'react'

const useNotesState = () => {
  const [notes, setNotes] = useState([])
  return [notes, setNotes]
}

export default useNotesState
