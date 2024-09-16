<template>
  <div class="col">
    <div class="card">
      <!-- <img src="..." class="card-img-top" alt="..." /> -->
       <slot name="image"></slot>
       
       <div class="card-body">
          <slot name="title"></slot>

        <!-- <h5 class="card-title">Card title</h5>
        <p class="card-text">
          This is a longer card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p> -->
        <button 
            type="button" 
            class="btn btn-primary"
            @click="onClickReszletek()"
        >
            Részletek
        </button>

      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['id'],
    methods: {
        onClickReszletek(){
            this.$emit("reszletekModalKezeles", {id:this.id});
        }
    }

};
</script>

<style>
</style>