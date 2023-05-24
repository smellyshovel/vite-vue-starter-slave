<template>
  <div class="p-4 border">
    <h1>This is the Slave Lib's Component</h1>
    <p class="bg-red-500">It can use Tailwind's default styles (bg-red-500)</p>
    <div>A typed prop (string): {{ greeting }}</div>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    greeting: string;
  }>();
</script>
