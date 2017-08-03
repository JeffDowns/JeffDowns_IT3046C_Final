<template>
  <v-container>
    <input id="passedURL" type="text" v-model="newImage.url" placeholder="Enter Image URL">
    <v-btn small :loading="loading" @click="addImage" @click.native="loader = 'loading'" :disabled="loading">Add Image</v-btn>
  
    <v-btn small @click="clearURL">Clear URL</v-btn>
    <v-flex>
      <v-carousel>
        <v-carousel-item v-for="image in images" :src="image.url" :key="image.id"></v-carousel-item>
      </v-carousel>
    </v-flex>
  </v-container>
</template>
    
<<script>
export default {
  data (){
    return {
      loader: null,
        loading: false,
              newImage: {},
      images: []
    }
  },
   watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 2000)

        this.loader = null
      }
    },
  methods: {
    addImage: function (e) {
      this.images.push({
        url: this.newImage.url,
        id: Math.random()
      })
      e.preventDefault()
    },
    clearURL: function () {
      document.getElementById("passedURL").value = ""
    }
  }
}
</script>
