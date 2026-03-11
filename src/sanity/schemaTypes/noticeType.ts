import { defineField, defineType } from 'sanity'

export const noticeType = defineType({
  name: 'notice',
  title: 'Notice (공지사항)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'text',
    }),
    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
      options: {
        list: [
          { title: 'Korean', value: 'ko' },
          { title: 'English', value: 'en' },
        ],
      },
      initialValue: 'ko',
    }),
    defineField({
      name: 'isUrgent',
      title: 'Urgent?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
})
