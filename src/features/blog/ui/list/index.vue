<template>
  <div :class="styles.container">
    <!-- <BlogCard v-for="post of 3" :key="post.id" v-bind="post" /> -->
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { BlogCard } from '../blog-card';

import { useBlogStore } from 'features/blog/model';

import styles from './styles.module.css';

</script>
