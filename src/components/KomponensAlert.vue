<template>
  <transition name="fade">
    <div class="alert alert-danger d-flex justify-content-between m-3" role="alert"
    v-if="open"
    >  
    <!-- Ide jön az üzenet -->
    <slot></slot>
    <i class="bi bi-x-lg"
    @click="onClickCloseIcon()"
    ></i>
  </div>
</transition>
</template>

<script>
export default {
  props: ['open'],
  data(){
    return{
      selfOpen: true
    }
  },
  methods: {
    onClickCloseIcon(){
      this.$emit("closeAlert", false);
    }
  }
};
</script>

<style>
</style>