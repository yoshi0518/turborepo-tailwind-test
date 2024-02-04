export const userKey = {
  base: ['user'] as const,
  listAll: () => [...userKey.base, 'list'] as const,
  listFilter: (filters: string) => [...userKey.listAll(), { filters }] as const,
  detail: (id: number) => [...userKey.base, 'detail', id] as const,
} as const;
