import { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
title: "Superset | Victoria's SEO Analytics Lab",
description:
"Learn how Superset is used for data visualization and dashboarding.",
};
  
export default function SupersetPage() {
  return (
    <main>
      <nav>
        <Link href="/">Home</Link> |{" "}
        <Link href="/python">Python</Link> |{" "}
        <Link href="/postgresql">PostgreSQL</Link> |{" "}
        <Link href="/pandas">Pandas</Link> |{" "}
        <Link href="/great-expectations">Great Expectations</Link>
      </nav>

      <h1>Superset</h1>

      <p>
        Apache Superset is a modern business intelligence and dashboarding
        platform.
      </p>

      <p>
        It allows users to connect databases, build charts and share analytics
        dashboards.
      </p>

      <p>
        My goal is to connect Superset to PostgreSQL and visualize SEO metrics
        collected from Google Search Console.
      </p>

      <p>
        Future dashboards will include impressions, clicks, CTR, page
        performance and content quality indicators.
      </p>
    </main>
  );
}