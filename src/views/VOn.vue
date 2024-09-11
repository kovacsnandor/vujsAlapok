<template>
  <div>
    <h2>v-on: Eseménykezelés és esemény módosítók</h2>
    <!-- v-on -->
    <button type="button" class="btn btn-primary btn-lg" v-on:click="counter()">
      {{ count }}
    </button>
    <!-- v-on rövidítése: @ -->
    <button
      type="button"
      class="btn btn-secondary btn-lg ms-3"
      @click="counter()"
    >
      {{ count }}
    </button>
    <h3>Esemény módosítók: .once, .prevent, .stop</h3>
    <h4>once: csak egyszer következzen be</h4>
    <!-- once -->
    <button
      type="button"
      class="btn btn-danger btn-lg ms-3"
      @click.once="counter()"
    >
      {{ count }}
    </button>
    <h4>.prevent: Alapértelmezett működés letiltása</h4>
    <a class="ms-3" href="https://www.w3schools.com/">W3</a>
    <a
      class="ms-3"
      @click.prevent="linkView()"
      href="https://www.w3schools.com/"
      >W3 linkje (.prevent):</a
    >
    {{ link }}
  </div>

  <h4>Buborékolás</h4>
  <p>
    Buborékolás (bubbling): A gyerek elem eseménye esemény a szülő elemen is
    kiváltódik. Terjed felfelé mint a buborék
  </p>
  <!-- szülő -->
  <button type="button" class="btn btn-danger btn-lg mb-4" @:click="counter()">
    {{ count }}
    <!-- gyerek click kiváltja a szülő clic-ket -->
    <button type="button" class="btn btn-success p-2" @:click="counter()">
      {{ count }}
    </button>
  </button>
  <p>A .stop-al letilthatjuk a buborékolást</p>
  <!-- szülő -->
  <button type="button" class="btn btn-primary btn-lg" @:click="counter()">
    {{ count }}
    <!-- gyerek click.stop nem terjed tovább a szülő felé -->
    <button type="button" class="btn btn-success p-2" @:click.stop="counter()">
      {{ count }}
    </button>
  </button>
  <!-- Események -->
  <h3>VueJs események</h3>
  <p>
    Egér: click, dblclick, mousemove, mousewheel, mouseover, mouseout,
    mousdown.left -right -middle
  </p>
  <p>Billentyű: keypress, keydown, keyup</p>
  <p>Egyéb: submit, drag, scroll, error, abort, load, $emit</p>

  <h3>Billentyű esemény kezelés</h3>
  <div class="mb-3">
    <label
      for="data"
      class="form-label"
      >Szöveg</label
    >
    <input type="text" class="form-control" id="data" 
    v-model="szoveg" 
    @keydown="billentyuLeutes($event)"
    @keyup.s="sbetuLeutese()"
    @keyup.enter="enterLeutese()"

    />
  </div>
  <p>{{szoveg}}</p>
  <p>{{ billentyu }}</p>
  <p>{{ uzenet }}</p>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      link: null,
      billentyu: null,
      uzenet: null,
      szoveg: null
    };
  },
  methods: {
    counter() {
      this.count++;
    },
    linkView() {
      this.link = "https://www.w3schools.com/";
    },
    billentyuLeutes(event) {
      this.uzenet = "Leütöttél egy billentyűt";
      this.billentyu = event.key;
    },
    sbetuLeutese() {
      this.uzenet = "Leütöttél egy s betűt";
    },
    enterLeutese() {
      this.uzenet = "Leütötted az Entert";
    },
  },
};
</script>

<style>
</style>