import React from 'react'
import {containerStyle,infoTextStyle,textUserNameStyle } from './styles'
import ProfileImage from './children/ProfileImage'


const UserInfoHeader = (props) => {
  const { data } = props
  console.log(data)
  return (
      <div style={containerStyle} >
        <ProfileImage data={data}></ProfileImage>
        <div style={infoTextStyle}>
            <p style ={textUserNameStyle}>{data.owner.username}</p>
            <p>{data.location.name}</p>
        </div>
      </div>
    
  )
}

export default UserInfoHeader
