// schemas/homepageGallery.js
import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'homepageGallery',
  title: 'Homepage Gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
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
  ],
});
