# This is my Momoir

This is the personal blog of Jen Vega where she documents her journey as a Mom of 2 princesses. This repo
is a document of how to build a blog like this using Nuxt + Notion. 

## Getting Started 

This section will walk you through what you need to get the project up and running. 

### Requirements

- Nuxt 3
- Notion API (version )
- TypeScript
- Tailwind CSS
- Node v16+

### Notion 

The first thing you will need to run this project is a Notion database. I setup a sample database that you can duplicate
into your own workspace by clicking the link below. 

https://www.notion.so/danvega/d94845383b2843d99c305a9fd2d12de2?v=8ebd7f0721ad4cb9b8c760d1da6f1732&pvs=4

When you have this database in your workspace you will need to signup for an [API key](https://developers.notion.com/) 
with Notion. Once you have an integration created you will need to add that integration to the database that you setup. Finally
you will need to create a `.env` in the root of your project with the following 2 properties: 

```properties
NOTION_API_KEY=YOUR_SECRET_KEY
NOTION_DATABASE_ID=YOUR_DATABASE_ID
```

## Help

I am just getting started with the documentation for this and open sourcing the code. If you have any questions or
run into any issues please let me know. 