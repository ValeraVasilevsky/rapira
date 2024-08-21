<template>
  <div :class="styles.container">
    <span
      v-for="tab of props.options"
      :key="tab.value"
      :class="[styles.tab, { [styles.active]: checkIsActiveTab(tab) }]"
      @click="onTabClick(tab)"
    >
      {{ tab.title }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Tab } from "./types";

import styles from "./styles.module.css";

type TabsEmits = {
  "update:model-value": [value: Tab];
};
interface TabsProps {
  modelValue: Tab;
  options: Tab[];
}

const props = defineProps<TabsProps>();
const emits = defineEmits<TabsEmits>();

const selectedTab = ref<Tab>(props.modelValue);

const checkIsActiveTab = (tab: Tab): boolean =>
  tab.value === selectedTab.value.value;
const onTabClick = (tab: Tab): void => {
  selectedTab.value = tab;
  emits("update:model-value", tab);
};
</script>
