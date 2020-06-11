<template>
<main>
  <div class="wrapper" @click="goToBuy(event)">
    <div class="date box">
      <p>{{events.date.day}}</p>
      <p> {{events.date.month}}</p>
    </div>
    <div class="artist-details">
      <h2>{{events.name}}</h2>
      <p class="location">{{events.location}} </p>
      <p class="time"> 
        {{events.date.time.start}} - {{events.date.time.end}}
      </p>
      <p class="price">{{events.price}} sek</p>
    </div>
  </div>
</main>
</template>
<script>

export default {
  name: "EventDetails",
   props:[ 'events'],
   methods:{
  goToBuy(event){
    this.$store.commit('changeEvent',event)
    this.$router.push("/Buy")
  }}
};
</script>

<style lang="scss" scoped>
.wrapper {
  font-family: fira sans;
  color: #fff;
  display: flex;
  flex-direction: row;
  max-width: 475px;
  
  div {
    margin: 10px;
  }
}

.artist-details {
    padding: 2%;
    width: 70%;
    border-bottom: solid 1px rgba(255, 255, 255, 0.3);
}

.box {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 2px #ffF;
    flex-direction: column;    
}

.price {
    color: #37AEAB;
    font-size: 1.2em;
    display: inline;
    margin-left: 80%;
    white-space: nowrap;
}

.time {
    display: inline;
    font-size: 1em;
}

.location {
  font-style: italic;
  font-size: .9em;
  font-weight: normal;
}

 * {
    padding:0;
    margin:0;
    box-sizing:border-box;
}

</style>