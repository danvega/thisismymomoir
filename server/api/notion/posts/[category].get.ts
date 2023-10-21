import {Client} from '@notionhq/client'
import {QueryObject} from "ufo";
import {EventHandlerRequest, H3Event} from "h3";
import {PageObjectResponse, QueryDatabaseResponse} from "@notionhq/client/build/src/api-endpoints";

export default defineEventHandler(async (event: H3Event<EventHandlerRequest>) => {
    const query: QueryObject = getQuery(event)
    const page_size: number = parseInt(<string>query.page_size) || 100;
    const category: string = decodeURI(event.context.params?.category as string);
    const notion: Client = new Client({auth: process.env.NOTION_API_KEY});
    const database: QueryDatabaseResponse = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID as string,
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

    const posts : Post[] = database.results
        .filter(isPageObjectResponse)
        .map( (response) => ({
            id: response.id,
            title: (response.properties.Name as any)["title"][0].plain_text,
            slug: (response.properties.Slug as any)["rich_text"][0].plain_text,
            cover: (response.properties.Image as any)["files"][0]?.file.url,
            publishedOn: (response.properties["Date Created"] as any)["date"].start
        }));

    return posts;
});

function isPageObjectResponse(response: any): response is PageObjectResponse {
    return !!response.properties;
}
