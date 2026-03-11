import { type SchemaTypeDefinition } from 'sanity'
import { noticeType } from './noticeType'
import { storyType } from './storyType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [noticeType, storyType],
}
