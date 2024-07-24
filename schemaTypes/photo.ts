import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'photo',
  title: 'Photo',
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
      type: 'blockContent',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'x',
      title: 'X-Axis',
      type: 'number',
    }),
    defineField({
      name: 'y',
      title: 'Y-Axis',
      type: 'number',
    }),
    defineField({
      name: "Work_X",
      title: "Work-X",
      type: "number",
    }),
    defineField({
      name: "Work_Y",
      title: "Work-Y",
      type: "number",
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
});
