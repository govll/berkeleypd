import { defineType, defineField } from 'sanity'

export const serviceAward = defineType({
  name: 'serviceAward',
  title: 'Service Award',
  type: 'document',
  fields: [
    defineField({ name: 'recipientName', title: 'Recipient Name', type: 'string' }),
    defineField({ name: 'awardTitle', title: 'Award Title', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'date', title: 'Date Awarded', type: 'date' }),
    defineField({ name: 'rank', title: 'Rank at Time of Award', type: 'string' }),
  ],
})