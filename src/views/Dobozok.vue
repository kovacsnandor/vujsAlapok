<template>
  <div>
    <h2>Dobozok</h2>

    <p>
      Egyirányú kommunkiáció: szülő -> gyerek. <br>
      A props-okat (tulajdonságokat) használjuk fel az üzenetek továbbítására
    </p>

    <div class="mb-3">
      <label for="uzenet" class="form-label">Üzenet a dobozoknak</label>
      <input type="text" class="form-control" id="uzenet" v-model="uzenet" />
    </div>

    <!-- Behegesztve -->
    <!-- <div class="d-flex">
      <Doboz 
        :cim="'Cipők'" 
        :tartalom="'Cipők vannak benne'" 
        :uzenet="uzenet" />
      <Doboz
        :cim="'Almák'"
        :tartalom="'Almák vannak benne'"
        v-model="uzenet"
        :uzenet="uzenet"
      />
      <Doboz
        :cim="'Játékok'"
        :tartalom="'Játékok vannak benne'"
        v-model="uzenet"
        :uzenet="uzenet"
      />
    </div> -->

    <!-- v-for -->
    <div class="d-flex">
      <Doboz 
        v-for="(cucc, i) in cuccok" :key="i"
        :cim="cucc.cim" 
        :tartalom="cucc.tartalom" 
        :uzenet="uzenet" />
    </div>

  </div>
</template>

<script>
import Doboz from "../components/DobozAltalanos.vue";
export default {
  components: { Doboz },
  data() {
    return {
      uzenet: null,
      cuccok: [
        { cim: "Cipők", tartalom: "Cipők vannak benne" },
        { cim: "Almák", tartalom: "Almák vannak benne" },
        { cim: "Játékok", tartalom: "Játékok vannak benne" },
      ],
    };
  },
};
</script>

<style>
</style>