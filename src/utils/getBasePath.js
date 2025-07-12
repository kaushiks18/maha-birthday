// Utility function to get the correct base path for GitHub Pages
export function getBasePath() {
  // During build time, check if we're in production
  return typeof window !== 'undefined' && window.location.hostname === 'kaushiks18.github.io' 
    ? '/maha-birthday' 
    : '';
}

export function getAssetPath(path) {
  const basePath = getBasePath();
  return `${basePath}${path}`;
}
