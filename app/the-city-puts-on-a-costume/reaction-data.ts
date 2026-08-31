export type ReactionType = 'like' | 'love' | 'wow';
export type ReactionTarget = 'article' | 'asagaya-look-up' | 'asagaya-second-street' | 'asagaya-handmade' | 'asagaya-crowd' | 'asagaya-imagination' | 'asagaya-details' | 'arena-article' | 'arena-drama' | 'arena-return' | 'index-object' | 'index-rayures' | 'index-ceramics' | 'homepage-cover' | 'homepage-exhibition' | 'homepage-ideas' | 'homepage-tokyo' | 'homepage-index';

export const reactionTargets: ReactionTarget[] = [
  'article',
  'asagaya-look-up',
  'asagaya-second-street',
  'asagaya-handmade',
  'asagaya-crowd',
  'asagaya-imagination',
  'asagaya-details',
  'arena-article',
  'arena-drama',
  'arena-return',
  'index-object',
  'index-rayures',
  'index-ceramics',
  'homepage-cover',
  'homepage-exhibition',
  'homepage-ideas',
  'homepage-tokyo',
  'homepage-index',
];

export const reactionTypes: ReactionType[] = ['like', 'love', 'wow'];

export const reactionBaseCounts: Record<ReactionTarget, Record<ReactionType, number>> = {
  article: { like: 0, love: 0, wow: 0 },
  'asagaya-look-up': { like: 0, love: 0, wow: 0 },
  'asagaya-second-street': { like: 0, love: 0, wow: 0 },
  'asagaya-handmade': { like: 0, love: 0, wow: 0 },
  'asagaya-crowd': { like: 0, love: 0, wow: 0 },
  'asagaya-imagination': { like: 0, love: 0, wow: 0 },
  'asagaya-details': { like: 0, love: 0, wow: 0 },
  'arena-article': { like: 0, love: 0, wow: 0 },
  'arena-drama': { like: 0, love: 0, wow: 0 },
  'arena-return': { like: 0, love: 0, wow: 0 },
  'index-object': { like: 0, love: 0, wow: 0 },
  'index-rayures': { like: 0, love: 0, wow: 0 },
  'index-ceramics': { like: 0, love: 0, wow: 0 },
  'homepage-cover': { like: 0, love: 0, wow: 0 },
  'homepage-exhibition': { like: 0, love: 0, wow: 0 },
  'homepage-ideas': { like: 0, love: 0, wow: 0 },
  'homepage-tokyo': { like: 0, love: 0, wow: 0 },
  'homepage-index': { like: 0, love: 0, wow: 0 },
};
