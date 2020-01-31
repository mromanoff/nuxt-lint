<template>
  <svg
    class="MIcon"
    viewBox="0 0 24 24"
  >
    <path :d="path" />
  </svg>
</template>

<script>
export default {
  name: 'MIconJS',

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

  computed: {
    path: () => {
      return require('@mdi/js').mdiAccount;
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
