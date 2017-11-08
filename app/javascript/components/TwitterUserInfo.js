
import React from 'react';
import ReactDOM from 'react-dom';

const TwitterUserInfo = (props) => {
  return (
    <div className="white_box">
      <p style={{fontWeight: "bold"}}>User name:</p>
      {props.user}

      <br />

      <p style={{fontWeight: "bold"}}>Follower count:</p>
      {props.followers_count}
    </div>
  )
}

export default TwitterUserInfo
