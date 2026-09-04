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
  article: { like: 34, love: 20, wow: 10 },
  'asagaya-look-up': { like: 21, love: 13, wow: 6 },
  'asagaya-second-street': { like: 18, love: 12, wow: 9 },
  'asagaya-handmade': { like: 33, love: 21, wow: 10 },
  'asagaya-crowd': { like: 27, love: 16, wow: 10 },
  'asagaya-imagination': { like: 20, love: 14, wow: 7 },
  'asagaya-details': { like: 14, love: 9, wow: 5 },
  'arena-article': { like: 46, love: 25, wow: 15 },
  'arena-drama': { like: 32, love: 18, wow: 19 },
  'arena-return': { like: 30, love: 20, wow: 11 },
  'index-object': { like: 24, love: 14, wow: 10 },
  'index-rayures': { like: 18, love: 12, wow: 6 },
  'index-ceramics': { like: 23, love: 19, wow: 10 },
  'homepage-cover': { like: 55, love: 30, wow: 15 },
  'homepage-exhibition': { like: 33, love: 18, wow: 9 },
  'homepage-ideas': { like: 24, love: 14, wow: 12 },
  'homepage-tokyo': { like: 41, love: 24, wow: 11 },
  'homepage-index': { like: 22, love: 13, wow: 7 },
};
