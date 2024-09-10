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
    </nav>
    <RouterView class="my-border p-2" />
  </div>
</template>

<style scoped>
</style>
