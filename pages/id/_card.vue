<template>
  <v-container>
    <v-card outlined>
      <v-toolbar flat>
        <v-btn icon>
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <v-toolbar-title>{{ todoId }}</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <propertyField
          v-for="field in getListOfProperties(todoId)"
          :key="field.propertyId"
          :todo-id="todoId"
          :property-id="field.propertyId"
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
      todoId: {},
    };
  },
  computed: mapGetters(["getListOfProperties"]),
  mounted: function () {
    this.todoId = this.$route.params.card;
  },
  methods: {
    ...mapMutations(['addNewProperty']),
  }
};
</script>