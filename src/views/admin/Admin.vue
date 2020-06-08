<template>
  <div id="admin">
    <img class="logo" src="@/assets/logologo.png" alt="" />
    <div class="admin-wrap">
      <Events />
      <Form />
    </div>
  </div>
</template>

<script>
import Events from "@/components/admin/Events.vue";
import Form from "@/components/admin/Form.vue";

export default {
  name: "Admin",
  components: {
    Events,
    Form,
  },
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";

#admin {
  background-color: $purple;
  display: flex;
  flex-direction: column;
}

.logo {
  margin: 24px auto auto 24px;
}

.admin-wrap {
  display: flex;
  margin: 80px;
  justify-content: space-around;
}
</style>
