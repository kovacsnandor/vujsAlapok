<template>
  <div class="p-3">
    <h1>Főoldal</h1>
    <Alert :message="message" @closeAlert="closeAlert" />
    <Todos @emptyText="openAlert" />
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
</style>