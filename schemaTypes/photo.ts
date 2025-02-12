import {defineType, defineField} from 'sanity'

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
      name: 'orientation',
      title: 'Orientation',
      type: 'string',
      options: {
        list: [
          {title: 'Portrait', value: 'portrait'},
          {title: 'Landscape', value: 'landscape'},
        ],
        layout: 'radio', // Displays as radio buttons
      },
      description: 'Select the image orientation (Portrait or Landscape)',
    }),
    defineField({
      name: 'height',
      title: 'Height',
      type: 'number',
    }),
    defineField({
      name: 'width',
      title: 'Width',
      type: 'number',
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
      name: 'Work_X',
      title: 'Work-X',
      type: 'number',
    }),
    defineField({
      name: 'Work_Y',
      title: 'Work-Y',
      type: 'number',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
