import React from 'react'
import Comment from './children/Comment'
import { containerStyle } from './style'

const CommentList = (props) => {
  const { data } = props
  return (
    <div style={containerStyle}>
      {data.edge_media_to_comment.edges.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    </div>
  )
}

export default CommentList
