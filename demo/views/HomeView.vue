<template>
  <div>Here's the slave-component, but imported from the /dist folder:</div>
  <slave-component v-bind="slaveComponentProps" />
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import { SlaveComponent } from "vite-vue-starter-slave";

  // this is how you can extract the package's components' props
  const slaveComponentProps = ref<InstanceType<typeof SlaveComponent>["$props"]>({
    greeting: "test",
  });
</script>
