<template>
  <div class="events">
    <h1> Events </h1>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
<EventDetails v-for="event in events" :event="event" :key="event.id"/>
  </div>
</template>

<script>
// @ is an alias to /src
import EventDetails from '@/components/EventDetails.vue';
import { mapActions } from "vuex"

export default {
  name: 'Events',
  components: {
     EventDetails
  },
  methods: {
    ...mapActions(["getEvents"])
  },
  computed:{
      events(){
          return this.$store.state.events;
      }
  },
  created(){
    this.getEvents()
    
  }
}
</script>

<style lang="scss" scoped>
body, html, :root {
    padding:0;
    margin:0;
}

.events {
    height: 100vh;
}

h1 {
    font-family: Sansita One;
    color: #F56B9A;
    text-align: center;
    padding-top:5%;
}

* {
    background: #231F42;
}
</style>