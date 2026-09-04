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
  article: { like: 36, love: 21, wow: 11 },
  'asagaya-look-up': { like: 22, love: 14, wow: 7 },
  'asagaya-second-street': { like: 20, love: 13, wow: 10 },
  'asagaya-handmade': { like: 35, love: 23, wow: 11 },
  'asagaya-crowd': { like: 29, love: 17, wow: 11 },
  'asagaya-imagination': { like: 21, love: 15, wow: 8 },
  'asagaya-details': { like: 15, love: 10, wow: 6 },
  'arena-article': { like: 49, love: 27, wow: 16 },
  'arena-drama': { like: 34, love: 19, wow: 20 },
  'arena-return': { like: 32, love: 21, wow: 12 },
  'index-object': { like: 26, love: 15, wow: 11 },
  'index-rayures': { like: 19, love: 13, wow: 7 },
  'index-ceramics': { like: 25, love: 21, wow: 11 },
  'homepage-cover': { like: 58, love: 32, wow: 16 },
  'homepage-exhibition': { like: 35, love: 19, wow: 10 },
  'homepage-ideas': { like: 25, love: 15, wow: 13 },
  'homepage-tokyo': { like: 44, love: 26, wow: 12 },
  'homepage-index': { like: 23, love: 14, wow: 8 },
};
