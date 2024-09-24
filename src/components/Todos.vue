<template>
  <div>
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        v-model="newTodo"
        @keypress.enter="addTodo()"
        placeholder="Add a new todo..."
      />
    </div>
      <transition-group tag="ul" name="list" class="list-group mt-3 my-ul" v-if="todos.length">
        <li
          class="list-group-item"
          v-for="(todo, i) in todos"
          :key="i"
        >
          <span class="me-2 my-delete-cursor" @click="deleteTodo(todo)">
            <i class="bi bi-trash3"></i>
          </span>
          {{ todo }}
        </li>
      </transition-group>
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

/* Animation helo*/
.list-enter-from {
  opacity: 0;
  transform: scale(0.6);
}
.list-enter-to {
  opacity: 1;
  transform: scale(1);
}
.list-enter-active {
  transition: all 2s ease;
}

.list-leave-active {
  transition: all 2s ease;
  position: absolute;
}
.list-move {
  transition: all 2s ease;
  
}


.list-leave-from {
  opacity: 1;
  transform: scale(1);
}
.list-leave-to {
  opacity: 0;
  transform: scale(0.6);
}

</style>