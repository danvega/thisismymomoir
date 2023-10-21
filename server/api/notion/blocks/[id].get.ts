import { Client } from '@notionhq/client'
import {EventHandlerRequest, H3Event} from "h3";
import {ListBlockChildrenResponse} from "@notionhq/client/build/src/api-endpoints";

export default defineEventHandler(async (event: H3Event<EventHandlerRequest>) => {
    const id: string = event.context.params?.id as string;
    const notion: Client = new Client({ auth: process.env.NOTION_API_KEY });
    const blockList: ListBlockChildrenResponse = await notion.blocks.children.list({block_id: id});
    return blockList.results;
});

