<template>
  <div
    class="drag flex h-8 w-screen absolute top-0 bg-gray-700 text-white p-2 items-center"
  >
    <div>GearUp</div>
  </div>
  <div class="no-drag flex flex-col">
    <div class="flex">
      <div
        class="sidebar h-screen w-1/4 bg-gray-900 text-white p-4 overflow-y-scroll pt-10"
      >
        <div v-for="item in sidebarItems" :key="item" class="">
          <div
            class="my-2 p-2 hover:bg-gray-500 rounded-md cursor-pointer text-lg"
          >
            {{ item }}
          </div>
        </div>
      </div>
      <div class="h-screen flex-1 flex-shrink bg-gray-800">
        <slot name="body"> </slot>
      </div>
    </div>
    <div
      class="flex h-5 w-screen absolute bottom-0 bg-blue-500 text-white"
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
  methods: {
    checkResize() {
      console.log("hoverring");
    },
  },
});
</script>

<style scoped>
.drag {
  -webkit-app-region: drag;
}

.no-drag {
  -webkit-app-region: no-drag;
}

.sidebar::-webkit-scrollbar {
  width: 0.6rem;
}

.sidebar::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
}

.sidebar::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 1rem;
}
</style>
