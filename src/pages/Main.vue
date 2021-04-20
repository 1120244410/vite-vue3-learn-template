<template>
  <div>欢迎使用</div>
</template>

<script>
import { onMounted } from 'vue';
export default {
  setup() {
    onMounted(() => {
      // import.meta.env 相当于 process.env
      console.log(import.meta.env);
    });
    return {};
  },
};
</script>

<style></style>
