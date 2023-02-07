<script>
import router from './router';
import axios from 'axios';
import Loader from '@/components/Loader.vue';

export default {
  data() {
    return {
      loader: false
    }
  },

  created() {
    /* Interceptando as requests */
    axios.interceptors.request.use(async (config) => { 
      const bukectUrl = 'pepper-images-dev.s3';

      this.loader = true;

      if (!config.url.includes(bukectUrl)) {
        config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
      }

      return config;
    });

    /* Intecerptando o callback das requests */
    axios.interceptors.response.use((response) => {
      setTimeout(() => {
        this.loader = false;
      }, 1000);
      return Promise.resolve(response);
    }, function (error) {
      console.log(localStorage.getItem('token'));
      console.log(error);
      if (
        error.response.data.message == "Unauthenticated." ||
        error.response.status == 500
      ) {
        if (localStorage.getItem('token')) {
            localStorage.removeItem('token');
        }
        router.replace({
            path: "/login",
            query: { redirect: router.currentRoute.fullPath }
        });
      }
      setTimeout(() => {
        this.loader = false;
      }, 1000);
      return console.log(error.response);
    });
  },

  components: {
    Loader
  }
}
</script>

<template>
  <section v-if="loader">
    <Loader />
  </section>
  
  <router-view />
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
