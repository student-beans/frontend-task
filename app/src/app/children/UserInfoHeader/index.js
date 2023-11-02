import React from 'react'
import styles from './styles'
import ProfileImage from './children/ProfileImage'

const UserInfoHeader = (props) => {
  const { data } = props
  console.log(data)
  return (
    <div style={styles.containerStyle}>
      <ProfileImage data={data} />
      <div style={styles.infoTextStyle}>
        <p style={styles.textUserNameStyle}>{data.owner.username}</p>
        <p>{data.location.name}</p>
      </div>
    </div>

  )
}

export default UserInfoHeader
