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
  article: { like: 8, love: 5, wow: 2 },
  'asagaya-look-up': { like: 5, love: 3, wow: 2 },
  'asagaya-second-street': { like: 4, love: 3, wow: 1 },
  'asagaya-handmade': { like: 7, love: 5, wow: 2 },
  'asagaya-crowd': { like: 6, love: 4, wow: 2 },
  'asagaya-imagination': { like: 4, love: 3, wow: 2 },
  'asagaya-details': { like: 3, love: 2, wow: 1 },
  'arena-article': { like: 11, love: 6, wow: 4 },
  'arena-drama': { like: 8, love: 4, wow: 5 },
  'arena-return': { like: 7, love: 5, wow: 3 },
  'index-object': { like: 6, love: 3, wow: 2 },
  'index-rayures': { like: 4, love: 3, wow: 1 },
  'index-ceramics': { like: 5, love: 4, wow: 2 },
  'homepage-cover': { like: 13, love: 7, wow: 3 },
  'homepage-exhibition': { like: 7, love: 4, wow: 2 },
  'homepage-ideas': { like: 6, love: 3, wow: 3 },
  'homepage-tokyo': { like: 9, love: 6, wow: 2 },
  'homepage-index': { like: 5, love: 3, wow: 1 },
};
