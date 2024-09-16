<template>
  <div class="my-doboz2">
    <h3>Nekem kell mutatni a számlálást: {{ count }}</h3>
    <h3>Nekem kell az url: {{ url }}</h3>

  </div>
</template>

<script>
export default {
  inject: ['count', 'url'],
  
};
</script>

<style scope>
.my-doboz2 {
  border: 1px dashed black;
  /* width: 400px; */
  
}
</style>