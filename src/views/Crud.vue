<template>
  <div>
    <h2>Crud műveletek</h2>
  </div>
</template>

<script>
export default {
  data(){
    return {
      people: [
        {
          id: 1,
          name: "Jó Béla",
          dateOfBird: "2021.11.03",
          locality: "Újszász",
          zipCode: "5052",
          neme: true,
          professionId: 1
        },
        {
          id: 2,
          name: "Kis Béla",
          dateOfBird: "2021.11.03",
          locality: "Szolnok",
          zipCode: "5052",
          neme: true,
          professionId: 1
        },
        {
          id: 3,
          name: "Zöld Mónika",
          dateOfBird: "2021.11.03",
          locality: "Budapest",
          zipCode: "5052",
          neme: true,
          professionId: 1
        },
        {
          id: 4,
          name: "Fehér Enikő",
          dateOfBird: "2021.11.03",
          locality: "Kecskemét",
          zipCode: "6055",
          neme: true,
          professionId: 1
        },
        {
          id: 5,
          name: "Rácz Anna",
          dateOfBird: "2021.11.03",
          locality: "Szolnok",
          zipCode: "5052",
          neme: true,
          professionId: 1
        },
        {
          id: 6,
          name: "Bors István",
          dateOfBird: "2021.11.03",
          locality: "Újszász",
          zipCode: "5052",
          neme: true,
          professionId: 1
        },
        {
          id: 7,
          name: "Komár László",
          dateOfBird: "2021.11.03",
          locality: "Újszász",
          zipCode: "5052",
          neme: true,
          professionId: 1
        },
        {
          id: 8,
          name: "Zsír József",
          dateOfBird: "2021.11.03",
          locality: "Újszász",
          zipCode: "5052",
          neme: true,
          professionId: 1
        },
        {
          id: 9,
          name: "Regős János",
          dateOfBird: "2021.11.03",
          locality: "Újszász",
          zipCode: "5052",
          neme: true,
          professionId: 1
        },
        {
          id: 10,
          name: "Kolbász Julianna",
          dateOfBird: "2021.11.03",
          locality: "Újszász",
          zipCode: "5052",
          neme: true,
          professionId: 1
        },
      ],
      professions : [
        {
          id: 1,
          name: "Asztalos"
        },
        {
          id: 2,
          name: "Villanyszerelő"
        },
        {
          id: 1,
          name: "Programozó"
        },
        {
          id: 1,
          name: "Könyvelő"
        },
        {
          id: 1,
          name: "Kereskedő"
        },
      ]
    }
  }
}
</script>

<style>

</style>