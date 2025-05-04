import React from 'react';

export function FullPost({ post, onClose }) {
  return (
    <section id={post.id} className="full-post">
      <div className="full-post-content">
        <a href="#home" className="close-btn" onClick={onClose}>×</a>
        <h2>{post.title}</h2>
        <p className="post-meta">Posted on {post.date}</p>
        <img src={post.img} alt={post.title} className="main-img" />
        {post.fullContent.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        <div className="gallery">
          {post.gallery.map((img, index) => (
            <img key={index} src={img} alt={`${post.title} Example ${index + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}