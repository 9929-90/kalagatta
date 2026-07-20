import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found">
      <div>
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p className="lede">This page may have moved during the rebuild. The main services, portfolio, blog, and contact pages are available from the navigation.</p>
        <div className="hero-actions">
          <Link className="btn btn-primary" href="/">Go home</Link>
          <Link className="btn btn-secondary" href="/contact">Contact Himanshu</Link>
        </div>
      </div>
    </section>
  );
}
