import React from 'react';
import Post from './Post.jsx';
import { posts } from '../data/posts.js';

function BlogPosts() {
  return (
    <section id="blog-posts">
      {posts.map((post, index) => (
        <Post key={post.id} post={post} index={index} />
      ))}
    </section>
  );
}

export default BlogPosts;