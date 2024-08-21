<template>
  <div :class="styles.container">
    <div :class="styles.wrapper">
      <p :class="styles.title">Блог</p>

      <BaseInput
        v-model="search"
        placeholder="Поиск"
        clearable
        :class="styles.input"
      >
        <template #right-icon>
          <SearchIcon />
        </template>
      </BaseInput>

      <BlogFilters
        v-model="isOpen"
        v-model:selected-filters="selectedFilters"
        teleportTo="#filter-list"
        portable
        :class="styles.filters"
        :options="FILTERS_OPTIONS"
      />
    </div>

    <div id="filter-list" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { BaseInput } from "shared/ui";
import { BlogFilters, type FilterListItem } from "features/blog";

import SearchIcon from "shared/assets/icons/magnifier.svg";

import styles from "./styles.module.css";

// вообще, фильтры по-хорошему надо подтягивать с бэка, но я напишу их константой
const FILTERS_OPTIONS = ref<FilterListItem[]>([
  {
    text: "Город",
    value: "city",
  },
  {
    text: "Природа",
    value: "nature",
  },
  {
    text: "Люди",
    value: "people",
  },
  {
    text: "Животные",
    value: "animals",
  },
  {
    text: "Еда",
    value: "food",
  },
  {
    text: "Напитки",
    value: "drinks",
  },
  {
    text: "Архитектура",
    value: "architecture",
  },
  {
    text: "Искусство",
    value: "art",
  },
]);

const search = ref<string>("");
const isOpen = ref<boolean>(false);
const selectedFilters = ref<FilterListItem[]>([]);
</script>
