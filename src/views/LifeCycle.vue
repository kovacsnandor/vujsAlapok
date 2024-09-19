<template>
  <div>
    <h1>Life cycle</h1>
    <div>
      <button type="button" class="btn btn-primary"
        @click="onClickButton()"
      >
        {{counter}}
      </button>
      <button type="button" class="btn btn-danger"
        @click="ErrorGen()"
      >
        Hiba generálás
      </button>
    </div>


  </div>
</template>

<script>
export default {
  data(){
    return {
      counter: 0
    }
  },
  beforeCreate(){
    console.log("beforeCreate","");
  },
  created(){
    console.log("created","");
  },
  beforeMount(){
    console.log("beforeMount","");
  },
  mounted(){
    console.log("mounted","");
  },
  beforeUpdate(){
    console.log("beforeUpdate","");
  },
  updated(){
    console.log("updated","");
  },
  beforeUnmount(){
    console.log("beforeUnmount","");
  },
  beforeMount(){
    console.log("beforeMount","");
  },
  unmounted(){
    console.log("unmounted","");
  },
  // errorCaptured(){
  //   console.log("errorCaptured","");
  // },
  renderTracked(){
    console.log("renderTracked","");
  },
  renderTriggered(){
    console.log("renderTriggered","");
  },
  activated(){
    console.log("activated","");
  },
  deactivated(){
    console.log("deactivated","");
  },
  serverPrefetch(){
    console.log("serverPrefetch","");
  },
  methods: {
    onClickButton(){
      this.counter++;
    },
    ErrorGen(){
      this.$refs.objEl.innerHTML = "hi";
    }
  }

}
</script>

<style>

</style>