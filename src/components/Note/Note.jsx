import PropTypes from 'prop-types'
import styles from './Note.module.css'

export default function Note({ id, content }) {
  return (
    <div className={styles.note}>
      <p>{content}</p>
      <button data-id={id}>X</button>
    </div>
  )
}

Note.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}
