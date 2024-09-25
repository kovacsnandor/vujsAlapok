<template>
  <div class="todos">
    <input
      type="text"
      class="form-control"
      v-model="newTodo"
      @keypress.enter="addTodo()"
      placeholder="Add a new todo..."
    />

    <transition name="switch" mode="out-in">
      <transition-group
        tag="ul"
        name="list"
        class="list-group mt-3 my-ul"
        v-if="todos.length"
        appear
      >
        <li class="list-group-item" v-for="todo in todos" :key="todo">
          <span class="me-2 my-delete-cursor" @click="deleteTodo(todo)">
            <i class="bi bi-trash3"></i>
          </span>
          {{ todo }}
        </li>
      </transition-group>
      <div v-else>Nincs semmi tennivaló!</div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: null,
      todos: ["reggeli", "ebéd", "vacsora"],
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo) {
        this.todos.push(this.newTodo);
        this.newTodo = null;
      } else {
        this.$emit("emptyText", "A mező kitöltése kötelező");
      }
    },
    deleteTodo(todo) {
      this.todos = this.todos.filter((t) => t != todo);
    },
  },
};
</script>

<style scoped>
.my-delete-cursor {
  cursor: pointer;
  color: red;
}

.my-ul {
  position: relative;
}

/* Animation list*/
.list-enter-from {
  opacity: 0;
  transform: scale(0.6);
}
.list-enter-to {
  opacity: 1;
  transform: scale(1);
}
.list-enter-active {
  transition: all 0.4s ease;
}

.list-leave-from {
  opacity: 1;
  transform: scale(1);
}
.list-leave-to {
  opacity: 0;
  transform: scale(0.6);
}

.list-leave-active {
  transition: all 0.4s ease;
  position: absolute; /* amikor kiviszi jól csússzon fel*/
}

.list-move {
  /* Amikor beteszi, animálva csússzon */
  transition: all 0.5s ease;
}

/* switch */
.switch-enter-from,
.switch-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* nem kell, mert alapértelmezettek */
/* .switch-enter-to, .switch-leave-from {
  opacity: 1;
  transform: translateY(0);
} */
.switch-enter-active,
.switch-leave-active {
  transition: all 0.5s ease;
}
</style>