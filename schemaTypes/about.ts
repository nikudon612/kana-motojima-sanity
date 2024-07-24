import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
    }),
    defineField({
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'contactInfo',
      title: 'Contact Info',
      type: 'string',
    }),
    // defineField({
    //   name: 'select clients',
    //   title: 'Select Clients',
    //   type: '',
    // }),
  ],
})
