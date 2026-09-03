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
  article: { like: 31, love: 18, wow: 9 },
  'asagaya-look-up': { like: 19, love: 12, wow: 6 },
  'asagaya-second-street': { like: 16, love: 11, wow: 8 },
  'asagaya-handmade': { like: 30, love: 19, wow: 9 },
  'asagaya-crowd': { like: 24, love: 14, wow: 9 },
  'asagaya-imagination': { like: 18, love: 13, wow: 6 },
  'asagaya-details': { like: 13, love: 8, wow: 5 },
  'arena-article': { like: 42, love: 23, wow: 14 },
  'arena-drama': { like: 29, love: 16, wow: 18 },
  'arena-return': { like: 27, love: 18, wow: 10 },
  'index-object': { like: 22, love: 13, wow: 9 },
  'index-rayures': { like: 16, love: 11, wow: 6 },
  'index-ceramics': { like: 21, love: 17, wow: 9 },
  'homepage-cover': { like: 50, love: 27, wow: 13 },
  'homepage-exhibition': { like: 30, love: 16, wow: 8 },
  'homepage-ideas': { like: 22, love: 13, wow: 11 },
  'homepage-tokyo': { like: 37, love: 22, wow: 10 },
  'homepage-index': { like: 20, love: 12, wow: 6 },
};
