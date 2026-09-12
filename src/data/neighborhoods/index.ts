/**
 * Mahalle sayfaları — toplu dışa aktarım. /hizmet-bolgeleri/<ilce-slug>/<mahalle-slug>
 */
import type { Neighborhood } from './types';
import { sincanNeighborhoods } from './sincan';
import { etimesgutNeighborhoods } from './etimesgut';
import { yenimahalleNeighborhoods } from './yenimahalle';
import { mamakNeighborhoods } from './mamak';
import { keciorenNeighborhoods } from './kecioren';
import { cankayaNeighborhoods } from './cankaya';

export type { Neighborhood, NeighborhoodContent } from './types';

export const neighborhoods: Neighborhood[] = [
  ...sincanNeighborhoods,
  ...etimesgutNeighborhoods,
  ...yenimahalleNeighborhoods,
  ...mamakNeighborhoods,
  ...keciorenNeighborhoods,
  ...cankayaNeighborhoods,
];

export function getNeighborhoodsOf(districtSlug: string): Neighborhood[] {
  return neighborhoods.filter((n) => n.districtSlug === districtSlug);
}
export function getNeighborhood(districtSlug: string, slug: string): Neighborhood | undefined {
  return neighborhoods.find((n) => n.districtSlug === districtSlug && n.slug === slug);
}
