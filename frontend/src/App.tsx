// @ts-ignore
import { useState, useEffect } from "react";

import { Heading } from "@chakra-ui/react";
import Post from "./components/Post";
import postService from "./services/posts";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    postService.getAll().then((initialPosts: any) => {
      setPosts(initialPosts);
    });
  }, []);

  return (
    <div>
      <Heading m={4}>Job Listing</Heading>
      {posts.map((post: any) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
}

export default App;
