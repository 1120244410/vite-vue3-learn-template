<template>
  <el-container class="entrance-container">
    <el-aside :width="200" class="aside">
      <Logo />
      <Menu />
    </el-aside>
    <el-container>
      <el-header><Header :title="$route.meta.title"/></el-header>
      <el-main><Main /></el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import Logo from '@/components/layout/Logo.vue';
import Menu from '@/components/layout/Menu.vue';
import Header from '@/components/layout/Header.vue';
import Main from '@/pages/Main.vue';
</script>

<style scopde>
.entrance-container {
  height: 100%;
}
.aside {
  border-right: 1px solid #eaeaea;
}
</style>
