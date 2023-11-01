import React from 'react'
import styles from './styles'
import { processText } from './helpers'
import './styles.css'
import LikeButton from '../../../../../like_button_mini'

const Comment = (props) => {
  const { comment } = props

  return (
    <div className='textStyle' style={styles.containerStyle}>
      <div style={styles.textStyle}>
        <span>{processText(comment.node.text, comment.node.owner.username)}</span>
      </div>
      <div style={styles.heartStyle}>
        <LikeButton />
      </div>
    </div>
  )
}

export default Comment
