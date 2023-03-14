import { Client } from '@notionhq/client'
import fs from 'fs';
import fetch from 'node-fetch';

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
    const imgName = post.properties.Image.files[0]?.name;
    posts.push({
      id: post.id,
      title: post.properties.Name.title[0].plain_text,
      slug: post.properties.Slug.rich_text[0].plain_text,
      cover: post.properties.Image.files[0]?.name,
    });
    // the cover image expires after 1 hour so we need to download it
    const path = `./public/images/blog/thumbnails/${imgName}`;
    try {
      if (!fs.existsSync(path)) {
        downloadImage(post.properties.Image.files[0]?.file.url, `./public/images/blog/thumbnails/${imgName}`)
      }
    } catch(err) {
      console.error(err)
    }
  });

  async function downloadImage(url, filepath) {
    fetch(url)
    .then(
      res =>
        new Promise((resolve, reject) => {
          const dest = fs.createWriteStream(filepath);
          res.body.pipe(dest);
          res.body.on("end", () => resolve('image was downloaded successfully.'));
          dest.on("error", reject);
        })
    )
    .then(x => console.log(x));
  }

  return posts;

});


