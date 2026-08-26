export type ReactionType = 'like' | 'love' | 'wow';
export type ReactionTarget = 'article' | 'asagaya-look-up' | 'asagaya-second-street' | 'asagaya-handmade' | 'asagaya-crowd' | 'asagaya-imagination' | 'asagaya-details';

export const reactionTargets: ReactionTarget[] = [
  'article',
  'asagaya-look-up',
  'asagaya-second-street',
  'asagaya-handmade',
  'asagaya-crowd',
  'asagaya-imagination',
  'asagaya-details',
];

export const reactionTypes: ReactionType[] = ['like', 'love', 'wow'];

/**
 * EDITORIAL REACTION CONTROL
 * --------------------------
 * Change any base value whenever you want. Visitor reactions are stored
 * separately in Redis and are added to these editorial baselines.
 *
 * displayed count = max(0, editorial base + visitor reactions)
 */
export const reactionBaseCounts: Record<ReactionTarget, Record<ReactionType, number>> = {
  article: { like: 0, love: 0, wow: 0 },
  'asagaya-look-up': { like: 0, love: 0, wow: 0 },
  'asagaya-second-street': { like: 0, love: 0, wow: 0 },
  'asagaya-handmade': { like: 0, love: 0, wow: 0 },
  'asagaya-crowd': { like: 0, love: 0, wow: 0 },
  'asagaya-imagination': { like: 0, love: 0, wow: 0 },
  'asagaya-details': { like: 0, love: 0, wow: 0 },
};
