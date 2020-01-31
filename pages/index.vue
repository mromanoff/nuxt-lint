<template>
  <div class="container">
    <div>
      @mdi-js

      <m-icon3 name="mdiAccount" />

      <p>&nbsp;</p>

      @mdi-svg
      <m-icon2 name="account-alert" />
      <m-icon2 name="weather-sunny" />
      <m-icon2 name="weather-partly-cloudy" />
      <m-icon2 name="access-point-network" />

      <p>&nbsp;</p>

      <logo
        alt4="tst4"
        :class="true"
        alt3="tst3"
        alt2="tst2"
        alt="test"
        @click="true"
      />
      <h1 class="title">
        nuxt-eslint
        {{ "test" }}
      </h1>
      <h2 class="subtitle">
        My fantastic Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import MIcon2 from '~/components/MIcon2.vue';
import MIcon3 from '~/components/MIcon3.vue';
import Logo from '~/components/Logo.vue';

export default {
  components: {
    Logo,
    MIcon2,
    MIcon3,
  },

  mounted() {
    console.log('mounted');
  },

  methods: {
    test: () => {
      console.log(123);
    },
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    "Quicksand",
    "Source Sans Pro",
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    "Helvetica Neue",
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
