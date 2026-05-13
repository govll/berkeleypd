import { defineType, defineField } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'departmentName', title: 'Department Name', type: 'string' }),
    defineField({ name: 'tagline', title: 'Tagline / Hero Subtitle', type: 'text' }),
    defineField({ name: 'missionStatement', title: 'Mission Statement', type: 'text' }),
    defineField({ name: 'overviewHeading', title: 'Overview Heading', type: 'string' }),
    defineField({ name: 'overviewBody', title: 'Overview Body', type: 'text' }),
    defineField({ name: 'standardsHeading', title: 'Core Standards Heading', type: 'string' }),
    defineField({ name: 'standardsBody', title: 'Core Standards Body', type: 'text' }),
    defineField({ name: 'discordUrl', title: 'Discord URL', type: 'url' }),
    defineField({ name: 'employeeFormUrl', title: 'Employee Interest Form URL (Google Forms embed)', type: 'url' }),
  ],
})