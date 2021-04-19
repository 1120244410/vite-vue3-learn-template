<script>
// 函数式组件
import { h } from 'vue';
const Header = (props, ctx) => {
  return h('div', { ...ctx.$attrs, class: 'header-title' }, [props.title]);
};
Header.props = {
  title: {
    type: String,
    default: '',
  },
};
export default Header;
</script>

<style scopde>
.header-title {
  line-height: 60px;
}
</style>
