import React from 'react'
import LikeButton from '../like_button'
import styles from './styles'
import timeSincePost from './helpers'
const PostFooter = (props) => {
    const { data } = props

    return (
        <div style={styles.container} >
            <div style={styles.postInfoStyle}>
                <p style={styles.likesTextStyle}>{data.edge_media_preview_like.count} likes</p>
                <p style={styles.timeTextStyle}>{timeSincePost(data.taken_at_timestamp)}</p>
            </div>
            <div style={styles.heartStyle}>
                <LikeButton ></LikeButton>
            </div>
        </div>

    )
}

export default PostFooter
