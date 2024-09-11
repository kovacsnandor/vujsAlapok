<template>
  <div>
    <h2>v-on</h2>
    <button type="button" class="btn btn-primary btn-lg" v-on:click="counter()">
      {{ count }}
    </button>
    <button
      type="button"
      class="btn btn-secondary btn-lg ms-3"
      @click="counter()"
    >
      {{ count }}
    </button>
    <button
      type="button"
      class="btn btn-danger btn-lg ms-3"
      @click.once="counter()"
    >
      {{ count }}
    </button>
    <a class="ms-3" href="https://www.w3schools.com/">W3</a>
    <a
      class="ms-3"
      @click.prevent="linkView()"
      href="https://www.w3schools.com/"
      >W3 linkje (.prevent):</a
    >
    {{ link }}
  </div>

  <h3>Buborékolás</h3>
  <p>Buborékolás (bubbling): A gyerek elem eseménye esemény a szülő elemen is kiváltódik. Terjed felfelé mint a buborék </p>
  <button type="button" class="btn btn-danger btn-lg mb-4" @:click="counter()">
    {{ count }}
    <button type="button" class="btn btn-success p-2" @:click="counter()">
      {{ count }}
    </button>
  </button>
  <p>A .stop-al letilthatjuk a buborékolást </p>
  <button type="button" class="btn btn-primary btn-lg" @:click="counter()">
    {{ count }}
    <button type="button" class="btn btn-success p-2" @:click.stop="counter()">
      {{ count }}
    </button>
  </button>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      link: null,
    };
  },
  methods: {
    counter() {
      this.count++;
    },
    linkView() {
      this.link = "https://www.w3schools.com/";
    },
  },
};
</script>

<style>
</style>