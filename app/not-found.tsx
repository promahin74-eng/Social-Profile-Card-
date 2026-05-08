import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container section-panel">
          <span className="badge-pill">404</span>
          <h1 className="page-title">Lost in midfield</h1>
          <p className="page-lead">The page you requested is off the pitch.</p>
          <Link className="glass-button" href="/">Return home</Link>
        </div>
      </section>
    </main>
  );
}
