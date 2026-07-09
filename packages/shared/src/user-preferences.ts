import { z } from 'zod';

export const cardTitlePrioritySchema = z.enum(['alias', 'code']);
export const listSortModeSchema = z.enum(['time', 'identity']);

export const petAssistantPreferencesSchema = z.object({
  enabled: z.boolean().default(true).catch(true),
  mute: z.boolean().default(false).catch(false),
});

const petAssistantDefault = { enabled: true, mute: false } as const;

export const userViewPreferencesSchema = z.object({
  cardTitlePriority: cardTitlePrioritySchema.default('alias').catch('alias'),
  listSortMode: listSortModeSchema.default('time').catch('time'),
  petAssistant: petAssistantPreferencesSchema
    .default(petAssistantDefault)
    .catch(petAssistantDefault),
});

// Patch allows omitting any top-level field; petAssistant accepts partial
// updates (e.g. { mute: true }) so toggling one sub-field doesn't require
// resending the other. The API merges these into the existing record.
export const userViewPreferencesPatchSchema = userViewPreferencesSchema
  .omit({ petAssistant: true })
  .partial()
  .extend({
    petAssistant: petAssistantPreferencesSchema.partial().optional(),
  });

export const getUserViewPreferencesResponseSchema = z.object({
  preferences: userViewPreferencesSchema,
});

export const updateUserViewPreferencesResponseSchema = z.object({
  preferences: userViewPreferencesSchema,
});

export type CardTitlePriority = z.infer<typeof cardTitlePrioritySchema>;
export type ListSortMode = z.infer<typeof listSortModeSchema>;
export type PetAssistantPreferences = z.infer<typeof petAssistantPreferencesSchema>;
export type UserViewPreferences = z.infer<typeof userViewPreferencesSchema>;
export type UserViewPreferencesPatch = z.infer<typeof userViewPreferencesPatchSchema>;
export type GetUserViewPreferencesResponse = z.infer<typeof getUserViewPreferencesResponseSchema>;
export type UpdateUserViewPreferencesResponse = z.infer<
  typeof updateUserViewPreferencesResponseSchema
>;
