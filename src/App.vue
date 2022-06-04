<template>
  <div id="app">
      <!--<img alt="Vue logo" src="./assets/logo.png"> -->
      <Books />
      <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Books from './components/Books.vue';

import Vue from 'vue'
import Vuikit from 'vuikit'
import VuikitIcons from '@vuikit/icons'
//import { IconCheck, IconClose } from '@vuikit/icons'

import '@vuikit/theme'

Vue.use(Vuikit)
Vue.use(VuikitIcons)

export default {
  name: 'app',
  components: {
    //HelloWorld,
    Books,
  }
}
</script>

<style>


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/*@import "../node_modules/uikit/src/less/uikit.less";*/

</style>
