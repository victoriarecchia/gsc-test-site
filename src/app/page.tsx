import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        padding: "2rem",
        maxWidth: "1000px",
        margin: "0 auto",
      }}
    >
      <h1>Victoria's SEO Analytics Lab</h1>

      <p>
        Learning Python, PostgreSQL, Pandas, Google Search
        Console, Great Expectations and Data Analytics.
      </p>

      <h2>Learning Areas</h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        <Link href="/python">
          <button>🐍 Python</button>
        </Link>

        <Link href="/postgresql">
          <button>🗄️ PostgreSQL</button>
        </Link>

        <Link href="/pandas">
          <button>📊 Pandas</button>
        </Link>

        <Link href="/sqlalchemy">
          <button>⚡ SQLAlchemy</button>
        </Link>

        <Link href="/great-expectations">
          <button>✅ Great Expectations</button>
        </Link>

        <Link href="/superset">
          <button>📈 Superset</button>
        </Link>

        <Link href="/seo">
          <button>🔍 SEO</button>
        </Link>

        <Link href="/google-search-console">
          <button>🌐 Google Search Console</button>
        </Link>

        <Link href="/projects">
          <button>🚀 Projects</button>
        </Link>

        <Link href="/about">
          <button>👩‍💻 About</button>
        </Link>
      </div>
    </main>
  );
}