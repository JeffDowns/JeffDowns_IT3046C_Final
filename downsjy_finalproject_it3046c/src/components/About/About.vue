<template>
  <v-expansion-panel>
    <v-expansion-panel-content v-for="topic in topics" :key=topic.id>
      <div slot="header">{{topic.name}}</div>
      <v-card>
        <v-card-text dark>
          <p>{{topic.text}} <a v-bind:href="topic.link">{{topic.link}}</a></p>
          
        </v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<<script>
export default {
  data () {
    return {
      topics: [
        {
          id: '1',
          name: 'What is this website?',
          text: `The website that you are viewing is a simple illustration of the capabilities
                 of the Vue.js framework`
        },
         {
          id: '2',
          name: 'Why do I care?',
          text: `Vue.js can make development much easier. Instead of typing all elements and 
                 and setting all of the properties, you can simply create an array of objects
                 with the properties you want adn iterate through them in a single vue instance.`
        },
        {
          id: '3',
          name: 'So all of this comes with Vue.js?',
          text: `Well, not entirely. Vue.js will give you the principle dependencies and setup for the framework itself.
                 the flashy menus and components will come from a seperate semantic componant framework known as Vuetify`
        },
        {
          id: '4',
          name: 'Will this mean that I have to learn a new programming language?',
          text: `Not really... The Vue.js framework is built on vanilla javascript. There are some new concepts that one must learn before adventuring through the massive possibilities of Vue.js.
          That being said, there are tons of tutorials and documentation entries to help users like you and I`
        },
        {
          id: '5',
          name: 'Where can I get started with Vue.js?',
          text: `Information on installation, utilization, and execution can be found by following the link:`,
          link: 'https://vuejs.org/'
        }
      ]
    }
  }
}
</script>
<style scoped>
p {
  text-align: center;
  padding: 5px;
}
a {
  margin: 0 auto;
}
</style>
