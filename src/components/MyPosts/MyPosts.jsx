import React from "react";
import s from "./MyPosts.module.css";
import "./MyPosts.module.css";
import Posts from "./Post/Posts";
const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea name="" id=""></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Posts message='Hi, how are you?' />
        <Posts message='Its my frist post'/>
      </div>
    </div>
  );
};

export default MyPosts;
