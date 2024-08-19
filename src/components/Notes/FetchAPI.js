class FetchAPI {
  constructor() {
    this.url = import.meta.env.VITE_REACT_APP_API_URL
  }
  async fetchNotes(setNotes, setIsLoading) {
    try {
      const response = await this.fetch()
      const data = await response.json()

      setNotes(data)
    } catch (error) {
      throw new Error(error)
    } finally {
      setIsLoading(false)
    }
  }

  async addNote(note, setIsLoading, setShowForm) {
    try {
      const response = await this.fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: note }),
      })

      if (!response.ok) {
        throw new Error('Failed to add note')
      }
    } catch (error) {
      throw new Error(error)
    } finally {
      setShowForm(false)
      setIsLoading(true)
    }
  }

  async removeNote(id, setIsLoading) {
    try {
      const response = await this.fetch(`${id}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        throw new Error('Failed to delete note')
      }

      setIsLoading(true)
    } catch (error) {
      throw new Error(error)
    }
  }

  fetch(urlData = '', obj = {}) {
    return fetch(this.url + urlData, { ...obj })
  }
}

export default FetchAPI
