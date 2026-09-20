import { groq } from 'next-sanity'

// Exclude the original promotional placeholder, but show it if rewritten as a real story.
export const STORIES_QUERY = groq`*[_type == "story" && language == $lang && !(_id == "275b4027-34ad-4476-8e64-f637059963fd" && title == "Stories from My Sunday Visits")] | order(publishedAt desc)`
export const NOTICES_QUERY = groq`*[_type == "notice" && language == $lang] | order(publishedAt desc)`
