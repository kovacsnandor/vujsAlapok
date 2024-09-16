<template>
    <h1>Provide/Inject</h1>
    <p>Ez olyan hogy adom (provide: hidetem), és vigye (inject: befogadom), akinek kell</p>
    <p>A Provide/Inject egyirányú kommunikáció a komponensek között</p>
      <NekemNemKell />
  </template>
  
  <script>
  import NekemNemKell from '@/components/NekemNemKell.vue';
  export default {
      components: {
          NekemNemKell
      }
  }
  </script>
  
  <style>
  
  </style>