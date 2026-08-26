import Link from "next/link";

export default function GreatExpectationsPage() {
  return (
    <main>
      <nav>
        <Link href="/">Home</Link> |{" "}
        <Link href="/python">Python</Link> |{" "}
        <Link href="/postgresql">PostgreSQL</Link> |{" "}
        <Link href="/pandas">Pandas</Link> |{" "}
        <Link href="/superset">Superset</Link>
      </nav>

      <h1>Great Expectations</h1>

      <p>
        Great Expectations is a data quality framework used to validate data
        pipelines.
      </p>

      <p>
        Data quality checks ensure that datasets are complete, accurate and
        consistent.
      </p>

      <p>
        In this project I plan to validate SEO and analytics datasets before
        loading them into reporting solutions.
      </p>

      <p>
        Automated validation helps identify missing values, unexpected changes
        and data integrity issues.
      </p>
    </main>
  );
}