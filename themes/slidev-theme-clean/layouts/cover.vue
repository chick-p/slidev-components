<template>
  <div class="slidev-layout text-center flex h-full cover">
    <div class="my-auto w-full">
      <slot />
    </div>
  </div>
</template>

<style>
.cover h1 {
  @apply text-6xl font-bold;
}
.cover h1 + p {
  @apply text-2xl mt-4;
}
</style>
