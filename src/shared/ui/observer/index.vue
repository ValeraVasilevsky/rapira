<template>
  <div ref="observable" :class="styles.observer" />
</template>

<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core';
import { ref } from 'vue';

import styles from './styles.module.css';

type ObserverEmits = {
  intersect: [value: void];
};

const emits = defineEmits<ObserverEmits>();
const observable = ref<HTMLDivElement>();

useIntersectionObserver(observable, ([{ isIntersecting }]) => {
  if (!isIntersecting) return;
  emits('intersect');
});
</script>
