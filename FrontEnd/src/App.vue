<template>
  <div id="app">
    <Menu/>
    <router-view id="ruta"></router-view>
    <Footer/>
  </div>
</template>
<script>
import Menu from './components/menu.vue'
import Footer from './components/footer.vue'
export default {
  name: 'App',
  components: {
    Menu,
    Footer
  },   
}

</script>