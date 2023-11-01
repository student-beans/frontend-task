import React from 'react'
import CaptionImage from './children/CaptionImage'
import UserInfoHeader from './children/UserInfoHeader'
import CommentSection from './children/CommentSection'
import PostFooter from './children/PostFooter'
import styles from './styles'

const App = (props) => {
  const { data } = props
  console.log(data)
  return (
    <main style={styles.main}>
      <div style={styles.image}>
        <CaptionImage data={data} ></CaptionImage>
      </div>
      <div style={styles.text}>
        <UserInfoHeader data={data}></UserInfoHeader>
        <div style={styles.separator}></div>
        <CommentSection data={data}></CommentSection>
        <PostFooter data={data}></PostFooter>
      </div>

    </main>
  )
}

export default App
