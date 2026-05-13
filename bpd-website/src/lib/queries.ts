import { groq } from 'next-sanity'

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]`

export const chiefQuery = groq`*[_type == "chiefMessage"][0]{
  name, rank, officeDescription,
  "photo": photo.asset->url,
  bio
}`

export const leadershipQuery = groq`*[_type == "leadershipMember"] | order(order asc){
  name, rank, division, bio,
  "photo": photo.asset->url
}`

export const opportunitiesQuery = groq`*[_type == "opportunity"] | order(order asc){
  title, body, eligibility
}`

export const awardsQuery = groq`*[_type == "serviceAward"] | order(date desc){
  recipientName, awardTitle, description, date, rank
}`

export const pressReleasesQuery = groq`*[_type == "pressRelease"] | order(publishedAt desc){
  title, publishedAt, category, summary,
  "slug": slug.current
}`

export const pressReleaseBySlugQuery = groq`*[_type == "pressRelease" && slug.current == $slug][0]{
  title, publishedAt, category, summary, body, bwcFootage,
  "slug": slug.current
}`