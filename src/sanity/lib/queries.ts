import { groq } from 'next-sanity'

export const STORIES_QUERY = groq`*[_type == "story" && language == $lang] | order(publishedAt desc)`
export const NOTICES_QUERY = groq`*[_type == "notice" && language == $lang] | order(publishedAt desc)`
