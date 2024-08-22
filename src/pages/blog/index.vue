<template>
  <div :class="styles.container">
    <BlogToolbar :class="styles.toolbar" />

    <div :class="styles.wrapper">
      <BlogList />
    </div>
  </div>
</template>

<script setup lang="ts">
import { BlogToolbar } from 'widgets/blog-toolbar';
import { BlogList } from 'features/blog';

import styles from './styles.module.css';
</script>
