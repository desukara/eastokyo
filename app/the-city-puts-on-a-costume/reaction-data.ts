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
  article: { like: 29, love: 17, wow: 8 },
  'asagaya-look-up': { like: 18, love: 11, wow: 5 },
  'asagaya-second-street': { like: 14, love: 10, wow: 7 },
  'asagaya-handmade': { like: 27, love: 17, wow: 8 },
  'asagaya-crowd': { like: 22, love: 13, wow: 8 },
  'asagaya-imagination': { like: 16, love: 12, wow: 5 },
  'asagaya-details': { like: 12, love: 7, wow: 4 },
  'arena-article': { like: 39, love: 21, wow: 13 },
  'arena-drama': { like: 27, love: 15, wow: 17 },
  'arena-return': { like: 25, love: 17, wow: 9 },
  'index-object': { like: 20, love: 12, wow: 8 },
  'index-rayures': { like: 15, love: 10, wow: 5 },
  'index-ceramics': { like: 19, love: 15, wow: 8 },
  'homepage-cover': { like: 46, love: 25, wow: 12 },
  'homepage-exhibition': { like: 27, love: 14, wow: 7 },
  'homepage-ideas': { like: 20, love: 12, wow: 10 },
  'homepage-tokyo': { like: 34, love: 20, wow: 9 },
  'homepage-index': { like: 18, love: 11, wow: 5 },
};
