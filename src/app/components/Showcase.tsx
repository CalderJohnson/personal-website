import Image from "next/image";
import type { ShowcaseEntry } from "../../lib/content";
import { withSiteBasePath } from "./assetPath";

interface ShowcaseProps {
  entries: ShowcaseEntry[];
}

export default function Showcase({ entries }: ShowcaseProps) {
  return (
    <div className="showcase-list">
      {entries.map((entry) => (
        <a
          className="showcase-item"
          href={entry.link}
          key={entry.title}
          target="_blank"
          rel="noreferrer"
        >
          <div className="showcase-image-wrap">
            <Image
              className="showcase-image"
              src={withSiteBasePath(entry.image)}
              alt={entry.title}
              width={600}
              height={420}
            />
          </div>
          <div className="showcase-content">
            <span className="eyebrow">{entry.eyebrow ?? "Selected work"}</span>
            <h2>{entry.title}</h2>
            <p>{entry.description}</p>
            <span className="text-link">View details ↗</span>
          </div>
        </a>
      ))}
    </div>
  );
}
