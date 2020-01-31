<template>
  <icon />
</template>

<script>
import icon from '../node_modules/@mdi/svg/svg/access-point-network.svg';
export default {
  name: 'MIcon',
  components: {
    icon,
  },
};
</script>

<style scoped>
svg {
  width: 24px;
  height: 24px;
}

svg path {
  fill: currentColor;
}
</style>
