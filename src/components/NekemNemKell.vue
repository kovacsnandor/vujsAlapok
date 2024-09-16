<template>
    <div class="my-doboz">
      <h3>Nekem nem kell mutatni a számlálást</h3>
      <NekemKell/>
    </div>
  </template>
  
  <script>
  import NekemKell from './NekemKell.vue';
  export default {
  components: {
    NekemKell
  }
  }
  </script>
  
  <style scope>
  .my-doboz{
      border: 1px dashed black;
      width: 500px;
      padding: 20px;
      
  }
  </style>