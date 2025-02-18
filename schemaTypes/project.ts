import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'projectType',
      title: 'Project Type',
      type: 'string',
      options: {
        list: [
          { title: 'Personal', value: 'personal' },
          { title: 'Professional', value: 'professional' },
        ],
        layout: 'radio', // Ensures the options are displayed as radio buttons
      },
      description: 'Select the type of project (Personal or Professional)',
    }),    
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'photos',
      title: 'Photos',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'photo' }] }],
    }),
    defineField({
      name: 'homepageGallery',
      title: 'Homepage Gallery',
      type: 'reference',
      to: [{ type: 'homepageGallery' }],
    }),
  ],
});
