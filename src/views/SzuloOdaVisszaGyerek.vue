<template>
  <h2>Szülő &lt; - &gt; Gyerek</h2>

  <div class="row m-0 gx-3">
    <!-- Üzenőfal -->
    <div class="col-5 my-border">
      <h3>Üzenőfal (szülő elem)</h3>
      <!-- Kérdés -->
      <div class="mb-3">
        <label for="kerdes" class="form-label">Kérdés: </label>
        <input type="text" class="form-control" id="kerdes" v-model="kerdes" />
      </div>
      <!-- válaszok -->
      <ul class="list-group">
        <li class="list-group-item" v-for="(valasz, i) in valaszok" :key="i">
          <h3>{{ valasz.nev }}</h3>
          <p>{{ valasz.valasz }}</p>
        </li>
      </ul>
    </div>

    <!-- Kérdezettek -->
    <div class="col-7 my-border">
      <h3>Kérdezettek</h3>
      <hr>
      <h4>(gyerek elemek)</h4>
      <div class="d-flex flex-wrap">

          <Kerdezett
          v-for="(kerdezett, i) in kerdezettek"
          :key="i"
          :nev="kerdezett"
          :kerdes="kerdes"
          @uzenoFal="uzenofalKezelo"
          />
        </div>
    </div>
  </div>
</template>

<script>
import Kerdezett from "../components/DobozUzeno.vue";
export default {
  components: {
    Kerdezett,
  },
  data() {
    return {
      kerdes: null,
      kerdezettek: ["Feri", "Enikő", "Mónika", "Géza"],
      valaszok: [],
    };
  },
  watch: {
    kerdes(value) {
      this.valaszok = [];
    },
  },
  methods: {
    uzenofalKezelo(nev, valasz) {
      const valakiValasza = { nev: nev, valasz: valasz };
      this.valaszok.push(valakiValasza);
    },
  },
};
</script>

<style>
</style>