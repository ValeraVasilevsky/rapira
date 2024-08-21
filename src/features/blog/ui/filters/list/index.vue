<template>
  <div :class="styles.container">
    <Chip
      v-for="chip of props.options"
      :key="chip.value"
      :text="chip.text"
      :value="chip.value"
      :is-selected="checkIsSelected(chip)"
      @click="updateSelectedList(chip)"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Chip } from "shared/ui";

import type { FilterListItem } from "../../../model";

import styles from "./styles.module.css";

type FilterListEmits = {
  "update:model-value": [value: FilterListItem[]];
};
interface FilterListProps {
  options: FilterListItem[];
  modelValue: FilterListItem[];
}

const emits = defineEmits<FilterListEmits>();
const props = defineProps<FilterListProps>();

const modelValue = ref<FilterListItem[]>(props.modelValue);

const checkIsSelected = (item: FilterListItem): boolean => {
  return modelValue.value.map(({ value }) => value).includes(item.value);
};
const updateSelectedList = (item: FilterListItem): void => {
  const isItemExist: boolean = modelValue.value
    .map(({ value }) => value)
    .includes(item.value);

  if (!isItemExist) modelValue.value.push(item);
  else {
    const itemIndex = modelValue.value.findIndex(
      ({ value }) => value === item.value
    );

    modelValue.value.splice(itemIndex, 1);
  }

  emits("update:model-value", modelValue.value);
};
const clearModelValue = (): void => {
  modelValue.value = [];
  emits("update:model-value", modelValue.value);
};

defineExpose({ clearModelValue });
</script>
