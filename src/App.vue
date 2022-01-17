<template>
  <Layout class="drag">
    <template v-slot:body>
      <router-view />
    </template>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "@/components/Layout.vue";

export default defineComponent({
  name: "Main",
  components: {
    Layout,
  },
});
</script>

<style>
.drag {
  -webkit-app-region: drag;
}
</style>
