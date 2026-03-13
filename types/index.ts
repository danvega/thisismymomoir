export { };

declare global {

  type Post = {
    title: string;
    slug: string;
    author?: string;
    publishedOn?: string;
    category?: string;
    cover?: string;
    excerpt?: string;
  }

  type Category = {
    slug: string;
    name: string;
    cover: string;
    featuredPost: string;
  }

}
