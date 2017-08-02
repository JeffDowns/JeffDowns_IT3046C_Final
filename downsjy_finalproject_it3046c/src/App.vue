<template>
  <v-app dark>
    <v-toolbar>
      <v-toolbar-title>
        <router-link to="/" tag="span">Final Project</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat v-for="item in menuItems" :key="item.title" router :to="item.link">
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      hamburger: false,
      menuItems: [
        { title: "About", link: '/About' },
        { title: 'Materials Used', link: '/Materials' },
        { title: 'Author', link: '/Author' }
      ]
    }
  }
}
</script>


<style lang="stylus">
  @import './stylus/main'
</style>
