import Navbar from "../components/Navbar";
import Showcase from "../components/Showcase";
import { getShowcaseEntries } from "../../lib/content";

export default function ProjectsPage() {
  const projects = getShowcaseEntries("projects");

  return (
    <main className="site-main">
      <Navbar />
      <section className="page-section">
        <span className="eyebrow">Selected work</span>
        <h1 className="section-title">Projects</h1>
        <p className="intro-copy">A selection of systems, experiments, and products I have built with collaborators and on my own.</p>
        <Showcase entries={projects} />
      </section>
    </main>
  );
}
