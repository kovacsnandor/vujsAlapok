<template>
  <div
    class="alert alert-danger d-flex justify-content-between my-alert-width my-alert-box"
    role="alert"
    v-if="message"
  >
    {{ message }}
    <i class="bi bi-x-lg" @click="onClickCloseButton()"></i>
  </div>
</template>

<script>
export default {
  props: ["message"],
  data() {
    return {
      showAlert: true,
    };
  },
  methods: {
    onClickCloseButton() {
      this.$emit("closeAlert");
    },
  },
};
</script>

<style scoped>
.my-alert-box{
  position: fixed;
  top: 90px;
  left: 10%;
}

.my-alert-width {
  width: 600px;
  /* margin: 0 auto; */
  
}
</style>