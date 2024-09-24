<template>
  <div class="p-3">
    <h1 class="my-h1">Főoldal</h1>
    <transition name="alert">
      <Alert :message="message" @closeAlert="closeAlert" />
    </transition>
    <Todos class="my-list-width" @emptyText="openAlert" />
    
    <button type="button" class="btn btn-primary my-3" @click="showH = !showH">
      Heló
    </button>
    <transition name="fade">
      <div v-if="showH">Heló világ</div>
    </transition>
  </div>
</template>

<script>
import Alert from "@/components/Alert.vue";
import Todos from "@/components/Todos.vue";
export default {
  components: { Alert, Todos },
  data() {
    return {
      message: null,
      showH: false,
    };
  },
  methods: {
    closeAlert() {
      this.message = null;
    },
    openAlert(message) {
      this.message = message;
    },
  },
};
</script>

<style>
.my-list-width {
  max-width: 400px;
}
.my-h1{
  position: relative;
}
/* Animation helo*/
.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
.fade-enter-active, .fade-leave-active {
  transition: all 2s ease;
}
.fade-leave-from {
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}

/* animation alert */
.alert-enter-from {
  opacity: 0;
  transform: translateY(-60px);
}
.alert-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.alert-enter-active, .alert-leave-active {
  transition: all 0.3s ease;
}
.alert-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.alert-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}

</style>