<template>
  <div>
    <input
      type="text"
      v-model="newTodo"
      @keypress.enter="addTodo()"
      placeholder="Add a new todo..."
    />
    <ul class="list-group mt-3" v-if="todos.length">
      <li class="list-group-item" v-for="(todo, i) in todos" :key="i">
        {{ todo }}
      </li>
    </ul>
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
    addTodo(){
        if (this.newTodo) {
            this.todos.push(this.newTodo)
            this.newTodo= null;
        } else {
           this.$emit('emptyText', 'A mező kitöltése kötelező') 
        }
    }
  }
};
</script>

<style>
</style>