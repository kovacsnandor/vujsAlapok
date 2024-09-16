<template>
  <h2>Dinamikus komponens</h2>
  <p>
    Komponensek nem csak rout-olással tölthetők be, hanem a component tag
    segítségével is
  </p>
  <button
    type="button"
    class="btn btn-primary"
    @click="clickOnButtonValaszt('KomponensG')"
  >
    Komponens G
  </button>
  <button
    type="button"
    class="btn btn-primary ms-3"
    @click="clickOnButtonValaszt('KomponensL')"
  >
    Komponens L
  </button>
  

  <component :is="betoltottKomponens"></component>
</template>

<script>
import KomponensL from "@/components/KomponensL.vue";
export default {
  components: {
    KomponensL
  },
  data() {
    return {
      betoltottKomponens: null,
    };
  },
  methods: {
    clickOnButtonValaszt(komponens) {
      this.betoltottKomponens = komponens;
    },
  },
};
</script>

<style>
</style>