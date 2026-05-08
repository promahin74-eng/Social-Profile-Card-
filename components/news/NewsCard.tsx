import Link from 'next/link';
import { NewsArticle } from '@/lib/constants/goalzone-data';

export function NewsCard({ article, featured = false }: { article: NewsArticle; featured?: boolean }) {
  return (
    <article className="news-card">
      <Link href={`/news/${article.slug}`} aria-label={`Read ${article.title}`}>
        <div className={`news-visual ${article.imageTone}`}>{featured ? 'Breaking' : article.category}</div>
        <div className="inline-row" style={{ marginTop: '1rem' }}>
          <span className="badge-pill">{article.category}</span>
          <span className="muted">{article.time}</span>
        </div>
        <h3>{article.title}</h3>
        <p className="card-copy">{article.excerpt}</p>
      </Link>
    </article>
  );
}
