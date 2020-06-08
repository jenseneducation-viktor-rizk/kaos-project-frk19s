<template>
<main>
  <div class="wrapper">
    <div class="date box">
      <p>21</p>
      <p> Apr </p>
    </div>
    <div class="artist-details">
      <h2>Klubb Untz</h2>
      <p class="location">Location</p>
      <p class="time">
        22 - 08
      </p>
      <p class="price">110 sek</p>
    </div>
  </div>
</main>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "EventDetails",
  components: {
    // HelloWorld
  }
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
    // background-color: hotpink;
  }
}

.artist-details {
    padding: 2%;
    width: 70%;
    border-bottom: solid 1px #fff;
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
    margin-right: 50%;
}


</style>