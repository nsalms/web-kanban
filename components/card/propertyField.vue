<template>
  <v-row dense style="flex-wrap: nowrap">
    <v-col cols="2" class="flex-grow-0 flex-shrink-0">
      <v-menu
        :close-on-content-click="false"
        offset-y
        transition="scale-transition"
        origin="center top"
        max-width="250"
        width="250"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            placeholder="Property"
            outlined
            dense
            hide-details
            v-bind="attrs"
            v-on="on"
            readonly
          ></v-text-field>
        </template>

        <v-card>
          <v-card-text class="mb-0">
            <v-form>
              <v-subheader class="pl-0 text-uppercase">Property name</v-subheader>
              <v-text-field
                autofocus
                class="mb-0"
                placeholder="Property name"
                outlined
                dense
                hide-details
              ></v-text-field>
              <v-subheader class="pl-0 text-uppercase">Property Type</v-subheader>
              <v-select class="mb-6"
                :menu-props="{ offsetY: true }"
                :items="availableTypes"
                label="Property Type"
                dense
                flat
                solo
                outlined
                hide-details
              ></v-select>
                    <v-btn block color="error" outlined @click="deleteProperty({todoId, propertyId})">
            <v-icon left> mdi-delete </v-icon>
            Delete property
          </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-menu>
    </v-col>
    <v-col
      cols="1"
      style="min-width: 100px; max-width: 100%"
      class="flex-grow-1 flex-shrink-0"
    >
      <!-- !!!!!!!! -->
      <v-text-field
        v-model="fieldText"
        placeholder="Empty"
        outlined
        dense
        hide-details
      ></v-text-field>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  data() {
    return {
      availableTypes: ["Text", "Date", "Select", "Multi-select"],
    };
  },
  props: {
    propertyId: Number,
    todoId: String 
  },
  computed: {
    ...mapGetters(['getPropertyField']),

    fieldName: {
      get () {
        return this.getPropertyField(this.todoId, this.propertyId).text
      },
      set (newValue) {
        this.updatePropertyText({
          todoId: this.todoId,
          propertyId: this.propertyId,
          newValue: newValue
          })
      }
    },
    fieldType: {
      get () {
        return this.getPropertyField(this.todoId, this.propertyId).text
      },
      set (newValue) {
        this.updatePropertyText({
          todoId: this.todoId,
          propertyId: this.propertyId,
          newValue: newValue
          })
      }
    },
    fieldText: {
      get () {
        return this.getPropertyField(this.todoId, this.propertyId).text
      },
      set (newValue) {
        this.updatePropertyText({
          todoId: this.todoId,
          propertyId: this.propertyId,
          newValue: newValue
          })
      }
    },
  },
  methods: {
    ...mapMutations(['updatePropertyText', 'deleteProperty']),
  }
};
</script>