<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="container-fluid my-border">
    <h1>Direktívák</h1>
    <nav class="my-border p-4">
      <RouterLink to="/">Home</RouterLink> | 
      <RouterLink to="/databind">Data Bind</RouterLink> | 
      <RouterLink to="/vif">v-if</RouterLink> | 
      <RouterLink to="/vshow">v-show</RouterLink> | 
      <RouterLink to="/vfor">v-for</RouterLink> | 
      <RouterLink to="/von">v-on</RouterLink> | 
      <RouterLink to="/cssbinding">css binding</RouterLink> | 
      <RouterLink to="/computed">Computed</RouterLink> | 
      <RouterLink to="/watch">Watch</RouterLink> | 
    </nav>
    <div class="my-border p-2" >
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
</style>
