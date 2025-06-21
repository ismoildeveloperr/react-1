import React from "react";
import s from "./Posts.module.css";
const Posts = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://zefirka.club/uploads/posts/2022-10/1665995490_1-zefirka-club-p-chb-avatarki-1.jpg"
        alt=""
      />
    {props.message}
      <div>
        <span>like</span>
      </div>
    </div>
  );
};

export default Posts;
