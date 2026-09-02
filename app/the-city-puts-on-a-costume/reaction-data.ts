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
  article: { like: 22, love: 14, wow: 6 },
  'asagaya-look-up': { like: 14, love: 8, wow: 5 },
  'asagaya-second-street': { like: 10, love: 9, wow: 4 },
  'asagaya-handmade': { like: 20, love: 13, wow: 6 },
  'asagaya-crowd': { like: 17, love: 10, wow: 6 },
  'asagaya-imagination': { like: 12, love: 9, wow: 5 },
  'asagaya-details': { like: 9, love: 6, wow: 3 },
  'arena-article': { like: 31, love: 16, wow: 10 },
  'arena-drama': { like: 22, love: 12, wow: 14 },
  'arena-return': { like: 19, love: 14, wow: 8 },
  'index-object': { like: 16, love: 9, wow: 6 },
  'index-rayures': { like: 12, love: 8, wow: 4 },
  'index-ceramics': { like: 14, love: 12, wow: 6 },
  'homepage-cover': { like: 36, love: 19, wow: 9 },
  'homepage-exhibition': { like: 20, love: 11, wow: 6 },
  'homepage-ideas': { like: 16, love: 9, wow: 8 },
  'homepage-tokyo': { like: 26, love: 16, wow: 6 },
  'homepage-index': { like: 14, love: 8, wow: 4 },
};
