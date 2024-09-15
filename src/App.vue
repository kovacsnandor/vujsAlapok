<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="container-fluid my-border">
    <h1>Kommunikáció komponensek között</h1>
    <nav class="my-border p-4">
      <RouterLink to="/">Home</RouterLink> | 
      <RouterLink to="/szulo2gyerek">Szülő -> Gyerek</RouterLink> | 
      <RouterLink to="/szuloodavisszagyerek">Szülő &lt;-&gt; Gyerek</RouterLink> | 
      <RouterLink to="/gyerek2gyerek">Gyerek &lt;-&gt; Gyerek</RouterLink> | 
    </nav>
    <div class="my-border p-2" >
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
</style>
