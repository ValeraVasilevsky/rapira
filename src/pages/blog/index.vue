<template>
  <div :class="styles.container">
    <BlogToolbar />
  </div>
</template>

<script setup lang="ts">
import { BlogToolbar } from "widgets/blog-toolbar";

import styles from "./styles.module.css";
</script>
