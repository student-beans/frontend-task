import React from 'react'
import Comment from './children/Comment'
import { containerStyle } from './styles'
import './styles.css'

const CommentList = (props) => {
  const { data } = props
  return (
    <div className='containerStyle' style={containerStyle}>
      {data.edge_media_to_comment.edges.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    </div>
  )
}

export default CommentList
