import { Client } from '@notionhq/client'
import fs from 'fs';
import fetch from 'node-fetch';

export default defineEventHandler(async (event) => {

    const slug = event.context.params.slug;
    const notion = new Client({ auth: process.env.NOTION_API_KEY });

    // const page = await notion.pages.retrieve({ slug: slug });
    const search = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
      filter: {
        property: 'Slug',
        rich_text: {
          equals: slug
        }
      },
    });
    const page = search.results[0];
    const blocks = await notion.blocks.children.list({ block_id: page.id });
    const post = {};
    post.title = page.properties.Name.title[0].plain_text;
    post.author = page.properties.Assign.people[0].name;
    post.publishedOn = page.properties["Date Created"].date.start;
    post.content = blocks.results;

    // Images uploaded by a user will expire in 1 hour. Move them to a local folder and serve them from there.
    const images = blocks.results.filter(block => block.type === 'image');
    images.forEach((image) => {
      if(image.image.type === 'file') {
        const re = /(?<=secure.notion-static.com\/)(.*)(?=\?X-Amz-Algorithm)/gm;
        const name = image.image.file.url.match(re)[0];
        const imgName = name.split('/')[1];
        const dir = `./public/images/blog/posts/${slug}`;
        const path = `${dir}/${imgName}`;
        try {
          if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir)
          }
          if (!fs.existsSync(path)) {
            downloadImage(image.image.file.url, path)
          }
        } catch(err) {
          console.error(err)
        }
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


    return post;

});

