<template>
  <div
    class="drag flex h-8 w-screen absolute top-0 bg-gray-700 text-white p-2 items-center select-none"
  >
    <div>GearUp</div>
  </div>
  <div class="no-drag flex flex-col select-none">
    <div class="flex">
      <div
        class="sidebar h-screen w-1/4 bg-gray-900 text-gray-200 p-3 overflow-y-scroll pt-10"
      >
        <div v-for="item in sidebarItems" :key="item.title" class="">
          <div
            class="my-2 p-2 hover:bg-gray-500 rounded-md cursor-pointer text-lg"
          >
            <div class="flex items-center">
              <img :src="item.logo" :alt="item.title" class="mr-3 w-6" />
              {{ item.title }}
            </div>
          </div>
        </div>
      </div>
      <div
        class="h-screen flex-1 bg-gray-900 overflow-y-hidden border-l-2 border-gray-700"
        :class="
          tryResize
            ? 'border-blue-700 border-l-4 cursor-move'
            : 'border-gray-700 '
        "
        @mousemove="checkResize"
        @="resizeMainBody"
      >
        <div class="pt-8">
          <template class="flex relative">
            <div v-for="tab in tabs" :key="tab.heading" class="flex">
              <div
                class="tab p-3 pr-7 w-28 cursor-pointer flex items-center relative"
                :class="
                  tab.active
                    ? 'bg-gray-800 text-gray-100 '
                    : 'text-gray-500 border-r border-gray-800'
                "
              >
                <div class="flex overflow-hidden">
                  {{ tab.heading }}
                  <h1
                    class="absolute right-2 px-1 rounded-sm hover:bg-gray-600"
                  >
                    X
                  </h1>
                </div>
              </div>
            </div>
            <div
              class="absolute right-0 p-2 text-white flex bg-gray-900 border-l border-gray-700 shadow-md z-20"
            >
              <h1 class="mx-2 px-1 rounded-sm hover:bg-gray-600">X</h1>
              <h1 class="mx-2 px-1 rounded-sm hover:bg-gray-600">X</h1>
              <h1 class="mx-2 px-1 rounded-sm hover:bg-gray-600">X</h1>
            </div>
          </template>
          <div class="h-screen bg-gray-800">
            <slot name="body"> </slot>
          </div>
        </div>
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
      sidebarItems: [
        {
          title: "Home",
          logo: require("@/assets/home.png"),
        },
        {
          title: "Workflows",
          logo: require("@/assets/workflows.png"),
        },
        {
          title: "Marketplace",
          logo: require("@/assets/marketplace.png"),
        },
        {
          title: "Github",
          logo: require("@/assets/github.png"),
        },
        {
          title: "Configurations",
          logo: require("@/assets/configurations.png"),
        },
      ],
      tabs: [
        {
          heading: "Tab One...............",
          ctx: "Home",
          active: false,
        },
        {
          heading: "Tab Two",
          ctx: "Home",
          active: true,
        },
        {
          heading: "Tab Three",
          ctx: "Home",
          active: false,
        },
      ],
      tryResize: false,
    };
  },
  methods: {
    checkResize(event: MouseEvent) {
      if (event.offsetX <= 0) {
        this.tryResize = true;
      } else {
        this.tryResize = false;
      }
    },
    resizeMainBody(event: Event) {
      console.log(event);
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

.tab {
  max-height: 40px;
  /* max-width: 90px; */
  overflow: hidden;
  white-space: nowrap;
}
</style>
