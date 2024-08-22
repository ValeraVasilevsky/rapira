<template>
  <div :class="styles.card">{{ props.title }}</div>
</template>

<script setup lang="ts">
import { type BlogCard } from '../../model';

import styles from './styles.module.css';

const props = defineProps<BlogCard>();
</script>
