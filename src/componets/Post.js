import React from "react";
export default function Post({post}) {
  return (
    <div className="card">
      <div className="card-bode">
        <h1 className="card-title"> Title {post}</h1>
      </div>
    </div>
  );
}
