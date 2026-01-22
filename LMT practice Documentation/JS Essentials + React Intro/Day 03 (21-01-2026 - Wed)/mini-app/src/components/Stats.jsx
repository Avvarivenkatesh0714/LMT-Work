import React from "react";

function Stats({ followers, posts }) {
  return (
    <div>
      <p>Followers: {followers}</p>
      <p>Posts: {posts}</p>
    </div>
  );
}

export default Stats;
