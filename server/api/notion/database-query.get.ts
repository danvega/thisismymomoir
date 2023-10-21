import {Client, isFullPage, isFullPageOrDatabase} from '@notionhq/client'
import {
    PageObjectResponse,
    QueryDatabaseResponse,
    RichTextItemResponse
} from "@notionhq/client/build/src/api-endpoints";

export default defineEventHandler(async () => {
    const notion : Client = new Client({auth: process.env.NOTION_API_KEY});
    const database : QueryDatabaseResponse = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID as string,
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

    const posts : Post[] = database.results
        .filter(isPageObjectResponse)
        .map( (response) => ({
            id: response.id,
            title: (response.properties.Name as any)["title"][0].plain_text,
            slug: (response.properties.Slug as any)["rich_text"][0].plain_text,
            cover: (response.properties.Image as any)["files"][0]?.file.url
        }));

    return posts;
});

function isPageObjectResponse(response: any): response is PageObjectResponse {
    return !!response.properties;
}
