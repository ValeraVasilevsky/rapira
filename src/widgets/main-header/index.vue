<template>
  <header :class="styles.header">
    <MenuIcon v-if="isMobile" />
    <LogoIcon />

    <Tabs
      v-if="!isMobile"
      v-model="selectedTab"
      :class="styles.tabs"
      :options="TABS"
    />
  </header>
</template>

<script setup lang="ts">
import { computed, ref, unref } from "vue";
import { Tabs, Tab } from "shared/ui";

import MenuIcon from "./menu.svg";
import LogoIcon from "shared/assets/icons/logo.svg";

import { useMedia } from "shared/utils/media";

import styles from "./styles.module.css";

const TABS: Tab[] = [
  {
    title: "Главная",
    value: "main",
  },
  {
    title: "Блог",
    value: "/",
  },
];

const selectedTab = ref<Tab>(TABS[0]);

const isMobile = computed((): boolean => !unref(useMedia("desktop")));
</script>
