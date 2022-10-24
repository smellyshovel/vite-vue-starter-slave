<template>
  <div class="bg-custom-500">Slave Component. Uses the master's tailwindcss config.</div>
  <div>A typed prop (string): {{ greeting }}</div>
</template>

<script setup lang="ts">
  defineProps<{
    greeting: string;
  }>();
</script>
