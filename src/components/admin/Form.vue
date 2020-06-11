<template>
  <div class="form-wrapper">
    <div class="form">
      <h2>Add Event</h2>

      <div class="inputWide">
        <input
          type="text"
          class="wide"
          placeholder="Name"
          v-model="newEvent.name"
        />
        <input
          type="text"
          class="wide"
          placeholder="Where"
          v-model="newEvent.location"
        />
        <input
          type="text"
          onfocus="(this.type='date')"
          class="wide"
          placeholder="Date"
          v-model="date"
        />
      </div>

      <div class="inputQuad">
        <input
          type="text"
          onfocus="(this.type='time')"
          class="half"
          placeholder="From Time"
          v-model="newEvent.start"
        />
        <input
          type="text"
          onfocus="(this.type='time')"
          class="half"
          placeholder="To Time"
          v-model="newEvent.end"
        />
        <input
          type="number"
          class="half"
          placeholder="Tickets"
          v-model="newEvent.total"
        />
        <input
          type="number"
          class="half"
          placeholder="Price"
          v-model="newEvent.price"
        />
      </div>

      <button @click="createEvent">Add the event</button>
      <p class="error-text" v-show="!valid">Please fill in the blanks</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Form",
  data() {
    return {
      date: "",
      newEvent: {
        name: "",
        price: "",
        location: "",
        day: "",
        month: "",
        start: "",
        end: "",
        total: "",
      },
      valid: true,
    };
  },
  methods: {
    async createEvent() {
      if (this.date != "") {
        var format = { month: "short", day: "numeric" };
        let date = new Date(this.date).toLocaleDateString("en-US", format);
        this.newEvent.month = date.replace(/[^A-Z, a-z]/g, "").slice(0, -1);
        this.newEvent.day = date.replace(/[^0-9]/g, "");
        if (
          (this.newEvent.name != "") &
          (this.newEvent.location != "") &
          (this.newEvent.start != "") &
          (this.newEvent.end != "")
        ) {
          this.$store.dispatch("createEvent", this.newEvent);
          this.$store.dispatch("getEvents");
          this.valid = true;
        } else {
          this.valid = false;
        }
      } else {
        this.valid = false;
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";
@import "@/scss/_typography";

.form-wrapper {
  background: $darkPurple;
  height: 100%;

  .form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
    width: 432px;

    h2 {
      color: $pink;
      font-family: Fira Sans;
      font-style: normal;
      font-weight: bold;
      margin: 0 0 10px;
    }

    input {
      padding: 0 14px;
      color: white;
    }

    input::placeholder {
      color: #a7a7a7;
      font-weight: 200;
      font-size: 12px;
    }

    .inputWide {
      display: flex;
      flex-direction: column;
      width: 100%;

      .wide {
        height: 40px;
        background: transparent;
        margin-bottom: 12px;
        border: 1px solid rgba(255, 255, 255, 0.7);
        border-radius: 3px;
      }
      .wide::placeholder {
        font-family: Fira Sans;
        font-style: normal;
        font-weight: 400;
      }
    }
    .inputQuad {
      margin: 0 auto -13px;
      text-align: left;

      .half {
        height: 40px;
        width: calc(100% / 2 - 10px);
        background: transparent;
        display: inline-block;
        border: 1px solid rgba(255, 255, 255, 0.7);
        border-radius: 3px;
        margin-right: 20px;
        margin-bottom: 13px;
        &:nth-child(2n) {
          margin-right: 0;
        }
      }
      .half::placeholder {
        font-family: Fira Sans;
        font-style: normal;
        font-weight: 400;
      }
    }
    button {
      height: 40px;
      width: calc(100% / 2 - 10px);
      background: $pink;
      color: $white;
      border-radius: 3px;
      border-style: none;
      margin-top: 16px;
      font-weight: 600;
      font-size: 14px;
    }

    .error-text {
      color: red;
      margin: 8px 0 0;
      font-size: 14px;
    }
  }
}
</style>
