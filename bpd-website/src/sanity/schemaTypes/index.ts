import { type SchemaTypeDefinition } from 'sanity'
import { siteSettings } from './siteSettings'
import { chiefMessage } from './chiefMessage'
import { leadershipMember } from './leadershipMember'
import { opportunity } from './opportunity'
import { serviceAward } from './serviceAward'
import { pressRelease } from './pressRelease'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    siteSettings,
    chiefMessage,
    leadershipMember,
    opportunity,
    serviceAward,
    pressRelease,
  ],
}