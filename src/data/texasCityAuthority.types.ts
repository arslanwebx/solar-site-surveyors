export type CitySection =
  | {
      type: 'prose';
      kicker?: string;
      heading: string;
      paragraphs: string[];
    }
  | {
      type: 'cards';
      kicker?: string;
      heading: string;
      intro?: string;
      cards: { title: string; body: string }[];
    }
  | {
      type: 'checklist';
      kicker?: string;
      heading: string;
      intro?: string;
      items: { title: string; body: string }[];
    }
  | {
      type: 'steps';
      kicker?: string;
      heading: string;
      intro?: string;
      steps: { title: string; body: string }[];
    }
  | {
      type: 'table';
      kicker?: string;
      heading: string;
      intro?: string;
      rows: { label: string; detail: string }[];
    }
  | {
      type: 'callout';
      kicker?: string;
      heading: string;
      body: string;
    }
  | {
      type: 'nearby';
      kicker?: string;
      heading: string;
      intro: string;
      links: { slug: string; label: string; note: string }[];
    };

export interface TexasCityAuthorityPage {
  slug: string;
  name: string;
  title: string;
  description: string;
  h1: string;
  hubSummary: string;
  intro: string[];
  sections: CitySection[];
  faqs: { question: string; answer: string }[];
}
