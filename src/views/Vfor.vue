<template>
  <div>
    <h2>v-for</h2>
    <div class="row">
      <!-- lista -->
      <div class="col-5">
        <h3>Lista</h3>
        <ul>
          <li v-for="(tanulo, index) in tanulok" :key="index">
            {{ tanulo.nev }}, {{ tanulo.osztaly }}, {{ tanulo.atlag }}
          </li>
        </ul>
      </div>
      <!-- táblázat -->
      <div class="col-7">
        <h3>Táblázat</h3>
        <div class="table-responsive">
          <table class="table w-auto">
            <thead>
              <tr>
                <th scope="col">Név</th>
                <th scope="col">Osztály</th>
                <th scope="col">Átlagok</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(tanulo, index) in tanulok" :key="index">
                <td class="text-nowrap">{{ tanulo.nev }}</td>
                <td class="text-center">{{ tanulo.osztaly }}</td>
                <td class="text-end">{{ tanulo.atlag }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tanulok: [
        { nev: "pisti", osztaly: "3a", atlag: 4.7 },
        { nev: "béla", osztaly: "1a", atlag: 3.7 },
        { nev: "anna", osztaly: "1a", atlag: 4.2 },
        {
          nev: "vitéz címzetes nemes jeles nagyérdemű gróf nemzetes jenő ",
          osztaly: "2a",
          atlag: 2.7,
        },
        { nev: "áron", osztaly: "1a", atlag: 4.3 },
        { nev: "feri", osztaly: "2a", atlag: 3.3 },
        { nev: "áron", osztaly: "2a", atlag: 3.3 },
        { nev: "emese", osztaly: "1a", atlag: 2.9 },
        { nev: "áron", osztaly: "1b", atlag: 4.8 },
        { nev: "évi", osztaly: "3a", atlag: 2.7 },
      ],
    };
  },
};
</script>

<style>
</style>