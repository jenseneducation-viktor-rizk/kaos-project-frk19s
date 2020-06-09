<template>
    <section class="container">
      <ul id="name">
        <h4>Namn</h4>
        <li
          v-for="event in eventList"
          v-bind:key="event.id"
          style="font-weight:bold;"
        >{{event.namn}}</li>
      </ul>
      <ul id="var">
        <h4>Var</h4>
        <li v-for="event in eventList" v-bind:key="event.id">{{event.var}}</li>
      </ul>
      <ul id="platser">
        <h4>Antal Platser</h4>
        <li v-for="event in eventList" v-bind:key="event.id">{{event.platser}}</li>
      </ul>
      <ul id="såld">
        <h4>Sålda Biljetter</h4>
        <li v-for="event in eventList" v-bind:key="event.id">{{event.såld}}</li>
      </ul>
    </section>
</template>

<script>
export default {
  name: "Events",
  data() {
    return {
      eventList: [
        {
          id: 0,
          namn: "Lasse Stefanz",
          var: "Kjell Härnqvist salen",
          platser: 300,
          såld: 125
        },
        {
          id: 1,
          namn: "Pelle Trubadur",
          var: "Pubelipubben",
          platser: 100,
          såld: 19
        },
        {
          id: 2,
          namn: "Kajsas Kör",
          var: "Götaplatsen",
          platser: 10000,
          såld: 3454
        },
        {
          id: 3,
          namn: "Klubb Untz",
          var: "Din favoritkällare",
          platser: 120,
          såld: 77
        }
      ]
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/_variables.scss";

.container {
  background-color: #19162e;
  display: flex;
  justify-content: center;
  text-align: left;
  margin-right: 24px;
  width: 60%;
}

h4 {
  color: $pink;
  font-weight: bold;
  align-self: flex-start;
  margin: 0 0 20px;
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
  width: 30%;
}

#var,
#platser,
#såld {
  width: auto;
}
</style>
