import { texasCityAuthorityPagesA } from './texasCityAuthorityA';
import { texasCityAuthorityPagesB } from './texasCityAuthorityB';
import { texasCityAuthorityPagesC } from './texasCityAuthorityC';
import { texasCityAuthorityPagesD } from './texasCityAuthorityD';
import { texasCityAuthorityPagesE } from './texasCityAuthorityE';
import type { TexasCityAuthorityPage } from './texasCityAuthority.types';

export const texasCityAuthorityPages: TexasCityAuthorityPage[] = [
  ...texasCityAuthorityPagesA,
  ...texasCityAuthorityPagesB,
  ...texasCityAuthorityPagesC,
  ...texasCityAuthorityPagesD,
  ...texasCityAuthorityPagesE
];

export const texasCityAuthorityBySlug = new Map(
  texasCityAuthorityPages.map((page) => [page.slug, page])
);
