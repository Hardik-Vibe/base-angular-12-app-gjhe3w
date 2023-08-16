export interface MenuItem {
  id: string;
  name: string;
  type: Type;
  children?: MenuItem[];
  isExpanded?: boolean;
}

export enum Type {
  folder,
  file,
}
