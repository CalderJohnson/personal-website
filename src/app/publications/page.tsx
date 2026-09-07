import Navbar from "../components/Navbar";
import Showcase from "../components/Showcase";
import { getShowcaseEntries } from "../../lib/content";

export default function PublicationsPage() {
  const publications = getShowcaseEntries("publications");

  return (
    <main className="site-main">
      <Navbar />
      <section className="page-section">
        <span className="eyebrow">Writing and research</span>
        <h1 className="section-title">Publications</h1>
        <p className="intro-copy">Research notes, preprints, and publications.</p>
        <Showcase entries={publications} />
      </section>
    </main>
  );
}
