import { defineType, defineField } from 'sanity'

export const opportunity = defineType({
  name: 'opportunity',
  title: 'Opportunity',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'body', title: 'Body', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'eligibility', title: 'Eligibility Note (e.g. after 1 month of service)', type: 'string' }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
  orderings: [{ title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
})