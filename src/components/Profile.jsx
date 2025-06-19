import React from "react";
import "./Profile.css"
const Profile = () => {
  return (
     <div className="content">
        <div>
          <img src='https://media.istockphoto.com/id/1354939778/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BA%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%BC-%D0%BF%D0%BB%D0%B0%D0%BD%D0%BE%D0%BC-%D1%80%D1%8B%D1%87%D0%B0%D1%89%D0%B5%D0%B3%D0%BE-%D0%BB%D1%8C%D0%B2%D0%B0.jpg?s=612x612&w=0&k=20&c=mHkOrc6bMc40mYq7fNh3LK1Cesn9Gi30RpheUW0_W1E=' />
        </div>
        <div>
          ava + description
        </div>
        <div>
          My posts
          <div>
            New post
          </div>
          <div className="posts">
            <div className="item">
              post 1
            </div>
            <div className="item">
              post 2
            </div>
          </div>
        </div>
      </div>
  );
};

export default Profile;
