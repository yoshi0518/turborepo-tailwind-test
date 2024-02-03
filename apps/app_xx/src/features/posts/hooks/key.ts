export const postKey = {
  base: ['post'] as const,
  listAll: () => [...postKey.base, 'list'] as const,
  listFilter: (filters: string) => [...postKey.listAll(), { filters }] as const,
  detail: (id: string) => [...postKey.base, 'detail', id] as const,
} as const;
