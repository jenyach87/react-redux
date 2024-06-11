import React from "react";
import PostForm from "./componets/PostForm";
import FetchedPosts from "./componets/FetchedPosts";
import Posts from "./componets/Posts";
export default function App() {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <PostForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h1>Syn</h1>
          <Posts posts={[1,2,3]} />
        </div>
        <div className="col">
        <h1>Asyn</h1>
          <FetchedPosts posts={[]}/>
        </div>
      </div>
    </div>
  );
}
