<template>
  <div class="events">
    <h1> Events </h1>
<EventDetails 
v-for="event in events" :event="event" :key="event.id"
:location='event.location'
:price="event.price"
:artist="event.name"
:dateDay="event.date.day"
:dateMonth="event.date.month"
:timeStart="event.date.time.start"
:timeEnd="event.date.time.end"
/>
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
        console.log(this.$store.state.events)
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
    padding-top:5%;
    max-width: 475px;
    text-align: center;
}

body {
  background:#231F42;

}

* {
    background: #231F42;
}
</style>