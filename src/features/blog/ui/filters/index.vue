<template>
  <div :class="styles.container">
    <span v-if="selectedFilters.length" :class="styles.clear" @click="onClear">
      Очистить
    </span>
    <span :class="styles.trigger" @click="onToggle">
      Фильтр
      <ArrowIcon :class="[styles.icon, { [styles.open]: isOpen }]" />
    </span>

    <Teleport v-if="showTeleport" :to="props.teleportTo">
      <FilterList
        ref="filterList"
        v-if="isOpen"
        v-model="selectedFilters"
        :options="props.options"
        @update:model-value="onSelect"
      />
    </Teleport>

    <FilterList
      ref="filterList"
      v-else-if="!showTeleport && isOpen"
      v-model="selectedFilters"
      :options="props.options"
      @update:model-value="onSelect"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { FilterList } from "./list";
import ArrowIcon from "./arrow-up.svg";

import type { FilterListItem } from "../../model";

import styles from "./styles.module.css";

type BaseFiltersEmits = {
  "update:model-value": [value: boolean];
  "update:selected-filters": [value: FilterListItem[]];
};
interface BaseFiltersProps {
  modelValue: boolean;
  portable?: boolean;
  teleportTo?: string;
  selectedFilters: FilterListItem[];
  options: FilterListItem[];
}

const emits = defineEmits<BaseFiltersEmits>();
const props = withDefaults(defineProps<BaseFiltersProps>(), {
  portable: false,
  teleportTo: "",
});

const isOpen = ref<boolean>(props.modelValue);
const selectedFilters = ref<FilterListItem[]>(props.selectedFilters);
const isMounted = ref<boolean>(false);
const filterList = ref<typeof FilterList>();

const showTeleport = computed(
  (): boolean => props.portable && !!props.teleportTo.length && isMounted.value
);

const onToggle = (): void => {
  isOpen.value = !isOpen.value;
  emits("update:model-value", isOpen.value);
};
const onSelect = (): void => {
  emits("update:selected-filters", selectedFilters.value);
};
const onClear = (): void => {
  if (!filterList.value) return;
  filterList.value.clearModelValue();
  onSelect();
};

onMounted(() => {
  isMounted.value = true;
});
</script>
