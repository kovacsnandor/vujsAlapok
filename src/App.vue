<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="container-fluid my-border">
    <h1>Témakör</h1>
    <nav class="my-border p-4">
      <RouterLink to="/">Home</RouterLink> | 
      <RouterLink to="/globallocalcomponent">Globális-Lokális komponensek</RouterLink> | 
      <RouterLink to="/dinamikuskomponens">Dinamikus komponensek</RouterLink> | 
      <RouterLink to="/slots">Slots</RouterLink> | 
      <RouterLink to="/vslot">v-slot</RouterLink> | 
    </nav>
    <div class="my-border p-2" >
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
</style>
