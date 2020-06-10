<template>
<main>
  <div class="wrapper">
    <div class="date box">
      <p>{{date.day}}</p>
      <p> {{date.month}} </p>
    </div>
    <div class="artist-details">
      <h2>{{artist}}</h2>
      <p class="location">{{location}}</p>
      <p class="time">
        22 - 08
      </p>
      <p class="price">{{price}}</p>
    </div>
  </div>
</main>
</template>

<script>
export default {
  name: "EventDetails",
  components: {
    // HelloWorld
  },
  data(){ 
    return {
    artist: "Untz Untz",
    location: "Your fav basement",
    time: "22-08",
    date: {month: "Apr", day: "21"},
    price: "110 sek",
}}
};
</script>

<style lang="scss" scoped>
.wrapper {
  font-family: fira sans;
  color: #fff;
  display: flex;
  flex-direction: row;
  

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
    align-items: flex-end;
    text-align: right;
    color: #37AEAB;
    font-size: 1.2em;
    display: inline;
}

.time {
    display: inline;
    margin-right: 48%;
    font-size: 1em;
}

.location {
  font-style: italic;
  font-size: .9em;
  font-weight: normal;
}

</style>