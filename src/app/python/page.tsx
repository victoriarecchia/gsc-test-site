import Link from "next/link";

export default function PythonPage() {
  return (
    <main>
      <nav>
        <Link href="/">Home</Link> |{" "}
        <Link href="/postgresql">PostgreSQL</Link> |{" "}
        <Link href="/pandas">Pandas</Link> |{" "}
        <Link href="/superset">Superset</Link>
      </nav>

      <h1>Python</h1>

      <p>
        Python is one of the most widely used programming languages for data
        analytics, data engineering, machine learning and automation.
      </p>

      <p>
        The language is easy to learn and has a large ecosystem of libraries
        that support data processing and visualization.
      </p>

      <p>
        In this project I am using Python to analyze sitemap data, audit web
        pages and eventually consume data from Google Search Console.
      </p>

      <p>
        Popular libraries include Pandas, NumPy, SQLAlchemy, Requests and
        BeautifulSoup.
      </p>
    </main>
  );
}