import React from 'react'
import CaptionImage from './children/CaptionImage'
import UserInfoHeader from './children/UserInfoHeader'
import LikeButton from './children/like_button'
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
        <UserInfoHeader data ={data}></UserInfoHeader>
        <LikeButton />
      </div>
    </main>
  )
}

export default App
