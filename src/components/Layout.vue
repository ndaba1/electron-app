<template>
  <div class="flex flex-col">
    <div class="flex">
      <div class="h-screen bg-gray-900 text-white p-4">
        <div v-for="item in sidebarItems" :key="item">
          <div class="my-2 p-2 hover:bg-gray-500 rounded-md cursor-pointer">
            {{ item }}
          </div>
        </div>
      </div>
      <div class="h-screen flex-1 flex-shrink bg-gray-800">
        <slot name="body"> </slot>
      </div>
    </div>
    <div
      class="flex h-6 w-screen absolute bottom-0 bg-gray-700 text-white"
    ></div>
  </div>
</template>

<style scoped></style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Layout",
  data() {
    return {
      sidebarItems: ["Home", "Workflows", "Marketplace", "Github", "Settings"],
    };
  },
});
</script>
