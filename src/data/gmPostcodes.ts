// Greater Manchester postcode prefixes
export const GM_POSTCODE_PREFIXES = [
  'M', 'SK', 'BL', 'OL', 'WN', 'WA',
  'WN1', 'WN2', 'WN3', 'WN4', 'WN5', 'WN6', 'WN7',
];

export const GM_BOROUGHS: Record<string, string> = {
  'M':   'Manchester / Salford / Trafford / Stretford',
  'SK':  'Stockport / Cheadle / Marple',
  'BL':  'Bolton / Farnworth / Horwich',
  'OL':  'Oldham / Rochdale / Tameside',
  'WN':  'Wigan / Leigh / Atherton',
  'WA':  'Wigan / Leigh (WA area)',
  'PR':  'Wigan (PR area)',
};

export function getGMBorough(postcode: string): string | null {
  const clean = postcode.trim().toUpperCase().replace(/\s+/g, '');
  // Try longest match first
  for (const prefix of ['WN1','WN2','WN3','WN4','WN5','WN6','WN7','OL1','OL2','OL3','OL4','OL5','OL6','OL7','OL8','OL9','SK1','SK2','SK3','SK4','SK5','SK6','SK7','SK8','BL0','BL1','BL2','BL3','BL4','BL5','BL6','BL7','BL8','BL9','WA1','WA2','WA3','M1','M2','M3','M4','M5','M6','M7','M8','M9','M11','M12','M13','M14','M15','M16','M17','M18','M19','M20','M21','M22','M23','M24','M25','M26','M27','M28','M29','M30','M31','M32','M33','M34','M35','M38','M40','M41','M43','M44','M45','M46','M50','M60','M90']) {
    if (clean.startsWith(prefix)) return GM_BOROUGHS[prefix.replace(/\d/g,'')] ?? 'Greater Manchester';
  }
  return null;
}

export function isGMPostcode(postcode: string): boolean {
  return getGMBorough(postcode) !== null;
}
