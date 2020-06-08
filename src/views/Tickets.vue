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
    #tickets {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px;
        padding: 0;
        max-height: 667px;
        max-width: 475px;
        height: 100vh;
        width: 100vw;
        background-color: rgba($color: #542bc7, $alpha: 1.0);
    }
</style>