<template>
  <div class="container" id="container">
    <h3 class="top">
      You are about to score
      <br />some tickets to
    </h3>

    <div class="midden">
      <h1>{{event.name}}</h1>
      <h3>{{time}}</h3>
      <span>@ {{event.location}}</span>
    </div>

    <div class="price">{{event.price}}sek</div>
    <button class="book">Beställ</button>
  </div>
</template>

<script>
export default {
    computed:{
      event(){
        return this.$store.state.event
      },
      time() {
        let json = this.$store.state.event.date
        let day = json.day
        let month = json.month
        let start = json.time.start
        let end = json.time.end 
         return `${day} ${month} kl ${start} - ${end}`
      }
    }
};
</script>

<style lang="scss" scoped>
@import "../scss/variables";
#container {
  border-top: 1px solid $purple;
  text-align: center;	
  color: #2c3e50;	
  box-sizing: border-box;
  background-color: $purple;
  height: 100vh;
  width: 100vw;
  margin: auto;
  .top {
    margin: 80px 0 0 0;
    font-family: "Fira Sans";
    font-style: italic;
    font-size: 19px;
    text-align: center;
    color: rgba(255, 255, 255, 0.8);
  }
  .price {
    font-family: "Fira Sans", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 38px;
    text-align: center;
    margin: 150px 0 150px 0;
    color: $white;
    text-shadow: 1px 1px 0px $pink;
  }
  
  .midden {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    h1 {
      font-family: "Sansita", sans-serif;
      font-style: italic;
      font-weight: bold;
      font-size: 35px;
      line-height: 41px;
      color: $pink;
      margin:50px 0 0 0;
    }
    span {
      font-family: "Fira Sans";
      font-style: italic;
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      margin-top:10px;
      color: rgba(255, 255, 255, 0.7);
    }
    h3 {
      font-family: "Fira Sans";
      font-style: normal;
      font-weight: bold;
      font-size: 19px;
      line-height: 23px;
      margin: 22px 0 0 0;
      color:$green;
    }
  }
  .book {
    width:60%;
    height: 60px;
    background:$green;
    border-radius: 3px;
    border: none;
    outline: none;
    color:$white;
    font-weight: 600;
    font-size: 22px;
  }
}
</style>