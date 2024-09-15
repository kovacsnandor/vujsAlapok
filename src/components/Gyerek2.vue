<template>
  <div class="my-doboz">
    <h1>Gyerek2 ablak</h1>
    <label for="valasz" class="form-label">Küldendő üzenet: </label>
    <input type="text" class="form-control" id="valasz" v-model="uzenet" />
    <button type="button" class="btn btn-primary my-3" @click="onClickKuldButton()">
      Küldd
    </button>
    <p>
      {{ valasz }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uzenet: null,
      valasz: null,
    };
  },
  mounted() {
    //Az oldal betöltődése után
    //feliratkozunk a gyerek2_to_gyerek1 eseményre
    //az eseményt kezelő függvénnyel
    this.emitter.on("gyerek1_to_gyerek2", (data) => {
      this.valasz = data.uzenet;
    });
  },
  methods: {
    onClickKuldButton() {
      this.sendEvent();
    },
    sendEvent() {
      //Kibocsátjuk (emit) a gyerek1_to_gyerek2 esemény kiváltásával az üzenetet
      //Amit az kap el, aki feliratkozott rá.
      this.emitter.emit("gyerek2_to_gyerek1", { uzenet: this.uzenet });
    },
  },
};
</script>

<style scoped>
.my-doboz {
  width: 400px;
  height: 300px;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  background: lightblue;
  border: 1px dashed black;
}
</style>