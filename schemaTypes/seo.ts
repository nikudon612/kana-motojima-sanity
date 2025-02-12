import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'seo',
  title: 'SEO',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Meta Title',
      type: 'string',
      validation: (Rule) => Rule.max(60).warning('Titles should be under 60 characters.'),
    }),
    defineField({
      name: 'description',
      title: 'Meta Description',
      type: 'text',
      validation: (Rule) => Rule.max(160).warning('Descriptions should be under 160 characters.'),
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url',
    }),
  ],
})
