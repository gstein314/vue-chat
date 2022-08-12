<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ChatComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import ChatComponent from '@/components/ChatComponent.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
    // ChatComponent,
}
}
</script>
