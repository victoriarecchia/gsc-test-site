import { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "PostgreSQL | Victoria's SEO Analytics Lab",
  description:
  "Learn how PostgreSQL is used for data storage and management.",
};

export default function PostgreSQLPage() {
  return (
    <main>
      <nav>
        <Link href="/">Home</Link> |{" "}
        <Link href="/python">Python</Link> |{" "}
        <Link href="/pandas">Pandas</Link> |{" "}
        <Link href="/superset">Superset</Link>
      </nav>
    
      <h1>PostgreSQL</h1>

      <p>
        PostgreSQL is a powerful open source relational database used by
        developers, analysts and data engineers.
      </p>

      <p>
        It supports advanced SQL features, indexing strategies and analytical
        workloads.
      </p>

      <p>
        In this project PostgreSQL will store sitemap information, page audit
        results and Google Search Console metrics.
      </p>

      <p>
        The database will become the central repository for SEO and web
        analytics experiments.
      </p>
    </main>
  );
}