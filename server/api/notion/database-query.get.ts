import {Client} from '@notionhq/client'
import {PageObjectResponse, QueryDatabaseResponse} from "@notionhq/client/build/src/api-endpoints";

export default defineEventHandler(async () => {
    const notion : Client = new Client({auth: process.env.NOTION_API_KEY});
    const database : QueryDatabaseResponse = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID,
        filter: {
            property: 'Status',
            status: {
                equals: 'Done',
            }
        },
        sorts: [
            {
                property: 'Date Created',
                direction: 'descending',
            },
        ],
    });

    const posts: Post[] = [];
    database.results.forEach((response: PageObjectResponse) => {
        const p: Post = {
            id: response.id,
            title: response.properties.Name["title"][0].plain_text,
            slug: response.properties.Slug["rich_text"][0].plain_text,
            cover: response.properties.Image["files"][0]?.file.url
        }
        posts.push(p);
    });

    return posts;
});