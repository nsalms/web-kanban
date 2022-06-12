<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="4">
        <v-chip color="red lighten-4" label>ToDo</v-chip>
        <div v-for="todo in getListOfTodos" :key="todo.id">
          <miniCard v-if="todo.properties[1].text === 'ToDo'" :card-ref="todo"></miniCard>
        </div>
        <v-btn block plain @click="addNewTodo('ToDo')">
          <v-icon left> mdi-plus   </v-icon>
          Add new
        </v-btn>
      </v-col>
      <v-col cols="12" sm="4">
        <v-chip color="yellow lighten-4" label>Doing</v-chip>
        <div v-for="todo in getListOfTodos" :key="todo.id">
          <miniCard v-if="todo.properties[1].text === 'Doing'" :card-ref="todo"></miniCard>
        </div>
        <v-btn block plain @click="addNewTodo('Doing')">
          <v-icon left> mdi-plus </v-icon>
          Add new
        </v-btn>
      </v-col>
      <v-col cols="12" sm="4">
        <v-chip color="green lighten-4" label>Done</v-chip>
        <div v-for="todo in getListOfTodos" :key="todo.id">
          <miniCard v-if="todo.properties[1].text === 'Done'" :card-ref="todo"></miniCard>
        </div>
        <v-btn block plain @click="addNewTodo('Done')">
          <v-icon left> mdi-plus </v-icon>
          Add new
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import miniCard from "../components/home-page/miniCard.vue";

import { mapMutations, mapGetters } from "vuex";

export default {
  components: { miniCard },
  computed: {
    ...mapGetters('main', ["getListOfTodos"]),
  },
  methods: {
    ...mapMutations('main', ['addNewTodo']),
  }
};
</script>

<style>
</style>
