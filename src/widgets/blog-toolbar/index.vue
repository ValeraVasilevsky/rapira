<template>
  <div :class="styles.container">
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
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { BaseInput } from "shared/ui";

import SearchIcon from "shared/assets/icons/magnifier.svg";

import styles from "./styles.module.css";

const search = ref<string>("");
</script>
