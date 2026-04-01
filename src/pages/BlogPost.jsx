import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts[id];

  if (!post) {
    return (
      <article className="blog-post active" data-page="blog-post">
        <header>
          <h2 className="h2 article-title">Post Not Found</h2>
        </header>
        <Link to="/blog" style={{ color: 'var(--vegas-gold)' }}>← Back to Blog</Link>
      </article>
    );
  }

  return (
    <>
      <nav className="navbar" style={{ marginBottom: "20px" }}>
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/portfolio" className="navbar-link" style={{ color: "var(--vegas-gold)" }}>← Back to Portfolio</Link>
          </li>
        </ul>
      </nav>

      <article className="blog-post active" data-page="blog-post">
        <header>
          <h2 className="h2 article-title">{post.title}</h2>
        </header>

        <div className="blog-post-content">
          <figure className="blog-banner-box" style={{ marginBottom: "30px", borderRadius: "14px", overflow: "hidden" }}>
            <img src={post.image} alt={post.title} loading="lazy" style={{ width: "100%", height: "auto", objectFit: "cover" }} />
          </figure>
          
          <div className="blog-meta" style={{ marginBottom: "20px" }}>
            <p className="blog-category" style={{ color: "var(--vegas-gold)", fontSize: "14px" }}>
              {post.category} &bull; {post.date}
            </p>
          </div>

          {post.content}
        </div>
      </article>
    </>
  );
}
