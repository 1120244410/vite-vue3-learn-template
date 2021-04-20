<template>
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    @select="handleSelect"
    :collapse="isCollapse"
  >
    <el-menu-item index="/" route="/">
      <i class="el-icon-menu"></i>
      <template #title>首页</template>
    </el-menu-item>
    <el-menu-item index="/options" route="/options">
      <i class="el-icon-menu"></i>
      <template #title>设置</template>
    </el-menu-item>
  </el-menu>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
// ref接受一个参数,一般是基本类型值（String 、Nmuber 、Boolean 等）或单值对象
// 如果传入的参数是一个对象，将会调用 reactive 方法进行深层响应转换（此时访问ref中的对象会返回Proxy对象，说明是通过reactive创建的）；引用类型值（Object 、Array）使用reactive

export default {
  setup(props, ctx) {
    const router = useRouter();
    const isCollapse = ref(false);
    const handleSelect = key => {
      console.log(key);
      router.push(key);
      console.log(props, ctx);
    };
    return {
      isCollapse,
      handleSelect,
    };
  },
};
</script>

<style scoped>
.el-menu {
  border: 0;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
