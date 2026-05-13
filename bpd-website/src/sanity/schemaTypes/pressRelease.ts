import { defineType, defineField } from 'sanity'

export const pressRelease = defineType({
  name: 'pressRelease',
  title: 'Press Release / Public Information',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: Rule => Rule.required()
    }),
    defineField({ name: 'publishedAt', title: 'Published Date', type: 'datetime' }),
    defineField({
      name: 'category', title: 'Category', type: 'string',
      options: { list: ['Press Release', 'Community Notice', 'On Patrol Update', 'Department News'] }
    }),
    defineField({ name: 'summary', title: 'Summary (shown in listing)', type: 'text' }),
    defineField({ name: 'body', title: 'Full Content', type: 'array', of: [{ type: 'block' }] }),
    defineField({
      name: 'bwcFootage',
      title: 'BWC / Video Footage URL',
      type: 'url',
      description: 'Paste any video link here (YouTube, Medal, Google Drive, anything)'
    }),
  ],
})