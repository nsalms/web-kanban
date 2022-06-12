<template>

  <v-card class="my-4" outlined :to="{ name: 'id-card', params: { card: cardRef.id } }" nuxt>
    <v-card-text>
      <div class="text-h5 mb-2 text--primary">
        {{ cardRef.properties[0].text }}
      </div>
      <div class="mb-4 text--primary">
        <!-- {{cardRef.properties[1].text}} -->
      </div>
    </v-card-text>
  </v-card>

</template>

<script>
export default {

  props: {
    cardRef: Object
  }

}
</script>

<style>
</style>