<template>
    <!-- Modal -->
    <div
      class="modal fade"
      id="modal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered"
        :class="{
          'modal-xl': size == 'xl',
          'modal-lg': size == 'lg',
          'modal-sm': size == 'sm',
        }"
      >
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">{{ title }}</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <!-- Modal body -->
          <div class="modal-body">
            <slot></slot>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              {{ no }}
            </button>
            <button 
              type="button" 
              class="btn btn-danger" 
              data-bs-dismiss="modal"
              @click="onClicYesButton()"
              >
              {{ yes }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ["title", "yes", "no", "size"],
    methods: {
      onClicYesButton(){
        this.$emit("yesEvent")
      }
    }
  };
  </script>
  
  <style>
  </style>