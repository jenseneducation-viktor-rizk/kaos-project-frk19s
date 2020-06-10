<template>
    <section class="container">
      <ul id="name">
        <h4>NAMN</h4>
        <li
          v-for="event in eventList"
          v-bind:key="event.id"
          style="font-weight:bold;"
        >{{event.name}}</li>
      </ul>
      <ul id="var">
        <h4>VAR</h4>
        <li v-for="event in eventList" v-bind:key="event.id">{{event.location}}</li>
      </ul>
      <ul id="platser">
        <h4>ANTAL PLATSER</h4>
        <li v-for="event in eventList" v-bind:key="event.id">{{event.tickets.total}}</li>
      </ul>
      <ul id="såld">
        <h4>SÅLDA BILJETTER</h4>
        <li v-for="event in eventList" v-bind:key="event.id">{{event.tickets.sold}}</li>
      </ul>
    </section>
</template>

<script>
export default {
  name: "Events",
  mounted() {
    this.$store.dispatch("getEvents");
  },
  computed: {
    eventList() {
      return this.$store.state.events;
    }
  },
  data() {
    return {
      // eventList: [
      //   {
      //     id: 0,
      //     namn: "Lasse Stefanz",
      //     var: "Kjell Härnqvist salen",
      //     platser: 300,
      //     såld: 125
      //   },
      //   {
      //     id: 1,
      //     namn: "Pelle Trubadur",
      //     var: "Pubelipubben",
      //     platser: 100,
      //     såld: 19
      //   },
      //   {
      //     id: 2,
      //     namn: "Kajsas Kör",
      //     var: "Götaplatsen",
      //     platser: 10000,
      //     såld: 3454
      //   },
      //   {
      //     id: 3,
      //     namn: "Klubb Untz",
      //     var: "Din favoritkällare",
      //     platser: 120,
      //     såld: 77
      //   }
      // ]
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/_variables.scss";

.container {
  background-color: #19162e;
  display: flex;
  justify-content: flex-start;
  text-align: left;
  margin-right: 24px;
  width: 60%;
}

h4 {
  color: $pink;
  font-weight: bold;
  align-self: flex-start;
  margin: 0 0 20px;
  font-size: 13px;
}

ul {
  width: 100%;
  list-style-type: none;
  padding-inline-start: 16px;
  padding-inline-end: 16px;
}

li {
  color: #fff;
  margin-bottom: 20px;
  /* width: 100%; */
}

#name {
  width: 34%;

    li{
   font-size: 20px;
   padding: 2px 0;
  }
}

#var,
#platser,
#såld {
  width: 22%;

  li{
    font-size: 13px;
    padding: 6.5px 0;
  }
}
</style>
