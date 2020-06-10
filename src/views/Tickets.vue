<template>
  <div id="tickets">
      <Ticket />
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
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
        background: linear-gradient($pink 0%, $purple 40%);
    }
</style>