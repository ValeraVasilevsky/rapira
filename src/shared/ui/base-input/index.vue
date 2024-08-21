<template>
  <div :class="styles.container">
    <slot v-if="$slots['right-icon']" name="right-icon" />
    <input
      v-model="inputValue"
      v-bind="$attrs"
      :placeholder="props.placeholder"
      :class="styles.input"
      @input="onInput"
    />
    <CrossIcon v-if="showCross" @click="onClear" />
    <slot v-if="$slots['left-icon']" name="left-icon" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

import CrossIcon from "shared/assets/icons/cross.svg";

import styles from "./styles.module.css";

type BaseInputEmits = {
  "update:model-value": [value: string];
};
interface BaseInputProps {
  modelValue: string;
  placeholder: string;
  clearable?: boolean;
}

defineSlots<{
  default(props: object): never;
  "right-icon"(props: object): never;
  "left-icon"(props: object): never;
}>();
const emits = defineEmits<BaseInputEmits>();
const props = withDefaults(defineProps<BaseInputProps>(), {
  clearable: false,
});
const inputValue = ref<string>(props.modelValue);

const showCross = computed(
  (): boolean => !!inputValue.value.length && props.clearable
);

const onInput = (): void => {
  emits("update:model-value", inputValue.value);
};
const onClear = (): void => {
  inputValue.value = "";
  onInput();
};
</script>
