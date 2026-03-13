const SITE_URL = 'https://www.thisismymomoir.com'
const SITE_TITLE = 'This Is My Momoir'
const SITE_DESCRIPTION =
  'A memoir as a mom — sharing stories on #MomLife, Health & Wellness, Recipes, Celebrations, and Travel.'

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export default defineEventHandler(async (event) => {
  const posts = await queryCollection(event, 'blog')
    .where('category', '<>', '')
    .order('publishedOn', 'DESC')
    .all()

  const items = posts
    .map((post) => {
      const link = `${SITE_URL}/blog/${post.slug}`
      const pubDate = new Date(post.publishedOn as string).toUTCString()
      const coverUrl = post.cover ? `${SITE_URL}${post.cover}` : ''

      return `    <item>
      <title>${escapeXml(post.title as string)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(post.excerpt as string || '')}</description>${
        post.category
          ? `\n      <category>${escapeXml(post.category as string)}</category>`
          : ''
      }${
        coverUrl
          ? `\n      <enclosure url="${escapeXml(coverUrl)}" type="image/jpeg" length="0" />`
          : ''
      }
    </item>`
    })
    .join('\n')

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_TITLE)}</title>
    <link>${SITE_URL}</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`

  setResponseHeader(event, 'content-type', 'application/rss+xml; charset=UTF-8')
  return feed
})
