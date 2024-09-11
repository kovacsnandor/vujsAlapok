<template>
  <div>
    <h2>Vue Watches (figyelő)</h2>
    <h3>Watch</h3>
    <p>Egy változó értékének változására reagálhatunk a segítségével</p>
    <div class="mb-3">
      <label for="data" class="form-label">Hány éves</label>
      <input type="number" class="form-control" id="data" v-model="eletkor" />
      <p>{{ uzenetEletkor }}</p>
    </div>

    <h3>Watcher a New és Old értékkel</h3>
    <p>
      A watcher képes megkapni az előző és új értéket is, hogy ösze tudja
      hasonlítani
    </p>
    <div class="mb-3">
      <label for="szoveg" class="form-label"
        >Írj be egy szót, amiben van a betű.</label
      >
      <input type="text" class="form-control" id="szoveg" v-model="szoveg" />
      <p>{{ uzenetSzoveg }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      eletkor: null,
      uzenetEletkor: null,
      szoveg: null,
      uzenetSzoveg: null,
    };
  },
  watch: {
    //A változó nevével egyező függvény meghívódik, ha az értéke megváltozik
    //paraméterként az aktuális értékét kapja
    eletkor(kor) {
      if (kor < 0) {
        this.uzenetEletkor = "Még nem született meg";
      } else if (kor < 1) {
        this.uzenetEletkor = "Csecsemő";
      } else if (kor < 18) {
        this.uzenetEletkor = "gyerek";
      } else if (kor < 120) {
        this.uzenetEletkor = "felnőtt";
      } else {
        this.uzenetEletkor = "túl öreg";
      }
    },
    szoveg(newValue, oldValue) {
      if (!newValue.includes("a")) {
        this.uzenetSzoveg = "nem jó";
      } else if (oldValue && !oldValue.includes("a") && newValue.includes("a")) {
        this.uzenetSzoveg = "már jó";
      } else {
        this.uzenetSzoveg = "jó";
      }
    },
  },
};
</script>

<style>
</style>