import { useEffect, useState } from "react";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("posts").then((res) => {
      setPosts(res.data);
    });
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong> by {post.user.first_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
