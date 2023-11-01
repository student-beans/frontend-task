import React, { useState } from 'react';
import LikedIcon from './children/liked_icon';
import UnlikedIcon from './children/unliked_icon'
import styles from './styles';

const LikeButton = (props) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked((prevLiked) => !prevLiked);
  };

  return (
    <button style={styles.button} onClick={toggleLike}>
      {liked ? <LikedIcon /> : <UnlikedIcon></UnlikedIcon>} 
    </button>
  );
};

export default LikeButton;