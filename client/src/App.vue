<template>
  <div id="app">
    <Menu/>
    <BodyIndex/>
  </div>
</template>
<script>
import BodyIndex from './components/bodyIndex.vue'
import Menu from './components/menu.vue'
export default {
  name: 'App',
  components: {
    Menu,
    BodyIndex
  }
}
</script>