<template>
  <form class="row g-3" @submit.prevent="onClickSaveButton()">
    <!-- Név -->
    <div class="col-md-7 d-flex align-items-center">
      <label for="name" class="form-label m-0">Név:</label>
      <input
        type="text"
        class="form-control ms-2"
        id="name"
        v-model="person.name"
        required
      />
    </div>
    <!-- Született -->
    <div class="col-md-5 d-flex align-items-center">
      <label for="dateOfBird" class="form-label m-0 text-nowrap"
        >Születési dátum:</label
      >
      <input
        type="date"
        class="form-control ms-2"
        id="dateOfBird"
        v-model="person.dateOfBird"
        required
      />
    </div>
    <!-- Irányítószám -->
    <div class="col-md-3 d-flex align-items-center">
      <label for="locality" class="form-label m-0">Irányítószám:</label>
      <input
        type="text"
        class="form-control ms-2"
        id="locality"
        v-model="person.locality"
        required
      />
    </div>
    <!-- Neme -->
    <div class="col-md-3 d-flex align-items-center">
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="neme"
          id="man"
          v-model="person.neme"
        />
        <label class="form-check-label" for="man"> Férfi </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input mx-2"
          type="radio"
          name="neme"
          id="woman"
          v-model="person.neme"
        />
        <label class="form-check-label" for="woman"> Nő </label>
      </div>
    </div>
    <!-- Foglalkozás -->
    <div class="col-md-6 d-flex align-items-center">
      <label for="profession" class="form-label m-0">Foglalkozás:</label>
      <select
        class="form-select ms-2"
        aria-label="Default select example"
        v-model="person.professionId"
        id="profession"
      >
        <option
          v-for="profession in professions"
          :key="profession.id"
          value="profession.id"
        >
          {{ profession.name }}
        </option>
      </select>
    </div>

    <!-- Mentés -->
    <button type="submit" class="btn btn-success" data-bs-dismiss="modal">
      Mentés
    </button>
  </form>
</template>

<script>
export default {
  props: ["person", "professions"],
  methods: {
    onClickSaveButton() {
      this.$emit("savePerson", this.person);
    },
  },
};
</script>

<style>
</style>