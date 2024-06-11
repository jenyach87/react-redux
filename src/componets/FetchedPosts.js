import React from "react";
export default function FetchedPosts({ posts }) {
  if (posts.length <= 0) {
    return <button className="btn btn-primary">Download</button>;
  }
  return <div>Fetched Posts</div>;
}
