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
  article: { like: 25, love: 15, wow: 7 },
  'asagaya-look-up': { like: 16, love: 9, wow: 5 },
  'asagaya-second-street': { like: 12, love: 10, wow: 5 },
  'asagaya-handmade': { like: 23, love: 15, wow: 7 },
  'asagaya-crowd': { like: 19, love: 11, wow: 7 },
  'asagaya-imagination': { like: 14, love: 10, wow: 5 },
  'asagaya-details': { like: 10, love: 7, wow: 3 },
  'arena-article': { like: 34, love: 18, wow: 11 },
  'arena-drama': { like: 24, love: 13, wow: 15 },
  'arena-return': { like: 21, love: 15, wow: 9 },
  'index-object': { like: 18, love: 10, wow: 7 },
  'index-rayures': { like: 13, love: 9, wow: 4 },
  'index-ceramics': { like: 16, love: 13, wow: 7 },
  'homepage-cover': { like: 40, love: 21, wow: 10 },
  'homepage-exhibition': { like: 23, love: 12, wow: 7 },
  'homepage-ideas': { like: 18, love: 10, wow: 8 },
  'homepage-tokyo': { like: 29, love: 18, wow: 7 },
  'homepage-index': { like: 16, love: 9, wow: 5 },
};
