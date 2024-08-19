import PropTypes from 'prop-types'

import styles from './Modal.module.css'

export default function Modal({ children, onClose }) {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        {children}
        <button
          className={styles.closeButton}
          onClick={onClose}
        >
          &#10006;
        </button>
      </div>
    </div>
  )
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
}
