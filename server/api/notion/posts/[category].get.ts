import {Client} from '@notionhq/client'
import {QueryObject} from "ufo";
import {EventHandlerRequest, H3Event} from "h3";
import {PageObjectResponse, QueryDatabaseResponse} from "@notionhq/client/build/src/api-endpoints";
import page from "nuxt/dist/pages/runtime/page";

export default defineEventHandler(async (event: H3Event<EventHandlerRequest>) => {
    const query: QueryObject = getQuery(event)
    const page_size: number = parseInt(<string>query.page_size) || 100;

    console.log(query);
    console.log(page_size)

    const category: string = decodeURI(event.context.params.category);
    const notion: Client = new Client({auth: process.env.NOTION_API_KEY});
    const database: QueryDatabaseResponse = await notion.databases.query({
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

    const posts: Post[] = [];
    database.results.forEach((response: PageObjectResponse) => {
        const post: Post = {
            id: response.id,
            title: response.properties.Name["title"][0].plain_text,
            slug: response.properties.Slug["rich_text"][0].plain_text,
            cover: response.properties.Image["files"][0]?.file.url,
            publishedOn: response.properties["Date Created"]["date"].start
        }
        posts.push(post);
    });

    return posts;

});


