<template>
  <div id="admin">
    <Events />
    <Form />
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
}
</style>
