<template>
  <div class="wrapper">
    <div class="form">
      <h2>Add Event</h2>

      <div class="inputWide">
        <input type="text" class="wide" placeholder="Name" v-model="newEvent.name" />
        <input type="text" class="wide" placeholder="Where"  v-model="newEvent.place"/>
        <input type="text" class="wide" placeholder="Date" v-model="newEvent.date"/>
      </div>

      <div class="inputQuad">
        <input type="text" class="half" placeholder="From Time" v-model="newEvent.startTime"/>
        <input type="text" class="half" placeholder="To Time" v-model="newEvent.endTime"/>
        <input type="number" class="half" placeholder="Tickets" v-model="newEvent.tickets.spots"/>
        <input type="number" class="half" placeholder="Price" v-model="newEvent.price"/>
      </div>

      <button>Add the Event</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Form',
  data() {
    return {
      newEvent: {
        name: "",
        place: "",
        price: Number,
        date: "",
        // date: {
        //   date: "",
        //   month: "",
        // },
        startTime: "",
        endTime: "",
        tickets: {
          spots: Number,
          sold: 0
        }
      }
    }
  },
  computed: {
    events() {
      return this.$store.state.events
    }
  },
  methods: {
    async createEvent() {
      this.$store.dispatch('createEvent', this.newEvent);
      this.$store.dispatch('getEvents')
    }
  },
  beforeMount() {
    this.$store.dispatch('getEvents');
  }
}
</script>

<style lang="scss">
@import "@/scss/_variables.scss";
@import "@/scss/_typography";

.wrapper {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: $purple;
  height: 100vh;
  
  .form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 50px;
    
    width: 432px;
    background: $gray;
    h2{
      color: $pink;
      font-family: Fira Sans;
      font-style: normal;
      font-weight: bold;
      
    }
    .inputWide{
      display: flex;
      flex-direction: column;
      width: 100%;
      
      
      .wide{
        height: 40px;
        background: transparent;
        margin-bottom: 12px;
        border: 1px solid rgba(255, 255, 255, 0.7);
        border-radius: 3px;
      }
      .wide::placeholder {
        font-family: Fira Sans;
        font-style: normal;
        font-weight: 200;
        
      }
    }
    .inputQuad{
     
      margin: 0 auto -13px;
      
      .half{
        height: 40px;
        width: calc(100% / 2 - 16px);
        background: transparent;
        display: inline-block;
        border: 1px solid rgba(255, 255, 255, 0.7);
        border-radius: 3px;
        margin-right: 20px;
        margin-bottom: 13px;
        &:nth-child(2n){
          margin-right: 0;
        }
        .half::placeholder {
        font-family: Fira Sans;
        font-style: normal;
        font-weight: 200;
        
      }
      }
    }
    button{
        height: 40px;
        width: calc(100% / 2 - 16px);
        background: $pink;
        color: $white;
        border: 1px solid rgba(255, 255, 255, 0.7);
        border-radius: 3px;
    }
  }
}
</style>