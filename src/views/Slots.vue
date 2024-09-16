<template>
  <h1>Slots</h1>

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
    Valóban ezt akarja?
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
  <Modal :title="'Kérdés'" :yes="'Igen'" :no="'Nem'"> 
    <p>Valóban törölni akarja?</p>
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
    };
  },
  methods: {
    //Saját esemény (closeAlert) eseménykezelő függvénye
    closeAlert() {
      this.openAlert = false;
    },
  },
};
</script>

<style>
</style>