<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="container-fluid my-border">
    <h1>Témakör</h1>
    <nav class="my-border p-4">
      <RouterLink to="/">Home</RouterLink> | 
      <RouterLink to="/about">About</RouterLink> | 
    </nav>
    <div class="my-border p-2" >
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
</style>
