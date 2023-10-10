import {
  BlockObjectResponse,
  PageObjectResponse,
  PartialBlockObjectResponse
} from "@notionhq/client/build/src/api-endpoints";

export { };

declare global {

  type Post = {
    id: string;
    title: string;
    slug: string;
    author?: string;
    publishedOn?: string;
    content?: Array<PartialBlockObjectResponse | BlockObjectResponse>
    cover?: string;
    excerpt?: string;
  }

  type Category = {
    slug: string;
    name: string;
    notionCategory: string;
    cover: string;
    featuredPost: string;
  }

}