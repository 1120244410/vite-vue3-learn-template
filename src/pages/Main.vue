<template>
  <el-button @click="handlePlus"> {{ count }}加加 </el-button>
</template>

<script>
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore() // 因为在setup中没有 全局this 的概念，所以需要使用 useStore 来实现类似 this.$store 的操作
    onMounted(() => {
      // onMounted 是vue3的生命周期函数，对标vue2中的 mounted
      console.log(import.meta.env) // import.meta.env 相当于 process.env
    })
    const count = computed(() => store.state.count)
    const handlePlus = () => {
      store.commit('setCount')
    }
    return {
      handlePlus,
      count
    }
  }
}
</script>

<style></style>
