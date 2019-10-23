<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>


      Here will be list of transactions

<!--      <v-flex xs2 v-for="game in games" :key="game.id">-->
<!--        <v-card>-->
<!--          <v-img-->
<!--                  :src="game.gameBoxUrl"-->
<!--                  aspect-ratio="1"-->
<!--          ></v-img>-->

<!--          <v-card-title primary-title>-->
<!--            <div>-->
<!--              <h3 class="headline mb-0"> {{ game.gameName }}</h3>-->

<!--            </div>-->
<!--          </v-card-title>-->

<!--          <v-card-actions>-->
<!--            <v-btn flat @click="goToStats(game.id)"   color="orange">Explore</v-btn>-->
<!--          </v-card-actions>-->
<!--        </v-card>-->
<!--      </v-flex>-->


    </v-layout>
  </v-container>


</template>

<script>
  export default {
    data()
    {
      return {
          games: null
      }
    },

    methods:
    {
      goToStats: function (gameId)
      {
        this.$router.push('/gamestats/' + gameId)
      }
    },

    mounted()
    {

      this.$axios
              .get('https://polish-twitch-stat.appspot.com/games/findAll')
              .then(response => (this.games = response.data))
              // eslint-disable-next-line no-console
              .catch(error => console.log(error))
    },



  }
</script>

<style>

</style>
