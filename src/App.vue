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
      this.loader = true;
      const bukectUrl = 'pepper-images-dev.s3';
      if (!config.url.includes(bukectUrl)) {
        config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
      }

      return config;
    });

    /* Intecerptando o callback das requests */
    axios.interceptors.response.use((response) => {
      this.loader = false;
      return Promise.resolve(response);
    }, (error) => {
      console.log(localStorage.getItem('token'));
      console.log(error);
      if (
        error.response.data.message == "Unauthenticated."
      ) {
        if (localStorage.getItem('token')) {
            localStorage.removeItem('token');
        }
        
        this.loader = false;

        router.replace({
            path: "/login",
            query: { redirect: router.currentRoute.fullPath }
        });
      }
      this.loader = false;
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
    <Loader :show="loader" />
  </section>
  
  <router-view />
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
