<script>
import { RouterLink, RouterView } from "vue-router";
import { computed } from "vue";

export default {
  data() {
    return {
      searchWord: null,
      searchWordInput: null,
    };
  },
  watch:{
    searchWordInput(data){
      if (!data) {
        this.searchWord = null;
      }
    }
  },
  provide() {
    return {
      searchWord: computed(() => this.searchWord),
    };
  },
};
</script>

<template>
  <div class="container-fluid my-border">
    <h1>Komponenesek</h1>
    <nav
      class="my-border p-4 d-flex justify-content-between align-items-center"
    >
      <div>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/globallocalcomponent">Globális-Lokális</RouterLink> |
        <RouterLink to="/dinamikuskomponens">Dinamikus</RouterLink> |
        <RouterLink to="/slots">Slots</RouterLink> |
        <RouterLink to="/vslot">v-slot</RouterLink> |
        <RouterLink to="/tablazat">Táblázat</RouterLink> |
      </div>
      <div class="d-flex align-items-center" role="search">
        <label for="searchWord" class="form-label text-nowrap m-0"
          >Hal kereső:</label
        >
        <input
          id="searchWord"
          class="form-control me-2 ms-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          v-model="searchWordInput"
        />
        <button
          class="btn btn-outline-success"
          type="submit"
          @click="searchWord = searchWordInput"
        >
          Search
        </button>
      </div>
    </nav>

    <div class="my-border p-2">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
</style>
