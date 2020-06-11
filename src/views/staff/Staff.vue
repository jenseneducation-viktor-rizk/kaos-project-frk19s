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
      <div v-if="verifyResult !== null">
        <h1 v-if="verifyResult">Verified!</h1>
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
    };
  },
  methods: {
    async verify() {
      if (this.biljettNr !== "") {
        await this.$store.dispatch("getTicket", this.biljettNr);
      }
    },
  },
  computed: {
    verifyResult() {
      return this.$store.state.ticketVerify;
    },
  },
};
</script>

<style lang="scss" scope>
@import "@/scss/main.scss";

body {
  margin: auto;
  text-align: center;
}
.Staff {
  background: $orange;
  width: 100%;
  height: 100vh;
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
