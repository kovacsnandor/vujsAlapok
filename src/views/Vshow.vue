<template>
  <div>
    <h2>v-show</h2>
      <!-- v-show -->
      <div id="alert1" class="alert alert-primary" role="alert" v-show="show1">
        <div class="d-flex justify-content-between">
          <span>eltüntetés v-show-val. Ilyenkor csak a láthatóság tűnik el, marad a DOM-ban!</span>
          <span class="my-cursor-pointer">
            <i class="bi bi-x-lg" @click="Close1()"></i>
          </span>
        </div>
      </div>
      <!-- v-if -->
      <div id="alert2" class="alert alert-success" role="alert" v-if="show2">
        <div class="d-flex justify-content-between">
          <span>eltüntetés v-if-el. Ilyenkor kiveszi DOM-ból!</span>
          <span class="my-cursor-pointer">
            <i class="bi bi-x-lg" @click="Close2()"></i>
          </span>
        </div>
      </div>

  </div>
</template>

<script>
import { useHost } from "vue";

export default {
  data() {
    return {
      show1: true,
      show2: true,
    };
  },
  methods: {
    Close1() {
      this.show1 = false;
    },
    Close2() {
      this.show2 = false;
    },
  },
};
</script>

<style>

</style>