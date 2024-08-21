<template>
  <div
    :class="[styles.container, { [styles.selected]: props.isSelected }]"
    @click="onClick"
  >
    <span>{{ props.text }}</span>
    <PlusIcon v-if="!props.isSelected" />
    <CheckIcon v-else />
  </div>
</template>

<script setup lang="ts">
import PlusIcon from "../../assets/icons/plus.svg";
import CheckIcon from "../../assets/icons/check.svg";

import styles from "./styles.module.css";

type ChipEmits = {
  click: [value: string];
};
interface ChipProps {
  text: string;
  value: string;
  isSelected: boolean;
}

const emits = defineEmits<ChipEmits>();
const props = defineProps<ChipProps>();

const onClick = (): void => {
  emits("click", props.value);
};
</script>
