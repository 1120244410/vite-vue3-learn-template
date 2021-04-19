<template>
  <div>欢迎使用</div>
</template>

<script>
import { onMounted } from 'vue';
</script>

<script setup>
onMounted(() => {
  const a = import.meta.env;
  console.log(a);
});
</script>

<style></style>
