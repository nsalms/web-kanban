<template>
  <v-container>
    <v-card outlined>
      <v-toolbar flat>
        <v-btn icon to="/" nuxt>
            <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <v-toolbar-title>{{ todoId }}</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <propertyField
          v-for="(field, index) in getListOfProperties(todoId)"
          :key="field.id"
          :todo-id="todoId"
          :property-index="index"
        />
        <v-row dense style="flex-wrap: nowrap">
          <v-btn plain @click="addNewProperty(todoId)">
            <v-icon left> mdi-plus </v-icon>
            Add a property
          </v-btn>
        </v-row>

      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

import propertyField from "../../components/card/propertyField";

export default {
  components: { propertyField },
  data() {
    return {
      todoId: {}
    };
  },
  created() {
   console.log(this.$route.params)
   console.log(this.$route.name)
},
  computed: {
    ...mapGetters('main', ["getListOfProperties"]),
  },
  mounted: function () {
    this.todoId = this.$route.params.card;
  },
  methods: {
    ...mapMutations('main', ['addNewProperty']),
  }
};
</script>