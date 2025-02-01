import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { BASIC_INFO } from '../consts';
import { getDescription } from '../utils/getDescription.js';

export async function GET() {
  const blog = await getCollection('posts');
  blog.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return rss({
    title: BASIC_INFO.SITE_TITLE,
    description: BASIC_INFO.SITE_DESC,
    site: BASIC_INFO.SITE_URL,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: getDescription(post, 100),
      link: `/blog/${post.id}/`,
    })),
  });
}