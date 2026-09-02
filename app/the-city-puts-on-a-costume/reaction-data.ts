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
  article: { like: 27, love: 16, wow: 7 },
  'asagaya-look-up': { like: 17, love: 10, wow: 5 },
  'asagaya-second-street': { like: 13, love: 10, wow: 6 },
  'asagaya-handmade': { like: 25, love: 16, wow: 8 },
  'asagaya-crowd': { like: 20, love: 12, wow: 7 },
  'asagaya-imagination': { like: 15, love: 11, wow: 5 },
  'asagaya-details': { like: 11, love: 7, wow: 4 },
  'arena-article': { like: 36, love: 19, wow: 12 },
  'arena-drama': { like: 25, love: 14, wow: 16 },
  'arena-return': { like: 23, love: 16, wow: 9 },
  'index-object': { like: 19, love: 11, wow: 7 },
  'index-rayures': { like: 14, love: 9, wow: 5 },
  'index-ceramics': { like: 17, love: 14, wow: 8 },
  'homepage-cover': { like: 43, love: 23, wow: 11 },
  'homepage-exhibition': { like: 25, love: 13, wow: 7 },
  'homepage-ideas': { like: 19, love: 11, wow: 9 },
  'homepage-tokyo': { like: 31, love: 19, wow: 8 },
  'homepage-index': { like: 17, love: 10, wow: 5 },
};
