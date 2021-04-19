<template>
  <el-container class="entrance-container">
    <el-aside width="200px" class="aside">
      <Logo />
      <Menu />
    </el-aside>
    <el-container>
      <el-header><Header :title="$route.meta.title"/></el-header>
      <el-main><Main /></el-main>
    </el-container>
  </el-container>
</template>

<script>
import Logo from '@/components/layout/Logo.vue';
import Menu from '@/components/layout/Menu.vue';
import Header from '@/components/layout/Header.vue';
import Main from '@/pages/Main.vue';
export default {
  components: {
    Logo,
    Menu,
    Header,
    Main,
  },
};
</script>

<style scoped>
.entrance-container {
  height: 100%;
}
.aside {
  border-right: 1px solid #eaeaea;
}
</style>
