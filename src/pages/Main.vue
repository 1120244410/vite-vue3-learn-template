<template>
  <div>欢迎使用</div>
</template>

<script>
import { onMounted } from 'vue';
export default {
  setup() {
    onMounted(() => {
      const a = import.meta.env;
      console.log(a);
    });
    return {};
  },
};
</script>

<style></style>
