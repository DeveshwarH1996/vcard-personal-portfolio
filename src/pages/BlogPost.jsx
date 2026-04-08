import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function BlogPost() {
  const { id } = useParams();
  
  const posts = import.meta.glob('../blog/*.jsx', { eager: true });
  const postModule = Object.values(posts).find(m => m.meta && m.meta.id === id);

  if (!postModule) {
    return (
      <article className="blog-post active" data-page="blog-post">
        <header>
          <h2 className="h2 article-title">Post Not Found</h2>
        </header>
        <Link to="/blog" style={{ color: 'var(--vegas-gold)' }}>← Back to Blog</Link>
      </article>
    );
  }

  const { meta, default: PostContent } = postModule;

  return (
    <>
      <nav className="navbar" style={{ marginBottom: "20px" }}>
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/blog" className="navbar-link" style={{ color: "var(--vegas-gold)" }}>← Back to Blog</Link>
          </li>
        </ul>
      </nav>

      <article className="blog-post active" data-page="blog-post">
        <header>
          <h2 className="h2 article-title">{meta.title}</h2>
        </header>

        <div className="blog-post-content">
          <figure className="blog-banner-box" style={{ marginBottom: "30px", borderRadius: "14px", overflow: "hidden" }}>
            <img src={meta.image} alt={meta.title} loading="lazy" style={{ width: "100%", height: "auto", objectFit: "cover" }} />
          </figure>
          
          <div className="blog-meta" style={{ marginBottom: "20px" }}>
            <p className="blog-category" style={{ color: "var(--vegas-gold)", fontSize: "14px" }}>
              {meta.category} &bull; {meta.date}
            </p>
          </div>

          <PostContent />
        </div>
      </article>
    </>
  );
}
