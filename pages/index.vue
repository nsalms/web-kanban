<template>
  <v-container>
  
  <v-row>
      <v-col
        v-for="n in 3"
        :key="n"
        cols="12"
        sm="4"
      >
          <v-row dense>
        <v-col cols="12">
    <v-card
    outlined
  >
    <v-card-text>
      <div class="text-h5 mb-2 text--primary">
        Unlimited music now
      </div>
      <div class="mb-4 text--primary">
Listen to your favorite artists and albums whenever and wherever, online and offline.
      </div>
<div class="mb-4 text--primary">
        10/01/2021
        </div>
        
        <v-chip-group class="mb-0">
        <v-chip label outlined>Теги</v-chip>
        <v-chip label outlined>Теги</v-chip>
        <v-chip label outlined>Теги</v-chip>
        <v-chip label outlined>Теги</v-chip>
        </v-chip-group>

        
        </v-card-text>
  </v-card>
  </v-col>
  </v-row>
      </v-col>
    </v-row>

    Hello World
    <v-btn plain>
      <v-icon left>
        mdi-pencil
      </v-icon>
      Создать</v-btn>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      lists: 0,
      costs: 0
      }
  },
  methods: {
    // getResult() {
    //   this.count++
    // }
  },
  computed: {
    // геттер вычисляемого свойства
    calcCost() {
      let prise = 12;
      if (this.lists >= 5) prise = 11
      if (this.lists >= 10) prise = 10
      if (this.lists >= 100) prise = 7
      return this.lists * prise
    }
  },
  watch: {
    // lists() {
    //   getResult();
    // }
  }
}

</script>

<style>

</style>
