import React from 'react'
import { containerStyle, textStyle, heartStyle } from './styles'
import { processText } from './helpers'
import './styles.css'
import LikeButton from '../../../../../like_button_mini'

const Comment = (props) => {
  const { comment } = props

  return (
    <div className='textStyle' style={containerStyle}>
      <div style={textStyle}>
        <span>{processText(comment.node.text, comment.node.owner.username)}</span>
      </div>
      <div style={heartStyle}>
        <LikeButton />
      </div>
    </div>
  )
}

export default Comment
