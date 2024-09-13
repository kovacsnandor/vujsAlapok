<template>
  <div class="my-doboz">
    <h2>{{ nev }}</h2>
    <p>Kérdés: {{ kerdes }}</p>
    <hr />
    <div class="mb-3">
      <label for="valasz" class="form-label"
        >Válaszolj:
        <button
          type="button"
          class="btn btn-primary"
          @click="onClickKuldButton()"
          v-show="kerdes && valasz"
        >
          Küldd
        </button>
      </label>
      <input type="text" class="form-control" id="valasz" v-model="valasz" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["nev", "kerdes"],
  data() {
    return {
      valasz: null,
    };
  },
  methods: {
    onClickKuldButton() {
      this.uzenofalraKuld();
    },
    uzenofalraKuld() {
      if (this.valasz) {
        this.$emit("uzenoFal", this.nev, this.valasz);
        this.valasz = null;
      }
    },
  },
};
</script>

<style scoped>
.my-doboz {
  width: 200px;
  height: 200px;
  padding: 5px;
  margin: 10px;
  background: lightgreen;
  border: 1px dashed black;
}
</style>