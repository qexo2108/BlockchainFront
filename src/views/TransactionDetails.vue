<template>
  <v-container grid-list-md text-xs-center>



    <v-layout row wrap>
      <v-flex xs12 sm12 md12 lg12 xl12>


        <v-card color="blue darken-2" class="white--text">
          <v-layout row wrap >

            <v-flex xs9>
              <v-card-title primary-title>
                <div class="text-sm-left">
                  <div class="headline"> <v-icon>fingerprint</v-icon>     {{ transaction.hash }}</div>
                </div>
              </v-card-title>
            </v-flex>
            <v-flex xs3>
              <v-spacer></v-spacer>
              <div> <v-icon>alarm</v-icon>            Time:   {{ transaction.time }} </div>
              <div> <v-icon>monetization_on</v-icon>  Amount: {{  transaction.amount }} ETH </div>
            </v-flex>
          </v-layout>

            <v-divider></v-divider>


          <v-layout row wrap>
            <v-flex xs5>
              <div> {{ transaction.from }} </div>
            </v-flex>

            <v-flex xs2>
              <v-icon>arrow_forward</v-icon>
            </v-flex>

            <v-flex xs5>
              <div> {{ transaction.to }} </div>

            </v-flex>
          </v-layout>

          <v-divider></v-divider>

          <v-layout row wrap>
            <v-flex xs6>
              <div> <v-icon>confirmation_number</v-icon> Status: {{ transaction.status }} </div>
              <div> <v-icon>assignment_turned_in</v-icon> Confirmations: {{ transaction.confirmations }} </div>
            </v-flex>

            <v-flex xs6>
              <div> <v-icon>local_gas_station</v-icon> Gas price: {{ transaction.gasPrice }} </div>
            </v-flex>
          </v-layout>




        </v-card>



      </v-flex>
    </v-layout>


  </v-container>
</template>

<script>

  export default {
    data()
    {
      return {
          games: null,

        transaction:
            {hash: "0x7c79b95ad939d97d0c7e1b2d4ce317dadeaad2a2d8fea950eaf844a7d0fe0107", time: "01.01.2010 17:44", amount: "0.04491600", status: "Unconfirmed", confirmations: 0, from: "0xab5c66752a9e8167967685f1450532fb96d5d24f", to: "0xab5c66752a9e8167967685f1450532fb96d5d24f", gasPrice: "\n" + "0.00000004"}

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
