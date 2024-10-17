<template>
  <!-- <p>{{ personForm }}</p>
  <p>{{ formattedDate }}, {{ personForm.dateOfBird }}</p> -->
  <form class="row g-4 p-3" @submit.prevent="onClickSaveButton()" novalidate>
    <!-- Név -->
    <div class="col-lg-7 d-flex align-items-center">
      <label for="name" class="form-label m-0">Név:</label>
      <input
        type="text"
        class="form-control ms-2"
        id="name"
        v-model="personForm.name"
        required
      />
    </div>
    <!-- Született -->
    <div class="col-lg-5 d-flex align-items-center">
      <label for="dateOfBird" class="form-label m-0 text-nowrap"
        >Születési dátum:</label
      >
      <input
        type="date"
        class="form-control ms-2"
        id="dateOfBird"
        v-model="formattedDate"
        required
      />
    </div>

    <!-- Helység -->
    <div class="col-sm-12 col-lg-6 d-flex align-items-center">
      <label for="locality" class="form-label m-0">Helység:</label>
      <input
        type="text"
        class="form-control ms-2"
        id="locality"
        v-model="personForm.locality"
        required
      />
    </div>

    <!-- Irányítószám -->
    <div class="col-sm-12 col-lg-3 d-flex align-items-center">
      <label for="zipCode" class="form-label m-0">Irányítószám:</label>
      <input
        type="text"
        class="form-control ms-2"
        id="zipCode"
        v-model="personForm.zipCode"
        pattern="^\d{4}$"
        
      />
    </div>

    <!-- Neme -->
    <div class="col-sm-12 col-lg-3 d-flex align-items-center">
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="neme"
          id="man"
          :value="true"
          v-model="personForm.neme"
        />
        <label class="form-check-label" for="man"> Férfi </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input mx-2"
          type="radio"
          name="neme"
          id="woman"
          :value="false"
          v-model="personForm.neme"
        />
        <label class="form-check-label" for="woman"> Nő </label>
      </div>
    </div>
    <!-- Foglalkozás -->
    <div class="col-sm-12 col-lg-6 d-flex align-items-center">
      <label for="profession" class="form-label m-0">Foglalkozás:</label>
      <select
        class="form-select ms-2"
        aria-label="Default select example"
        v-model="personForm.professionId"
        id="profession"
        required
      >
        <option
          v-for="profession in professions"
          :key="profession.id"
          :value="profession.id"
        >
          {{ profession.name }}
        </option>
      </select>
    </div>

    <!-- Mentés -->
    <button type="submit" class="btn btn-success btn-lg">
      Mentés
    </button>
  </form>
</template>

<script>
import dateFormat, { masks } from "dateformat";
export default {
  props: ["personForm", "professions"],
  emits: ["savePerson"],
  methods: {
    onClickSaveButton() {
      this.$emit("savePerson", this.personForm);
    },
  },
  computed: {
    formattedDate: {
      get() {
        if (!this.personForm.dateOfBird) {
          return null;
        }
        return dateFormat(this.personForm.dateOfBird,'yyyy-mm-dd');

        // return this.personForm.dateOfBird
      },
      set(newValue) {
        this.personForm.dateOfBird = dateFormat(newValue,'yyyy.mm.dd');
      }
    }
  }
};
</script>

<style>
</style>