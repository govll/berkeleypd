import { defineType, defineField } from 'sanity'

export const leadershipMember = defineType({
  name: 'leadershipMember',
  title: 'Leadership Member',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Full Name', type: 'string' }),
    defineField({ name: 'rank', title: 'Rank', type: 'string' }),
    defineField({ name: 'division', title: 'Division / Unit', type: 'string' }),
    defineField({ name: 'photo', title: 'Photo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'bio', title: 'Short Bio', type: 'text' }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
  orderings: [{ title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
})