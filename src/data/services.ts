import type { Service, ServiceGroup } from './types';
import { servicesA } from './services-a';
import { servicesB } from './services-b';
import { servicesC } from './services-c';

export type { Service, ServiceGroup } from './types';

export const services: Service[] = [...servicesA, ...servicesB, ...servicesC];
export const servicesSorted = [...services].sort((a, b) => a.order - b.order);
export const featuredServices = servicesSorted.filter((s) => s.featured);

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export const groupLabels: Record<ServiceGroup, string> = {
  acil: 'Acil arızalar',
  tamir: 'Tamir ve bakım',
  kurulum: 'Kurulum ve yenileme',
};

export function servicesByGroup(): { group: ServiceGroup; label: string; items: Service[] }[] {
  return (Object.keys(groupLabels) as ServiceGroup[]).map((g) => ({
    group: g,
    label: groupLabels[g],
    items: servicesSorted.filter((s) => s.group === g),
  }));
}
