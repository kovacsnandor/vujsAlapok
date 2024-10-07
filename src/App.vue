<script>
import { RouterLink, RouterView } from "vue-router";
import {computed} from 'vue'

export default {
  data() {
    return {
      halSearch: null,
      halSearchInput: null
    };
  },
  provide(){
        return{
            halSearch: computed(()=>this.halSearch)
        }
      },
};
</script>

<template>
  <div class="container-fluid my-border">
    <h1>Témakör</h1>
    <nav
      class="my-border p-4 d-flex justify-content-between align-items-center"
    >
      <div>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/globallocalcomponent"
          >Globális-Lokális komponensek</RouterLink
        >
        |
        <RouterLink to="/dinamikuskomponens">Dinamikus komponensek</RouterLink>
        | <RouterLink to="/slots">Slots</RouterLink> |
        <RouterLink to="/vslot">v-slot</RouterLink> |
      </div>
      <div class="d-flex align-items-center" role="search">
        <label for="halSearch" class="form-label text-nowrap m-0"
          >Hal kereső:</label
        >
        <input
          id="halSearch"
          class="form-control me-2 ms-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          v-model="halSearchInput"
        />
        <button class="btn btn-outline-success" type="submit"
          @click="halSearch = halSearchInput"
        >Search</button>
      </div>
    </nav>

    <div class="my-border p-2">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
</style>
