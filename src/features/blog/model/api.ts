import { api } from 'shared/api';
import { type BlogCard, type BlogCardResponse } from './types';
import { capitalizeFirstLetter } from 'shared/utils/strings';

export const fetchPosts = async (
  limit: number,
  skip: number,
): Promise<BlogCard[]> => {
  const { data } = await api.get('posts', {
    params: {
      limit,
      skip,
    },
  });

  return (data.posts as BlogCardResponse[]).map((post) => ({
    ...post,
    tags: post.tags.map((tag) => ({
      text: capitalizeFirstLetter(tag),
      value: tag,
    })),
  }));
};
