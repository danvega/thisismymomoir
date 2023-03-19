import { Client } from '@notionhq/client'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const page_size = parseInt(query.page_size) || 100;

  const category = decodeURI(event.context.params.category);
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const database = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    filter: {
      and: [
        {
          property: 'Status',
          status: {
            equals: 'Done',
          }
        },
        {
          property: 'Section',
          select: {
            equals: category
          }
        }
      ]

    },
    sorts: [
        {
            property: 'Date Created',
            direction: 'descending',
        },
    ],
    page_size: page_size
  });

  const posts = [];
  database.results.forEach((post) => {
    posts.push({
      id: post.id,
      title: post.properties.Name.title[0].plain_text,
      slug: post.properties.Slug.rich_text[0].plain_text,
      cover: post.properties.Image.files[0]?.file.url,
      publishedOn: post.properties['Date Created'].date.start,
    });
  });

  return posts;

});


