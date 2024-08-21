<template>
  <MainHeader />

  <div :class="styles.container">
    <RouterView v-slot="{ Component }">
      <Suspense>
        <template #default>
          <component :is="Component" />
        </template>
      </Suspense>
    </RouterView>
  </div>
</template>

<script setup lang="ts">
import { MainHeader } from "widgets/main-header";

import styles from "./styles.module.css";
</script>
