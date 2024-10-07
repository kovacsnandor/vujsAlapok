<template>
    <h1>Provide/Inject</h1>
    <p>Ez olyan hogy adom (provide: hidetem), és vigye (inject: befogadom), akinek kell</p>
    <p>A Provide/Inject egyirányú kommunikáció a komponensek között</p>
    <button type="button" class="btn btn-primary"
        @click="onClickSzamlalo()"
    >Számlálok előre: {{ count }}</button>
      <NekemNemKell />
  </template>
  
  <script>
  import NekemNemKell from '@/components/NekemNemKell.vue';
  import {computed} from 'vue'
  export default {
      components: {
          NekemNemKell
      },
      data(){
        return{
            count: 1
        }
      },
      provide(){
        return{
            //Ezt a változót odaadom, bárkinek akinek kell (aki injektálja)
            // count: this.count,
            //A count változót egy count nevű computed-ként hirdetem
            //aminek a függősége az eredeti count változó
            //tehát ha az változik, az injektált count is változik
            count: computed(()=>this.count)
        }
      },
      methods: {
        onClickSzamlalo(){
            this.count++;
        }
      }
      
  }
  </script>
  
  <style>
  
  </style>