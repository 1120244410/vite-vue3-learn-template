<script>
// 函数式组件
import { h } from 'vue';
const Logo = (props, ctx) => {
  return h('div', { ...ctx.$attrs, class: 'logo' }, ['vue3+Vitejs项目']);
};
export default Logo;
</script>

<style scoped>
.logo {
  height: 60px;
  text-align: center;
  line-height: 60px;
}
</style>
