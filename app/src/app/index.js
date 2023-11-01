import React from 'react'
import CaptionImage from './children/CaptionImage'
import UserInfoHeader from './children/UserInfoHeader'
import CommentSection from './children/CommentSection'
import PostFooter from './children/PostFooter'
import './styles.css'
import styles from './styles'

const App = (props) => {
  const { data } = props
  return (
    <main>
      <div className='main' style={styles.main}>
        <div className='image' style={styles.image}>
          <CaptionImage data={data} />
        </div>
        <div className='text' style={styles.text}>
          <UserInfoHeader data={data} />
          <div style={styles.separator} />
          <CommentSection data={data} />
          <PostFooter data={data} />
        </div>
      </div>
    </main>
  )
}

export default App
