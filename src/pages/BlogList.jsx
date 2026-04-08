import { Link } from 'react-router-dom';

export default function BlogList() {
  const posts = import.meta.glob('../blog/*.jsx', { eager: true });
  const blogItems = Object.values(posts).map(module => module.meta).sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <>
      <article className="blog active" data-page="blog">

        <header>
          <h2 className="h2 article-title">Blog</h2>
        </header>

        <section className="blog-posts">
          <ul className="blog-posts-list">
            {blogItems.map(post => (
              <li className="blog-post-item" key={post.id}>
                <Link to={`/blog/${post.id}`}>
                  <figure className="blog-banner-box">
                    <img src={post.image} alt={post.title} loading="lazy" />
                  </figure>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <p className="blog-category">{post.category}</p>
                      <span className="dot"></span>
                      <time dateTime={new Date(post.date).toISOString().split('T')[0]}>{post.date}</time>
                    </div>
                    <h3 className="h3 blog-item-title">{post.title}</h3>
                    <p className="blog-text">{post.description}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>

      </article>
    </>
  );
}
