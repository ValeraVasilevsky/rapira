<template>
  <div
    :class="[
      styles.container,
      {
        [styles.selected]: props.isSelected,
        [styles.readonly]: props.readonly,
      },
    ]"
    @click="onClick"
  >
    <span>{{ props.text }}</span>
    <PlusIcon v-if="!props.readonly && !props.isSelected" />
    <CheckIcon v-else-if="props.isSelected && !props.readonly" />
  </div>
</template>

<script setup lang="ts">
import PlusIcon from '../../assets/icons/plus.svg';
import CheckIcon from '../../assets/icons/check.svg';

import styles from './styles.module.css';

type ChipEmits = {
  click: [value: string];
};
interface ChipProps {
  text: string;
  value: string;
  isSelected?: boolean;
  readonly?: boolean;
}

const emits = defineEmits<ChipEmits>();
const props = withDefaults(defineProps<ChipProps>(), {
  isSelected: false,
  readonly: false,
});

const onClick = (): void => {
  emits('click', props.value);
};
</script>
