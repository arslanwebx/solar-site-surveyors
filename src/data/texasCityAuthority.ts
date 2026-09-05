import { texasCityAuthorityPagesA } from './texasCityAuthorityA';
import { texasCityAuthorityPagesB } from './texasCityAuthorityB';
import type { TexasCityAuthorityPage } from './texasCityAuthority.types';

export const texasCityAuthorityPages: TexasCityAuthorityPage[] = [
  ...texasCityAuthorityPagesA,
  ...texasCityAuthorityPagesB
];

export const texasCityAuthorityBySlug = new Map(
  texasCityAuthorityPages.map((page) => [page.slug, page])
);
