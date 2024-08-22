import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';

import { fetchPosts } from './api'
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

  const onObserve = (): void => {
    postsPagination.skip += 10;
  }

  const getPosts = async (): Promise<void> => {
    isLoading.value = true

    try {
      const fetchedPosts = await fetchPosts(postsPagination.limit, postsPagination.skip);

      if (postsPagination.skip === 0) {
        posts.value = fetchedPosts;
      } else {
        posts.value = [...posts.value, ...fetchedPosts]
      }
    } catch (error) {
      posts.value = [];
      return;
    } finally {
      isLoading.value = false;
    }
  }

  return {
    selectedFilters,
    search,
    getPosts,
    onObserve,
  };
});
