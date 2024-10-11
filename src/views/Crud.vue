<template>
  <div>
    <h2>Crud műveletek</h2>
    <!-- Táblázat -->
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Műveletek</th>
          <th scope="col">Név</th>
          <th scope="col">Született</th>
          <th scope="col">Helység</th>
          <th scope="col">Irányítószám</th>
          <th scope="col">Neme</th>
          <th scope="col">Foglalkozás</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="person in personsTransform"
          :key="person.id"
          @click="onClickTr(person.id)"
          :class="{ 'table-success': selectedRowPersonId == person.id }"
        >
          <td class="text-nowrap">
            <!-- törlés -->
            <button type="button" class="btn btn-outline-danger btn-sm">
              <i class="bi bi-trash3"></i>
            </button>
            <!-- módosítás -->
            <button type="button" class="btn btn-outline-primary btn-sm ms-2">
              <i class="bi bi-pencil"></i>
            </button>
            <!-- új -->
            <button type="button" class="btn btn-outline-success btn-sm ms-2">
              <i class="bi bi-plus-lg"></i>
            </button>
          </td>
          <td>{{ person.name }}</td>
          <td>{{ person.dateOfBird }}</td>
          <td>{{ person.locality }}</td>
          <td>{{ person.zipCode }}</td>
          <td>{{ person.neme }}</td>
          <td>{{ person.profession }}</td>
        </tr>
      </tbody>
    </table>

    <!-- Yes-no Modal -->

    <!-- CU modal -->

  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedRowPersonId: null,
      persons: [
        {
          id: 1,
          name: "Jó Béla",
          dateOfBird: "2021.11.03",
          locality: "Újszász",
          zipCode: "5052",
          neme: true,
          professionId: 1,
        },
        {
          id: 2,
          name: "Kis Béla",
          dateOfBird: "2021.11.03",
          locality: "Szolnok",
          zipCode: "5052",
          neme: true,
          professionId: 3,
        },
        {
          id: 3,
          name: "Zöld Mónika",
          dateOfBird: "2021.11.03",
          locality: "Budapest",
          zipCode: "5052",
          neme: true,
          professionId: 2,
        },
        {
          id: 4,
          name: "Fehér Enikő",
          dateOfBird: "2021.11.03",
          locality: "Kecskemét",
          zipCode: "6055",
          neme: true,
          professionId: 2,
        },
        {
          id: 5,
          name: "Rácz Anna",
          dateOfBird: "2021.11.03",
          locality: "Szolnok",
          zipCode: "5052",
          neme: true,
          professionId: 5,
        },
        {
          id: 6,
          name: "Bors István",
          dateOfBird: "2021.11.03",
          locality: "Újszász",
          zipCode: "5052",
          neme: true,
          professionId: 4,
        },
        {
          id: 7,
          name: "Komár László",
          dateOfBird: "2021.11.03",
          locality: "Újszász",
          zipCode: "5052",
          neme: true,
          professionId: 2,
        },
        {
          id: 8,
          name: "Zsír József",
          dateOfBird: "2021.11.03",
          locality: "Újszász",
          zipCode: "5052",
          neme: true,
          professionId: 5,
        },
        {
          id: 9,
          name: "Regős János",
          dateOfBird: "2021.11.03",
          locality: "Újszász",
          zipCode: "5052",
          neme: true,
          professionId: 3,
        },
        {
          id: 10,
          name: "Kolbász Julianna",
          dateOfBird: "2021.11.03",
          locality: "Újszász",
          zipCode: "5052",
          neme: true,
          professionId: 1,
        },
      ],
      professions: [
        {
          id: 1,
          name: "Asztalos",
        },
        {
          id: 2,
          name: "Villanyszerelő",
        },
        {
          id: 3,
          name: "Programozó",
        },
        {
          id: 4,
          name: "Könyvelő",
        },
        {
          id: 5,
          name: "Kereskedő",
        },
      ],
    };
  },
  methods: {
    nemeString(neme) {
      return neme ? "férfi" : "nő";
    },
    profesonById(professionId) {
      return this.professions.filter((p) => p.id == professionId)[0].name;
    },
    onClickTr(id) {
      this.selectedRowPersonId = id;
    },
  },
  computed: {
    personsTransform() {
      return this.persons.map((p) => {
        const newP = {
          ...p,
          neme: this.nemeString(p.neme),
          profession: this.profesonById(p.professionId),
        };
        return newP;
      });
    },
  },
};
</script>

<style scoped>
.my-selected-row {
  background-color: green !important;
}
</style>