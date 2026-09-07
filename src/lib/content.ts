import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export interface ShowcaseEntry {
  title: string;
  image: string;
  description: string;
  link: string;
  eyebrow?: string;
}

export interface CvEntry {
  title: string;
  organization: string;
  dates: string;
  description: string[];
}

const contentRoot = path.join(process.cwd(), "src", "content");

function readContentFiles(folder: string) {
  const folderPath = path.join(contentRoot, folder);

  return fs.readdirSync(folderPath)
    .filter((fileName) => fileName.endsWith(".mdx"))
    .sort()
    .map((fileName) => {
      const filePath = path.join(folderPath, fileName);
      return matter(fs.readFileSync(filePath, "utf8"));
    });
}

export function getShowcaseEntries(folder: "projects" | "publications"): ShowcaseEntry[] {
  return readContentFiles(folder).map(({ data }) => ({
    title: String(data.title),
    image: String(data.image),
    description: String(data.description),
    link: String(data.link),
    eyebrow: data.eyebrow ? String(data.eyebrow) : undefined,
  }));
}

export function getCvEntries(folder: "education" | "experience"): CvEntry[] {
  return readContentFiles(`cv/${folder}`).map(({ data }) => ({
    title: String(data.title),
    organization: String(data.organization),
    dates: String(data.dates),
    description: Array.isArray(data.description)
      ? data.description.map(String)
      : [String(data.description)],
  }));
}
