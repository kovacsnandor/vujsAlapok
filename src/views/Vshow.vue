<template>
  <div>
    <h2>v-show</h2>
    <transition name="fade" mode="out-in">
      <div class="alert alert-primary my-animate" role="alert" v-show="show">
        <div class="d-flex justify-content-between">
          <span>A simple primary alert—check it out!</span>
          <span class="my-cursor-pointer">
            <i class="bi bi-x-lg" @click="Close()"></i>
          </span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { useHost } from "vue";

export default {
  data() {
    return {
      show: true,
    };
  },
  methods: {
    Close() {
      this.show = false;
    },
  },
};
</script>

<style>

</style>