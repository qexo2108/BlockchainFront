<template>
  <v-app>

    <v-content>
    <Navbar/>
    </v-content>

    <v-content>
      <router-view></router-view>
    </v-content>

  </v-app>
</template>

<script>

import Navbar from './components/Navbar'

export default
{
  name: 'App',
  components: {
    Navbar
  },

}
</script>
