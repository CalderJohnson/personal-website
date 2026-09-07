import Navbar from "../components/Navbar";
import { getCvEntries } from "../../lib/content";

function CvSection({ title, entries }: { title: string; entries: ReturnType<typeof getCvEntries> }) {
  return (
    <section className={`cv-list ${title === "Work experience" ? "cv-work-section" : ""}`}>
      <h2 className="section-title">{title}</h2>
      {entries.map((entry) => (
        <article className="cv-entry" key={`${entry.title}-${entry.organization}`}>
          <h2>{entry.title}</h2>
          <h3>{entry.organization} · {entry.dates}</h3>
          <ul>
            {entry.description.map((point) => <li key={point}>{point}</li>)}
          </ul>
        </article>
      ))}
    </section>
  );
}

export default function CvPage() {
  return (
    <main className="site-main">
      <Navbar />
      <section className="page-section">
        <span className="eyebrow">Background</span>
        <h1 className="section-title">Curriculum Vitae</h1>
        <CvSection title="Education" entries={getCvEntries("education")} />
        <CvSection title="Work experience" entries={getCvEntries("experience")} />
      </section>
    </main>
  );
}
