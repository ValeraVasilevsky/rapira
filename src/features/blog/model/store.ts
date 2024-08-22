import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';

import { fetchPosts } from './api';
import { generateAvatar } from 'shared/utils/avatar';
import { type BlogCard, type FilterListItem } from './types';

export const useBlogStore = defineStore('blog', () => {
  const posts = ref<BlogCard[]>([]);
  const selectedFilters = ref<FilterListItem[]>([]);
  const search = ref<string>('');
  const isLoading = ref<boolean>(false);

  const postsPagination = reactive({
    limit: 10,
    skip: 0,
  });

  const onIntersect = async (): Promise<void> => {
    postsPagination.skip += 10;
    await getPosts();
  };

  const getPosts = async (): Promise<void> => {
    isLoading.value = true;

    try {
      const fetchedPosts = await fetchPosts(
        postsPagination.limit,
        postsPagination.skip,
      );

      const preparedPosts = fetchedPosts.map((post) => ({
        ...post,
        image: generateAvatar(),
        createdAt: new Date(),
      }));

      if (postsPagination.skip === 0) {
        posts.value = preparedPosts;
      } else {
        posts.value = [...posts.value, ...preparedPosts];
      }
    } catch (error) {
      posts.value = [];
      return;
    } finally {
      isLoading.value = false;
    }
  };

  return {
    selectedFilters,
    search,
    posts,
    isLoading,
    postsPagination,
    getPosts,
    onIntersect,
  };
});
