/**
 * Resolves a file in `public/` to a URL that respects the app's base path.
 *
 * The site is deployed to GitHub Pages under `/circuit-breakers/`, so a raw
 * `/robot.png` would be requested from the domain root and 404. Always use
 * this helper for anything served out of `public/`.
 *
 * @example asset('/robot.png') // => '/circuit-breakers/robot.png' in prod
 */
export const asset = (path: string): string => {
  const base = import.meta.env.BASE_URL || '/';
  return `${base.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
};

export default asset;
