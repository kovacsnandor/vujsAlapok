<template>
  <div>
    <h2>v-if
      <span v-if="lista == 1">*</span>
      <span v-else-if="lista == 2">**</span>
      <span v-else-if="lista == 3">***</span>
      <span v-else>?</span>
    </h2>
    <!-- lista -->
    Válassz: 
    <select
      class="form-select"
      aria-label="Default select example"
      v-model="lista"
    >
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lista: null,
    };
  },
};
</script>

<style>
</style>