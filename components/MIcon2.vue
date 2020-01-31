<template>
  <component
    :is="name"
    view-box="0 0 24 24"
    class="MIcon"
  />
</template>

<script>
export default {
  name: 'NameIcon',
  components: {
    'access-point-network': () => import(/* webpackChunkName: "icons" */'@mdi/svg/svg/access-point-network.svg'),
    'account-alert': () => import(/* webpackChunkName: "icons" */'@mdi/svg/svg/account-alert.svg'),
    'weather-sunny': () => import(/* webpackChunkName: "icons" */'@mdi/svg/svg/weather-sunny.svg'),
    'weather-partly-cloudy': () => import(/* webpackChunkName: "icons" */'@mdi/svg/svg/weather-partly-cloudy.svg'),
    'chevron-left': () => import(/* webpackChunkName: "icons" */'@mdi/svg/svg/chevron-left.svg'),
    'chevron-right': () => import(/* webpackChunkName: "icons" */'@mdi/svg/svg/chevron-right.svg'),
    'weather-pouring': () => import(/* webpackChunkName: "icons" */'@mdi/svg/svg/weather-pouring.svg'),
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
