<template>
  <div>
    <h2>Adatkötés</h2>
    <p>
      {{ szoveg }} | {{ lista }} | {{listaTobbszoros}} | Kenyér: {{ kenyer }}, Kifli: {{ kifli }} |
      {{ neme }} | {{ range }}
    </p>
    <div class="mb-3">
      <label for="data" class="form-label">Szöveg</label>
      <input type="text" class="form-control" id="data" v-model="szoveg" />
    </div>

    <!-- lista -->
    <select
      class="form-select"
      aria-label="Default select example"
      v-model="lista"
    >
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>

    <!-- lista: többszörös kijelölés multiple -->
    <select
      class="form-select mt-3"
      aria-label="Default select example"
      v-model="listaTobbszoros"
      multiple
      size="6"
    >
      <option value="Kifli">Kifli</option>
      <option value="Zsemle">Zsemle</option>
      <option value="Vaj">Vaj</option>
      <option value="Szalámi">Szalámi</option>
      <option value="Szalonna">Szalonna</option>
      <option value="Zsír">Zsír</option>
      <option value="Sajt">Sajt</option>
    </select>

    <!-- checkbox -->
    <div class="form-check mt-3">
      <input class="form-check-input" type="checkbox" v-model="kenyer" />
      <label class="form-check-label" for="flexCheckDefault"> Kenyér </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" v-model="kifli" />
      <label class="form-check-label" for="flexCheckDefault"> Kifli </label>
    </div>

    <!-- radio -->
    <h3>neme:</h3>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="nemevalaszto"
        value="fiú"
        v-model="neme"
      />
      <label class="form-check-label" for="flexRadioDefault1"> Fiú </label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="nemevalaszto"
        value="lány"
        v-model="neme"
      />
      <label class="form-check-label" for="flexRadioDefault2"> Lány </label>
    </div>

    <!-- Range -->
    <h3>Range</h3>
    <label for="customRange1" class="form-label">Example range</label>
    <input type="range" class="form-range" 
      min="0" max="100" step="5"
      v-model="range"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      szoveg: "szöveg",
      lista: 2,
      listaTobbszoros: [],
      kenyer: false,
      kifli: true,
      neme: "fiú",
      range: 30
    };
  },
};
</script>

<style>
</style>