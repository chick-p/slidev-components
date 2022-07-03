<script setup lang="ts">
import { AdmonitionType } from "./../types";
const props = defineProps<{
  type: AdmonitionType;
}>();
const { type = "info" } = props;
</script>
<template>
  <div class="w-4 h-4 admotion--label--icon inline-block">
    <akar-icons-info-fill v-show="type === 'info'" />
    <akar-icons-triangle-alert-fill v-show="type === 'warning'" />
    <akar-icons-light-bulb v-show="type === 'hint'" />
  </div>
</template>

<style scoped>
.admotion svg {
  @apply fill-white;
  @apply align-middle;
  @apply translate-y-1;
}
</style>
