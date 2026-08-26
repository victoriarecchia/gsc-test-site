import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
title: "Pandas Page",
description:
"Learn how Pandas is used for data analysis and manipulation.",
};
  
export default function PandasPage() {
  return (
    <main>
      <nav>
        <Link href="/">Home</Link> |{" "}
        <Link href="/python">Python</Link> |{" "}
        <Link href="/postgresql">PostgreSQL</Link> |{" "}
        <Link href="/superset">Superset</Link>
      </nav>

      <h1>Pandas</h1>

      <p>
        Pandas is the most popular Python library for data analysis and data
        manipulation.
      </p>

      <p>
        DataFrames make it easy to clean, transform and aggregate information
        from many sources.
      </p>

      <p>
        In this SEO Analytics Lab, Pandas is used to analyze sitemap URLs,
        content audit results and Google Search Console metrics.
      </p>

      <p>
        The library integrates very well with CSV files, SQL databases and data
        visualization tools.
      </p>
    </main>
  );
}