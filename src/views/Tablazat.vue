<template>
  <h1>Táblázat</h1>
  <div id="app" class="my-container container-fluid mt-5">

    <!-- Táblázat -->
    <table class="table table-info table-striped table-hover">
      <thead>
        <tr>
          <th scope="col" class="my-sort-cursor" @click="onClickHead('név')">
            Név <span class="my-irany-width" v-html="iranyJel('név')"></span>
          </th>
          <th
            scope="col"
            class="my-sort-cursor"
            @click="onClickHead('osztály')"
          >
            Osztály
            <span class="my-irany-width" v-html="iranyJel('osztály')"></span>
          </th>
          <th
            scope="col"
            class="my-sort-cursor"
            @click="onClickHead('született')"
          >
            Született
            <span class="my-irany-width" v-html="iranyJel('született')"></span>
          </th>
          <th
            scope="col"
            class="my-sort-cursor"
            @click="onClickHead('ösztöndíj')"
          >
            Ösztöndíj
            <span class="my-irany-width" v-html="iranyJel('ösztöndíj')"></span>
          </th>
          <th scope="col" class="my-sort-cursor" @click="onClickHead('átlag')">
            Átlag
            <span class="my-irany-width" v-html="iranyJel('átlag')"></span>
          </th>
          <th scope="col" class="my-sort-cursor" @click="onClickHead('neme')">
            neme <span class="my-irany-width" v-html="iranyJel('neme')"></span>
          </th>
        </tr>
      </thead>
      <tbody>
        <!-- sor template -->
        <tr v-for="tanulo in szurtTanulok" :key="tanulo.id">
          <td>{{ tanulo.név }}</td>
          <td>{{ tanulo.osztály }}</td>
          <td>{{ tanulo.szülév }}</td>
          <td>{{ tanulo.ösztöndíj }}</td>
          <td>{{ tanulo.átlag }}</td>
          <td>{{ tanulo.neme }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  inject: ["searchWord"],
  data() {
    return {
      message: "Hello Vue!",
      novekvo: null,
      order: "név",
      tanulok: [
        {
          id: 1,
          név: "pisti",
          osztály: "10a",
          szülév: 2003,
          ösztöndíj: 4500,
          átlag: 3.5,
          neme: "fiú",
        },
        {
          id: 2,
          név: "géza",
          osztály: "10b",
          szülév: 2004,
          ösztöndíj: 2003,
          átlag: 4.5,
          neme: "fiú",
        },
        {
          id: 3,
          név: "anna",
          osztály: "10a",
          szülév: 2004,
          ösztöndíj: 1500,
          átlag: 2.7,
          neme: "lány",
        },
        {
          id: 4,
          név: "elemér",
          osztály: "10a",
          szülév: 2003,
          ösztöndíj: 4500,
          átlag: 3.8,
          neme: "fiú",
        },
        {
          id: 5,
          név: "roland",
          osztály: "10b",
          szülév: 2003,
          ösztöndíj: 5500,
          átlag: 3.5,
          neme: "fiú",
        },
        {
          id: 6,
          név: "betti",
          osztály: "10a",
          szülév: 2004,
          ösztöndíj: 4500,
          átlag: 4.5,
          neme: "lány",
        },
        {
          id: 7,
          név: "gábor",
          osztály: "10a",
          szülév: 2003,
          ösztöndíj: 3500,
          átlag: 3.6,
          neme: "fiú",
        },
        {
          id: 8,
          név: "hugó",
          osztály: "10b",
          szülév: 2003,
          ösztöndíj: 4500,
          átlag: 4.3,
          neme: "fiú",
        },
        {
          id: 9,
          név: "enikő",
          osztály: "10a",
          szülév: 2004,
          ösztöndíj: 2500,
          átlag: 4.8,
          neme: "lány",
        },
        {
          id: 10,
          név: "feri",
          osztály: "10a",
          szülév: 2003,
          ösztöndíj: 5500,
          átlag: 3.2,
          neme: "fiú",
        },
        {
          id: 11,
          név: "ágota",
          osztály: "10b",
          szülév: 2003,
          ösztöndíj: 2500,
          átlag: 2.8,
          neme: "lány",
        },
        {
          id: 12,
          név: "sanyi",
          osztály: "10a",
          szülév: 2005,
          ösztöndíj: 1500,
          átlag: 4.2,
          neme: "fiú",
        },
        {
          id: 13,
          név: "péter",
          osztály: "10b",
          szülév: 2003,
          ösztöndíj: 3500,
          átlag: 4.2,
          neme: "fiú",
        },
        {
          id: 14,
          név: "andrea",
          osztály: "10a",
          szülév: 2004,
          ösztöndíj: 1500,
          átlag: 4.2,
          neme: "lány",
        },
      ],
    };
  },
  methods: {
    onClickHead(order) {
      if (this.order === order) {
        //ismételten rám kattintottak, irányt változtatok
        this.novekvo = !this.novekvo;
      } else {
        //Először kattintottak rám: növekvő leszek
        this.novekvo = true;
      }
      this.order = order;
      this.sortTable();
    },
    sortTable() {
      this.tanulok.sort((a, b) => {
        if (this.order == "név") {
          return this.novekvo
            ? a.név.localeCompare(b.név)
            : b.név.localeCompare(a.név);
        } else if (this.order == "osztály") {
          return this.novekvo
            ? a.osztály.localeCompare(b.osztály)
            : b.osztály.localeCompare(a.osztály);
        } else if (this.order == "született") {
          return this.novekvo ? a.szülév - b.szülév : b.szülév - a.szülév;
        } else if (this.order == "ösztöndíj") {
          return this.novekvo
            ? a.ösztöndíj - b.ösztöndíj
            : b.ösztöndíj - a.ösztöndíj;
        } else if (this.order == "átlag") {
          return this.novekvo ? a.átlag - b.átlag : b.átlag - a.átlag;
        } else if (this.order == "neme") {
          return this.novekvo
            ? a.neme.localeCompare(b.neme)
            : b.neme.localeCompare(a.neme);
        }
      });
    },
    iranyJel(order) {
      if (this.order == order) {
        //én rám kattintottak: mutatom az irányt
        return this.novekvo
          ? "<i class='bi bi-arrow-down'></i>"
          : "<i class='bi bi-arrow-up'></i>";
      } else {
        //Nem énrám kattintottak: nem mutatok semmit
        return "&nbsp";
      }
    },
  },
  computed: {
    szurtTanulok() {
       if (!this.searchWord) {
        return this.tanulok;
       } 
      return this.tanulok.filter((tanulo) => {
        return (
          tanulo.név.includes(this.searchWord) ||
          tanulo.neme.includes(this.searchWord) ||
          tanulo.osztály.includes(this.searchWord) ||
          tanulo.szülév == this.searchWord ||
          tanulo.ösztöndíj == this.searchWord ||
          tanulo.átlag == this.searchWord
        );
      });
    },
  },
};
</script>

<style scoped>
.my-sort-cursor {
  cursor: pointer;
}

.my-irany-width {
  width: 50px;
  display: inline-block;
}

th {
  white-space: nowrap;
}
</style>