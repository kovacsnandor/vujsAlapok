<template>
  <h2>Animáció</h2>

  <button type="button" class="btn btn-primary" @click="open()">Üzenet</button>

  
  <!-- van animáció -->
  <transition name="fade">
    <div
      id="alert"
      class="alert alert-success mt-3"
      role="alert"
      v-if="message"
    >
      <div class="d-flex justify-content-between">
        <span>{{ message }}</span>
        <span class="my-cursor-pointer">
          <i class="bi bi-x-lg" @click="close()"></i>
        </span>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      message: null,
    };
  },
  methods: {
    open() {
      this.message = "Ez egy üzenet!";
    },
    close() {
      this.message = null;
    },
  },
};
</script>

<style scoped>
.fade-enter-from{
    opacity: 0
}
.fade-enter-to{
    opacity: 1
}
.fade-leave-from{
    opacity: 1
}
.fade-leave-to{
    opacity: 0
}
.fade-enter-active, .fade-leave-active{
    transition: all 0.6s linear;
}

</style>