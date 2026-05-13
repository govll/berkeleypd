import { defineType, defineField } from 'sanity'

export const chiefMessage = defineType({
  name: 'chiefMessage',
  title: "Chief's Profile",
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Full Name', type: 'string' }),
    defineField({ name: 'rank', title: 'Rank & Title', type: 'string' }),
    defineField({ name: 'photo', title: 'Photo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'bio', title: 'Biography', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'officeDescription', title: "Chief's Office Sidebar Text", type: 'text' }),
  ],
})