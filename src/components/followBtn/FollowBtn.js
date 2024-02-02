// FollowBtn.js
import React, { useState } from "react";
import styles from "./FollowBtn.module.css"; // Importiere das CSS-Modul

const FollowBtn = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowClick = () => {
    setIsFollowing(!isFollowing); // Wechseln zwischen true und false
  };

  return (
    <button onClick={handleFollowClick} className={styles.button}>
      {isFollowing ? "Unfollow" : "Follow"}
    </button>
  );
};

export default FollowBtn;
