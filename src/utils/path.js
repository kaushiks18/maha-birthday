// Utility function to get the correct asset path for GitHub Pages
export const getAssetPath = (path) => {
  // Check if we're in a browser environment
  if (typeof window !== 'undefined') {
    // In browser, get the base path from the current URL
    const pathname = window.location.pathname;
    const pathSegments = pathname.split('/').filter(Boolean);
    
    // If we're on GitHub Pages, the first segment is usually the repo name
    if (pathSegments.length > 0 && pathSegments[0] !== '' && process.env.NODE_ENV === 'production') {
      return `/${pathSegments[0]}${path}`;
    }
  }
  
  // Fallback for server-side rendering or development
  const basePath = process.env.NODE_ENV === 'production' ? '/maha-birthday-main' : '';
  return `${basePath}${path}`;
};
