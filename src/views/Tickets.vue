<template>
  <div id="tickets">
      <router-link class="back-btn" to="/events">Back</router-link>
      <Ticket class="middle"/>
  </div>
</template>

<script>
import Ticket from '../components/Ticket'


export default {
    components: { Ticket }

}
</script>

<style lang="scss" scoped>
    @import "../scss/variables";
    #tickets {
        box-sizing: border-box;
        display: flex;
        // justify-content: center;
        // align-items: center;
        height: 100vh;
        width: 100vw;
        background: linear-gradient($pink 0%, $purple 40%);
        .middle {
            margin: auto;
        }
        .back-btn {
            color: $purple;
            position: absolute;
            margin-left: 20px;
            margin-top: 20px;
            text-decoration: none;
            &:hover {
                color: $white;
            }
        }
    }
</style>