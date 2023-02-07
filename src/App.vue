<script>
import axios from 'axios';

export default {
  created() {
    axios.interceptors.request.use(async (config) => { 
      const bukectUrl = 'pepper-images-dev.s3';
      
      if (!config.url.includes(bukectUrl)) {
        config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
      }
      
      return config;
    });
  },
}
</script>

<template>
  <router-view />
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
