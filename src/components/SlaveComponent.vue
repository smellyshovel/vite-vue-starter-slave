<template>
  <div class="p-4 border">
    <h1>This is the Slave Lib's Component</h1>
    <p class="bg-red-500">It can use Tailwind's default styles (bg-red-500)</p>
    <p class="bg-slave">As well as its `tailwind.config.cjs`'s custom classes (bg-slave)</p>
    <p class="bg-master">
      And even the master's custom classes (bg-master)
      <strong>(only when used as a library in a master-app, not when it's the lib's demo served)</strong>
    </p>
    <div>A typed prop (string): {{ greeting }}</div>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    greeting: string;
  }>();
</script>
