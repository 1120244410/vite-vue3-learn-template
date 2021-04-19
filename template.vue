<template>
  <p>{{ msg }}</p>
  <button @click="state.count++">count is: {{ state.count }}</button>
  <p>{{ people.name }}</p>
</template>

<script setup>
// <script setup>中 setup 属性仍在试验阶段
// 具体了解去往：https://github.com/vuejs/rfcs/blob/sfc-improvements/active-rfcs/0000-sfc-script-setup.md
import { defineProps, reactive } from 'vue';
export default {
defineProps({
  msg: String,
});

}
const state = reactive({ count: 0 });
const people = {
    gender: 'male',
    name: 'hjj'
}
</script>

<style></style>
