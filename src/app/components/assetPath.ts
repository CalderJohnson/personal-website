const siteBasePath = "/personal-website";

export function withSiteBasePath(assetPath: string) {
  if (!assetPath.startsWith("/") || assetPath.startsWith(siteBasePath)) {
    return assetPath;
  }

  return `${siteBasePath}${assetPath}`;
}
