// src/helpers/findRouteName.ts
import { modules } from "@/app/components/layout/Sidebar";

export const findRouteName = (pathSegment: string): string | null => {
  const search: any = (routes: any) => {
    for (const route of routes) {
      if (route.path === pathSegment) return route.name;
      if (route.children) {
        const found = search(route.children);
        if (found) return found;
      }
    }
    return null;
  };

  for (const module of modules) {
    const found = search(module.routes);
    if (found) return found;
  }

  return null;
};
