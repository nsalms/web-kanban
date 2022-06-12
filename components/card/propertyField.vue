<template>
  <v-row dense style="flex-wrap: nowrap">
    <v-col cols="2" class="flex-grow-0 flex-shrink-0 d-flex align-center">
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
            v-model="propertyName"
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
              <v-subheader class="pl-0 text-uppercase"
                >Property name</v-subheader
              >
              <v-text-field
                v-model="propertyName"
                autofocus
                class="mb-0"
                placeholder="Property name"
                outlined
                dense
                hide-details
              ></v-text-field>
              <v-subheader class="pl-0 text-uppercase"
                >Property Type</v-subheader
              >
              <v-select
                class="mb-6"
                v-model="propertyType"
                :menu-props="{ offsetY: true }"
                :items="availableTypes"
                label="Property Type"
                dense
                flat
                solo
                outlined
                hide-details
                :disabled="propertyIndex == 0"
                @change="propertyText=''"
              ></v-select>
              <v-btn
                block
                color="error"
                outlined
                @click="deleteProperty({ todoId, propertyIndex })"
                :disabled="propertyIndex == 0"
              >
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
      class="flex-grow-1 flex-shrink-0 d-flex align-center"
    >
      <v-container class="pa-0" fluid>
        <!-- !!!!!!!! -->
        <v-text-field
          v-if="propertyType == 'Text'"
          v-model="propertyText"
          placeholder="Empty"
          outlined
          dense
          hide-details
        ></v-text-field>
        <v-textarea
          v-if="propertyType == 'Textarea'"
          v-model="propertyText"
          placeholder="Empty"
          outlined
          dense
          hide-details
        ></v-textarea>
        <v-checkbox
          class="mt-0 pt-0 align-baseline"
          v-if="propertyType == 'Checkbox'"
          v-model="propertyText"
          hide-details
        ></v-checkbox>

        <v-combobox
          v-if="propertyType == 'Multi-select'"
          v-model="propertyText"
          chips
          label="Empty"
          multiple
          solo
          outlined
          dense
          hide-details
          append-icon=""
          flat
        >
          <template v-slot:selection="{ attrs, item, select, selected }">
            <v-chip
              class="my-2"
              v-bind="attrs"
              :input-value="selected"
              label
              small
              @click="select"
            >
              <strong>{{ item }}</strong>
            </v-chip>
          </template>
        </v-combobox>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { mapDynamicFields } from "~/modules/mapDynamicFields.js";

export default {
  data() {
    return {
      availableTypes: ["Text", "Date", "Select", "Multi-select", "Checkbox", "Textarea"],
      stringPath: "fieldA",
    };
  },
  props: {
    propertyIndex: Number,
    todoId: String,
  },
  computed: {
    ...mapDynamicFields(
      "main",
      {
        propertyName: "listTodos[=0].properties[=1].name",
        propertyType: "listTodos[=0].properties[=1].type",
        propertyText: "listTodos[=0].properties[=1].text",
      },
      ["todoId", "propertyIndex"]
    ),
  },
  methods: {
    ...mapMutations("main", ["deleteProperty"]),
  },
};
</script>



