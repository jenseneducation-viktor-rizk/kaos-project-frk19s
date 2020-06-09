<template>
  <div class="Staff">
    <img src="../../assets/staff-logo.png" alt id="staff-logo" />
    <h1 id="staff-text-1">Where It's @</h1>
    <h1 id="staff-text-2">STAFF</h1>
    <div class="ticket">
      <input
        type="text"
        name="Biljett-number"
        id="staff-input"
        placeholder="Biljett nummer"
        v-model="biljettNr"
      />
      <button id="verifyBtn" v-on:click="verify()">Verify ticket</button>
      <div v-if="verifyStatus!==null">
        <h1 v-if="verifyStatus">Verified!</h1>
        <h1 v-else>Not verified</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Staff",
  data() {
    return {
      biljettNr: "",
      verifyStatus: null
    };
  },
  methods: {
    verify() {
      console.log("starting");
      if (this.verifyTicket) {
        this.verifyStatus = true;
        console.log("true");
      } else {
        this.verifyStatus = false;
        console.log("false");
      }
    }
  },
  computed: {
    getTicketData() {
      return this.$store.state.biljettNr;
    },
    verifyTicket() {
      return this.$store.state.biljettNr.find(
        biljett => biljett.number == this.biljettNr
      );
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/main.scss";

//@import url("https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
//@import url("https://fonts.googleapis.com/css2?family=Sansita:ital,wght@1,700;1,800;1,900&display=swap");
//@import url("https://fonts.googleapis.com/css2?family=Fira+Mono:wght@500;700&display=swap");
body {
  background: #e5e5e5;
}
.Staff {
  background: $orange;
  width: 375px;
  height: 667px;
  margin: auto;
}
#verifyBtn {
  background: $purple;
  color: $white;
}
#staff-logo {
  width: 70px;
  height: 69px;
  margin-top: 90px;
}
#staff-text-1 {
  font-size: 20px;
  //font-family: "Sansita", sans-serif;
}
#staff-text-2 {
  font-size: 22px;
  font-family: "Fira Sans", sans-serif;
  font-weight: normal;
  letter-spacing: 0.3em;
}
.ticket {
  margin: auto;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#verifyBtn {
  width: 317px;
  height: 60px;
  font-family: "Fira Sans", sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 22px;
  order: solid 2px $purple;
}
#staff-input {
  width: 310px;
  height: 80px;
  font-family: "Fira Mono", sans-serif;
  font-size: 25px;
  letter-spacing: 0.3em;
  font-weight: bold;
  background: $orange;
  border: solid 2px $purple;
  color: $black;
}
</style>