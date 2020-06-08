<template>
  <div class="container">
    <h3 class="top">
      You are about to score
      <br />some tickets to
    </h3>

    <div class="midden">
      <h1>{{name}}</h1>
      <h3>{{time}}</h3>
      <span>@ {{location}}</span>
    </div>

    <div class="price">{{price}}sek</div>
    <button class="book">Beställ</button>
  </div>
</template>

<script>
export default {
    data:()=>({
        name:'Lasse-Stefanz',
        time:'21 mars kl 19.00-21.00',
        location:'Kjell Härnqvistsalen',
        price:"350"



    })
};
</script>

<style lang=scss scoped>
@import url("https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,200;1,200&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Sansita:ital,wght@0,400;1,800&display=swap");
.container {
  max-width: 900px;
  height: 667px;
  
  margin: auto;
  .top {
    margin-top: 80px;

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
    color: #ffffff;
    text-shadow: 1px 1px 0px #f56b9a;
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
      color: #f56b9a;
      margin: 0;
    }
    span {
      font-family: "Fira Sans";
      font-style: italic;
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      color: rgba(255, 255, 255, 0.7);
    }
    h3 {
      font-family: "Fira Sans";
      font-style: normal;
      font-weight: bold;
      font-size: 19px;
      line-height: 23px;
      margin-top: 10px;
      color: #37aeab;
    }
  }
  .book {
    width:60%;
    height: 60px;
    background: #37aeab;
    border-radius: 3px;
    border: none;
    outline: none;
    color: #ffffff;
    font-weight: 600;
    font-size: 22px;
  }
}
</style>