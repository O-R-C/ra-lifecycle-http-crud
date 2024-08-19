import PropTypes from 'prop-types'
import Loading from '../Loading/Loading'
import Controls from '../Controls/Controls'
import styles from './NotesHeader.module.css'

export default function NotesHeader({ title, loading, onAddNote, onRefresh }) {
  return (
    <div className={styles.header}>
      {title}
      {loading ? (
        <Loading className={styles.loading} />
      ) : (
        <Controls
          onAddNote={onAddNote}
          onRefresh={onRefresh}
        />
      )}
    </div>
  )
}

NotesHeader.propTypes = {
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  onAddNote: PropTypes.func.isRequired,
  onRefresh: PropTypes.func.isRequired,
}
