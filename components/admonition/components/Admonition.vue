<!-- eslint-disable vue/multi-word-component-names  -->
<script setup lang="ts">
import { computed } from "vue";
import { AdmonitionType } from "./../types";
const props = defineProps<{
  type: AdmonitionType;
}>();

type Label = {
  [key in AdmonitionType]: {
    color: string;
    title: string;
  };
};

const { type = "info" } = props;
const label: Label = {
  info: {
    color: "#0f74dd",
    title: "Info",
  },
  hint: {
    color: "#399e7a",
    title: "Hint",
  },
  warning: {
    color: "#f6b100",
    title: "Warning",
  },
};
const color = computed(() => label[type].color);
const title = computed(() => label[type].title);
</script>

<template>
  <div
    class="block border-solid border-2 rounded-md break-words text-left p-4 text-sm admonition"
  >
    <div class="mb-2 admonition--label">
      <AdmonitionIcon :type="type" />
      <span class="ml-2 font-bold admonition--label--text">{{ title }}</span>
    </div>
    <div class="admonition--content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.admonition {
  border-color: v-bind(color);
}
.admonition--label {
  color: v-bind(color);
}
</style>
