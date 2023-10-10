import { Client } from '@notionhq/client'
import {EventHandlerRequest, H3Event} from "h3";
import {
    DatabaseObjectResponse, ListBlockChildrenResponse, PageObjectResponse, PartialDatabaseObjectResponse,
    PartialPageObjectResponse,
    QueryDatabaseResponse
} from "@notionhq/client/build/src/api-endpoints";

export default defineEventHandler(async (event: H3Event<EventHandlerRequest>) => {
    const slug: string = event.context.params.slug;
    const notion: Client = new Client({ auth: process.env.NOTION_API_KEY });

    const queryDatabaseResponse: QueryDatabaseResponse = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
      filter: {
        property: 'Slug',
        rich_text: {
          equals: slug
        }
      },
    });

    const results : Array<PageObjectResponse | PartialPageObjectResponse | PartialDatabaseObjectResponse | DatabaseObjectResponse> = queryDatabaseResponse.results;
    if(results.length != 1) {
        throw createError({
            statusCode: 404,
            statusMessage: `Post Not Found with slug ${slug}`
        })
    }

    const page: PageObjectResponse = <PageObjectResponse>results.at(0);
    const blocks: ListBlockChildrenResponse = await notion.blocks.children.list({ block_id: page.id });
    const post: Post = {
        id: page.id,
        title: page.properties.Name["title"][0].plain_text,
        author: page.properties.Assign["people"][0].name,
        publishedOn: page.properties["Date Created"]["date"].start,
        content: blocks.results,
        slug: slug
    }
    return post;

});

