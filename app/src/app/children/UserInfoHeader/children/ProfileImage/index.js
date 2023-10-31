import React from 'react'
import styles from './styles'

const ProfileImage = (props) => {
  const {data} = props
  return (
    <img
      src={data.owner.profile_pic_url}
      style={styles}
      alt= "User Profile Picture" 
    />
  )
}

export default ProfileImage
