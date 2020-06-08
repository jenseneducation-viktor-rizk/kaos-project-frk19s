<template>
  <div>
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
  </div>
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
  }
};
</script>

<style scoped>
.container {
  background-color: #19162e;
  display: flex;
  justify-content: center;
  align-items: center;
}

h4 {
  color: #f56b9a;
  font-weight: bold;
  align-self: flex-start;
}
ul {
  width: 100%;
  list-style-type: none;
}

li {
  color: #fff;
  border: 5px solid red;
  /* width: 100%; */
}
</style>>
