<template>
  <v-app dark>
    <v-tabs dark fixed centered>
      <v-tabs-bar slot="activators" class="black">
        <v-tabs-slider class="purple"></v-tabs-slider>
        <v-tabs-item v-for="material in materials" :key="material.name" :href="'#tab-' + material.id">
          {{ material.name }}
        </v-tabs-item>
      </v-tabs-bar>
      <v-tabs-content v-for="material in materials" :key="material.information" :id="'tab-' + material.id">
        <v-flex>
          <v-card flat>
            <img :src="material.imageURL">
            </img>
            <v-card-title primary-title>
              <h3>{{material.name}}</h3>
            </v-card-title>
            <v-card-text>{{material.information}}</v-card-text>
          </v-card>
        </v-flex>
      </v-tabs-content>
    </v-tabs>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      materials: [
        {
          id: '1',
          name: 'Vue.js',
          information: `Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is very easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page 
                         Applications when used in 
                         combination with modern tooling and supporting libraries.`,
          imageURL: "https://vuejs.org/images/logo.png"
        },
        {
          id: '2',
          name: 'Vuetify',
          information: `Vuetify.js is a semantic component framework for Vue.js 2. 
          It aims to provide clean, semantic and reusable components that make building
           your application a breeze. Vuetify.js uses Google's Material 
           Design design pattern, taking cues from other popular frameworks such
            as Materialize.css, Material Design Lite, Semantic UI and Bootstrap 4
            Build amazing applications with the power of Vue and Material Design with a 
            massive library of beautifully crafted components. Built for speed, Vuetify 
            components feature an easy-to-remember semantic design that shifts remembering 
            complex classes and markup, to type-as-you speak properties that have simple and 
            clear names.
            Vuetify.js supports all modern browsers, including IE11 and Safari 9+. 
            From mobile to laptop to desktop, you can rest assured that your application
             will work as expected. Interested in the bleeding edge? Try the vue-cli Webpack 
             SSR (Server side rendered) template and build the ultimate UI.`,
          imageURL: 'https://vuetifyjs.com/static/v.png'
        }
      ]
    }
  }
}
</script>
<style>
h3 {
  color: white;
  text-align: center;
}

img {
  display: block;
  margin: auto;
  width: 10%;
  border-radius: 220px;
}
</style>