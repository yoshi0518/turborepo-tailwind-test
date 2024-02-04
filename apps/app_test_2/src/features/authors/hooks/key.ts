export const authorKey = {
  base: ['author'] as const,
  listAll: () => [...authorKey.base, 'list'] as const,
  listFilter: (filters: string) => [...authorKey.listAll(), { filters }] as const,
  detail: (id: number) => [...authorKey.base, 'detail', id] as const,
} as const;
