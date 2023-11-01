import React from 'react'
import CommentList from './children/CommentList'


const CommentSection = (props) => {
  const { data } = props
  return (
    <div>
      <CommentList data = {data}></CommentList>
    </div>
  )
}

export default CommentSection
