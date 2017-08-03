<template>
  <form>
    <input type="text" v-model="newImage.url" placeholder="Enter Image URL">
    <input type="submit" value="Add Image" @click="addImage">
    <v-carousel icon="stop">
      <v-carousel-item v-for="image in images" v-bind:src="image.url" :key="image.url"></v-carousel-item>
    </v-carousel>
  </form>
</template>
<<script>
export default {
  data (){
    return {
      newImage: {},
      images: []
    }
  },
  methods: {
    addImage: function (e) {
      this.images.push({
        url: this.newImage.url
      })
    }
  }
}
</script>
