import PropTypes from 'prop-types'
import styles from './Controls.module.css'

export default function Controls({ onAddNote, onRefresh }) {
  return (
    <div className={styles.controls}>
      <button onClick={onAddNote}>&#10133;</button>
      <button onClick={onRefresh}>&#10227;</button>
    </div>
  )
}

Controls.propTypes = {
  onAddNote: PropTypes.func.isRequired,
  onRefresh: PropTypes.func.isRequired,
}
