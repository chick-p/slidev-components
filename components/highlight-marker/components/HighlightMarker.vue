<script setup lang="ts">
const props = defineProps<{
  color: string;
}>();
const { color = "#a8ebff" } = props;
</script>

<template>
  <span class="font-bold to-transparent highlight-marker--color"><slot /></span>
</template>

<style scoped>
.highlight-marker--color {
  background: linear-gradient(transparent 50%, v-bind(color) 50%);
}
</style>
