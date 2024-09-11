<template>
  <div>
    <h2>Css adatkötés (css binding)</h2>
    <h3>Szövegközi stílus</h3>
    <input type="range" v-model="opacityVal" min="0" max="1" step="0.1" />
    <div :style="{ backgroundColor: 'rgba(155,20,20,' + opacityVal + ')' }">
      szövegközi stílus
    </div>

    <h3>Osztály hozzárendelés (assign a class)</h3>
    <ul>
      <li
        v-for="(gyumolcs, i) in gyumolcsok"
        :key="i"
        @click="onClickGyumolcs(gyumolcs)"
        @mouseover="overGyumolcs(gyumolcs)"
        @mouseout="outGyumolcs()"
      >
        <span
          :class="{
            kivalasztva: gyumolcs === selectedGyumolcs,
            felette: gyumolcs === overedGyumolcs,
          }"
        >
          {{ gyumolcs }}
        </span>
      </li>
    </ul>
    <h3>Camel case vs kebab case jelölés a 'v-bind:style'-nál</h3>
    <div
      v-bind:style="{ backgroundColor: 'lightpink', 'font-weight': 'bolder' }"
    >
      Camel case: backgroundColor <br />
      Kebab case: background-color <br />
    </div>

    <h3>Tömb szintaxis</h3>
    <div :class="[{ vastagClass: isImportant }, 'sárgaClass', 'doboz' ]">
    This div tag belongs to one or two classes depending on the isImportant property.
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      opacityVal: 0,
      gyumolcsok: ["alma", "barack", "körte"],
      selectedGyumolcs: null,
      overedGyumolcs: null,
      isImportant: true
    };
  },
  methods: {
    onClickGyumolcs(gyumolcs) {
      this.selectedGyumolcs = gyumolcs;
    },
    overGyumolcs(gyumolcs) {
      this.overedGyumolcs = gyumolcs;
    },
    outGyumolcs() {
      this.overedGyumolcs = null;
    },
  },
};
</script>

<style scope>
h3{
    margin-top: 1rem;
}

.kivalasztva {
  color: red;
}
.felette {
  background-color: silver;
}
li {
  cursor: pointer;
}

.vastagClass {
  font-weight: bold;
}
.sárgaClass {
  background-color: rgb(255, 255, 139);
}
.doboz {
  border: dashed black 1px;
  width: 200px;
  margin: 20px;
  padding: 20px;
}
</style>