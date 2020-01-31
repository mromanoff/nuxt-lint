<template>
  <component
    :is="name"
    viewBox="0 0 24 24"
    class="MIcon"
  >
  </component>
</template>

<script>
export default {
  name: 'NameIcon',
  components: {
    'access-point-network': () => import(/* webpackChunkName: "icons" */`@mdi/svg/svg/access-point-network.svg`),
    'account-alert': () => import(/* webpackChunkName: "icons" */`@mdi/svg/svg/account-alert.svg`),
    'weather-sunny': () => import(/* webpackChunkName: "icons" */`@mdi/svg/svg/weather-sunny.svg`),
    'weather-partly-cloudy': () => import(/* webpackChunkName: "icons" */`@mdi/svg/svg/weather-partly-cloudy.svg`),
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: '<%readableName%> icon',
    },
    decorative: {
      type: Boolean,
      default: false,
    },
    fillColor: {
      type: String,
      default: 'currentColor',
    },
    size: {
      type: Number,
      default: 24,
    },
  },
};
</script>

<style scoped>
.MIcon {
  height: 24px;
  width: 24px;
}

.MIcon path {
  fill: currentColor;
}
</style>
