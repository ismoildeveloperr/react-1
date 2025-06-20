import React from "react";
import s from "./Posts.module.css";
const Posts = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://static.tildacdn.com/tild6135-3939-4337-a633-663439333833/75.jpg"
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
