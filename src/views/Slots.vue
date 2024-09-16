<template>
  <h1>Slots</h1>

  <p v-if="openSzoveg">
    Ez egy szöveg, amit "Szöveg eltüntet" gombbal el lehet tüntetni
  </p>

  <!-- Üzenet stat -->
  <button type="button" class="btn btn-danger" @click="openAlert = true">
    Hibaüzenet
  </button>

  <!-- Modal start -->
  <!-- Button trigger modal -->
  <button
    type="button"
    class="btn btn-primary ms-3"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
  >
    <span v-if="openSzoveg">Szöveg eltüntet</span>
    <span v-if="!openSzoveg">Szöveg megjelenít</span>
  </button>

  <!-- Üzenet komponens -->
  <KomponensAlert :open="openAlert" @closeAlert="closeAlert">
    <p>
      <strong>Szerver hiba!</strong>
      <br />
      Türelmét kérjük, próbálkozzon később!
    </p>
  </KomponensAlert>

  <!-- Modal komponens -->
  <Modal 
    :title="'Kérdés'" 
    :yes="'Igen'" 
    :no="'Ne'"
    @szovegEltuntetes="szovegEltuntet"
    >
    <p v-if="openSzoveg">Valóban eltüntessem a szöveget?</p>
    <p v-if="!openSzoveg">Megjelenítsem a szöveget?</p>
  </Modal>
</template>

<script>
import Modal from "@/components/Modal.vue";

export default {
  components: {
    Modal,
  },
  data() {
    return {
      openAlert: false,
      openSzoveg: true,
    };
  },
  methods: {
    //Saját esemény (closeAlert) eseménykezelő függvénye
    closeAlert() {
      this.openAlert = false;
    },
    szovegEltuntet() {
      this.openSzoveg = !this.openSzoveg;
    },
  },
};
</script>

<style>
</style>