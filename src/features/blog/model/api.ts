import { api } from 'shared/api';
import type { BlogCard } from './types';

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

  return data;
};
