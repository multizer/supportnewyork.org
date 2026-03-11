'use client'

/**
 * This route is responsible for the built-in authoring environment of Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * For more information on how to support authoring-mode check out:
 * https://www.sanity.io/docs/nextjs-navigation-and-routing
 */

import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'

export default function StudioPage() {
  return <NextStudio config={config} />
}
