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

// Estimated reconstruction of launch reactions lost during the registration outage.
// Live persisted reactions are added to these baselines by /api/reactions.
export const reactionBaseCounts: Record<ReactionTarget, Record<ReactionType, number>> = {
  article: { like: 38, love: 22, wow: 11 },
  'asagaya-look-up': { like: 23, love: 15, wow: 7 },
  'asagaya-second-street': { like: 22, love: 13, wow: 11 },
  'asagaya-handmade': { like: 38, love: 25, wow: 12 },
  'asagaya-crowd': { like: 31, love: 18, wow: 11 },
  'asagaya-imagination': { like: 22, love: 16, wow: 9 },
  'asagaya-details': { like: 16, love: 10, wow: 6 },
  'arena-article': { like: 52, love: 29, wow: 17 },
  'arena-drama': { like: 36, love: 20, wow: 20 },
  'arena-return': { like: 34, love: 23, wow: 13 },
  'index-object': { like: 28, love: 16, wow: 11 },
  'index-rayures': { like: 20, love: 13, wow: 7 },
  'index-ceramics': { like: 27, love: 22, wow: 12 },
  'homepage-cover': { like: 62, love: 34, wow: 17 },
  'homepage-exhibition': { like: 37, love: 20, wow: 10 },
  'homepage-ideas': { like: 27, love: 16, wow: 14 },
  'homepage-tokyo': { like: 47, love: 28, wow: 13 },
  'homepage-index': { like: 24, love: 15, wow: 8 },
};
