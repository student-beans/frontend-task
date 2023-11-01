import React from 'react'
import { containerStyle, usernameStyle, textStyle, heartStyle } from './style'
import { processText } from './helpers'
import LikeButton from '../../../../../like_button_mini'
const Comment = (props) => {
  const { comment } = props

  return (
    <div style={containerStyle}>
      <p style={usernameStyle}>{comment.node.owner.username}</p>
      <p style={textStyle}>{processText(comment.node.text)}</p>
      <div style={heartStyle}>
        <LikeButton />
      </div>
    </div>
  )
}

export default Comment
