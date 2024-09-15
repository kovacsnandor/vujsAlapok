<template>
  <h1>Gyerek &lt; - &gt; Gyerek kommunikáció</h1>
  <div class="row m-0">
    <div class="col-6 my-border">
        <!-- Gyerek1 ablak -->
        <Gyerek1 />
    </div>
    <div class="col-6 my-border">
        <!-- Gyerek2 ablak -->
        <Gyerek2 />
    </div>
  </div>
</template>

<script>
    import Gyerek1 from "../components/Gyerek1.vue";
    import Gyerek2 from "../components/Gyerek2.vue";
export default {
    components: {
        Gyerek1,
        Gyerek2
    }
}
</script>

<style>

</style>