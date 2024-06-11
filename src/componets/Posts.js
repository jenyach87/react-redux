import React from "react";
import Post from "../componets/Post";
export default function Posts({ posts }) {
 console.log(posts.length);
  return (
    <>
      {posts.length <= 0
        ? `Nothing`
        : posts.map((post, index) => <Post post={post} key={index} />)}
    </>
  );
}
