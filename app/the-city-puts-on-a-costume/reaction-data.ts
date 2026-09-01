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
  article: { like: 19, love: 12, wow: 5 },
  'asagaya-look-up': { like: 12, love: 7, wow: 5 },
  'asagaya-second-street': { like: 9, love: 8, wow: 3 },
  'asagaya-handmade': { like: 17, love: 11, wow: 5 },
  'asagaya-crowd': { like: 15, love: 9, wow: 5 },
  'asagaya-imagination': { like: 10, love: 8, wow: 5 },
  'asagaya-details': { like: 8, love: 5, wow: 3 },
  'arena-article': { like: 27, love: 14, wow: 9 },
  'arena-drama': { like: 19, love: 10, wow: 12 },
  'arena-return': { like: 16, love: 12, wow: 7 },
  'index-object': { like: 14, love: 8, wow: 5 },
  'index-rayures': { like: 10, love: 7, wow: 3 },
  'index-ceramics': { like: 12, love: 10, wow: 5 },
  'homepage-cover': { like: 31, love: 16, wow: 7 },
  'homepage-exhibition': { like: 17, love: 9, wow: 5 },
  'homepage-ideas': { like: 14, love: 8, wow: 7 },
  'homepage-tokyo': { like: 22, love: 14, wow: 5 },
  'homepage-index': { like: 12, love: 7, wow: 3 },
};
