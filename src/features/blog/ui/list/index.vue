<template>
  <div :class="styles.container">
    <div v-if="posts.length" :class="styles.list">
      <BlogCard v-for="post of posts" :key="post.id" :post="post" />
    </div>
    <Loader v-if="isLoading" />
    <Observer v-if="showObserver" @intersect="onIntersect" />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { computed, onBeforeMount } from 'vue';
import { BlogCard } from '../blog-card';
import { Observer, Loader } from 'shared/ui';

import { useBlogStore } from 'features/blog/model';

import styles from './styles.module.css';

const { posts, isLoading } = storeToRefs(useBlogStore());
const { onIntersect, getPosts } = useBlogStore();

const showObserver = computed((): boolean => !!posts.value.length);

onBeforeMount(async () => {
  await getPosts();
});
</script>
