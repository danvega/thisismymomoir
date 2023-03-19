import { Client } from '@notionhq/client'

export default defineEventHandler(async (event) => {
    const id = event.context.params.id;
    const notion = new Client({ auth: process.env.NOTION_API_KEY });
    const blockList = await notion.blocks.children.list({block_id: id});
    return blockList.results;
});

