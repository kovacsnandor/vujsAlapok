<template>
  <!-- <p>{{ personForm }}</p>
  <p>{{ formattedDate }}, {{ personForm.dateOfBird }}</p> -->
  <form class="row g-4 p-3 needs-validation was-validated" novalidate>
    <!-- Név -->
    <div class="col-lg-7 position-relative">
      <label for="name" class="form-label">Név:</label>
      <input
      type="text"
      class="form-control"
      id="name"
      v-model="personForm.name"
      required
      />
      <div class="invalid-tooltip">A név kitöltése kötelező</div>
    </div>
    <!-- Született -->
    <div class="col-lg-5 position-relative">
      <label for="dateOfBird" class="form-label text-nowrap"
        >Született:</label
      >
      <input
        type="date"
        class="form-control"
        id="dateOfBird"
        v-model="formattedDate"
        required
      />
      <div class="invalid-tooltip">A dátum kitöltése kötelező</div>
    </div>

    <!-- Helység -->
    <div class="col-sm-12 col-lg-6 position-relative">
      <label for="locality" class="form-label">Helység:</label>
      <input
        type="text"
        class="form-control"
        id="locality"
        v-model="personForm.locality"
        required
      />
      <div class="invalid-tooltip">A helység kitöltése kötelező</div>
    </div>

    <!-- Irányítószám -->
    <div class="col-sm-12 col-lg-3  position-relative">
      <label for="zipCode" class="form-label">Irányítószám:</label>
      <input
        type="text"
        class="form-control"
        id="zipCode"
        v-model="personForm.zipCode"
        pattern="^\d{4}$"
      />
      <div class="invalid-tooltip">Az irányítószám helytelen</div>
    </div>

    <!-- Neme -->
    <div class="col-sm-12 col-lg-3 ps-2">
      <label class="form-check-label" for="man"> Neme: </label>

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
          class="form-check-input"
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
    <div class="col-sm-12 col-lg-6 position-relative">
      <label for="profession" class="form-label">Foglalkozás:</label>
      <select
        class="form-select"
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
      <div class="invalid-tooltip">A foglalkozás kiv. kötelező</div>

    </div>

    <!-- Mentés -->
    <button type="submit" class="btn btn-success btn-lg">Mentés</button>
  </form>
</template>

<script>
import dateFormat, { masks } from "dateformat";
export default {
  props: ["personForm", "professions"],
  emits: ["savePerson"],

  mounted() {
    const forms = document.querySelectorAll(".needs-validation");

    // Loop over them and prevent submission
    Array.from(forms).forEach((form) => {
      form.addEventListener(
        "submit",
        (event) => {
          event.preventDefault();
          event.stopPropagation();
          if (form.checkValidity()) {
            this.onClickSaveButton();
          }
          // form.classList.add("was-validated");
        },
        false
      );
    });
  },
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
        return dateFormat(this.personForm.dateOfBird, "yyyy-mm-dd");

        // return this.personForm.dateOfBird
      },
      set(newValue) {
        this.personForm.dateOfBird = dateFormat(newValue, "yyyy.mm.dd");
      },
    },
  },
};
</script>

<style>
</style>