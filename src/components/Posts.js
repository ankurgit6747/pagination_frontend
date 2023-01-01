import React from "react";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h2>Posts</h2>
      {posts.map((post) => {
        return (
          <div
            key={post.id}
            className="list-group-item"
            style={{ background: "gray" }}
          >
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
