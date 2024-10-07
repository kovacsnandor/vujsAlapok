<template>
  <div>
    <transition
      appear
      name="fade"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
    >
      <h1 v-if="showTitle">About</h1>
    </transition>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum,
      tempora?
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum,
      tempora?
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum,
      tempora?
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showTitle: true,
    };
  },
  methods: {
    beforeEnter() {
      console.log("beforeEnter");
    },
    enter() {
      console.log("enter");
    },
    afterEnter() {
      console.log("afterEnter");
      setTimeout(() => {
        this.showTitle = false;
      }, 2000);
    },
    beforeLeave(){
      console.log("beforeLeave");
    },
    leave(){
      console.log("before");
    },
    afterLeave(){
      console.log("afterLeave");
    }
  },
};
</script>

<style scoped>
/* Animation helo*/
.fade-enter-from {
  opacity: 0;
}
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active {
  transition: all 3s ease;
}
.fade-leave-active {
  transition: all 2s ease;
}
</style>