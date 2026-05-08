'use client';

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container section-panel">
          <span className="badge-pill">500</span>
          <h1 className="page-title">VAR check required</h1>
          <p className="page-lead">Something went wrong while loading this football experience.</p>
          <button className="glass-button" type="button" onClick={reset}>Retry</button>
        </div>
      </section>
    </main>
  );
}
