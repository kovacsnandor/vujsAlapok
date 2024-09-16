<template>
  <div>
    <h2>Globális és lokális komponens</h2>
    <div class="d-flex m-4">
      <KomponensG/>
      <KomponensL/>
    </div>
  </div>
</template>

<script>
import KomponensL from '@/components/KomponensL.vue';
export default {
  components: {
    KomponensL
  }
}
</script>

<style>

</style>