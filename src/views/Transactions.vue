<template>
  <v-container grid-list-md text-xs-center>


    <v-layout row wrap>
      <v-flex xs12  v-for="transaction in transactions" :key="transaction.number">
<!--        sm12 md12 lg12 xl12-->



        <v-card color="blue darken-2" class="white--text">
          <v-layout>
<!--            <v-flex xs6>-->
              <v-card-title primary-title>
                  <div class="text-sm-left">
                      <div class="headline"> <v-icon>fingerprint</v-icon>   Transaction:  {{ transaction.hash }}</div>
                  </div>
              </v-card-title>

              <v-spacer></v-spacer>

            <div> <v-icon>alarm</v-icon>            Time:   {{ transaction.transactionDate }} </div>
            <div> <v-icon>monetization_on</v-icon>  Amount: {{  transaction.moneyAmount }} ETH </div>
            <div>   gasAmount: {{  transaction.gasAmount }}  </div>
            <div>   sourceClientHash: {{  transaction.sourceClientHash }}  </div>
            <div>   destinationClientHash: {{  transaction.destinationClientHash }}  </div>
            <div>   blockHash: {{  transaction.blockHash }}  </div>
<!--            </v-flex>-->

          </v-layout>
          <v-divider light></v-divider>
          <v-card-actions class="pa-3">

            <v-spacer></v-spacer>
            <v-btn color="secondary" class="white--text" @click="goToTransaction(transaction.hash)">Explore</v-btn>  <!-- router :to="stats" -->

          </v-card-actions>
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

        transactions: [
          {hash: "0x7c79b95ad939d97d0c7e1b2d4ce317dadeaad2a2d8fea950eaf844a7d0fe0107", time: "01.01.2010 17:44", amount: "0.04491600"},
          {hash: "0xf23bac8d33efc982b4a8b09b4e8ff102d949049cde7fdb33882423b3874e84dc", time: "01.01.2013 12:27", amount: "0.0000484715"},
          {hash: "0x750265ec5e899f53c675f2906ea61c359d4ed675ff4cdce17778109457775412", time: "01.01.2016 11:12", amount: "0.00870019"},
          {hash: "0x7c79b95ad939d97d0c7e1b2d4ce317dadeaad2a2d8fea950eaf844a7d0fe0107", time: "01.01.2018 23:45", amount: "0.04491600"},
          {hash: "0x7c79b95ad939d97d0c7e1b2d4ce317dadeaad2a2d8fea950eaf844a7d0fe0107", time: "01.01.2018 23:45", amount: "0.04491600"},
          {hash: "0x7c79b95ad939d97d0c7e1b2d4ce317dadeaad2a2d8fea950eaf844a7d0fe0107", time: "01.01.2018 23:45", amount: "0.04491600"},
          {hash: "0x7c79b95ad939d97d0c7e1b2d4ce317dadeaad2a2d8fea950eaf844a7d0fe0107", time: "01.01.2018 23:45", amount: "0.04491600"},
          {hash: "0x7c79b95ad939d97d0c7e1b2d4ce317dadeaad2a2d8fea950eaf844a7d0fe0107", time: "01.01.2018 23:45", amount: "0.04491600"},
          {hash: "0x7c79b95ad939d97d0c7e1b2d4ce317dadeaad2a2d8fea950eaf844a7d0fe0107", time: "01.01.2018 23:45", amount: "0.04491600"},
          {hash: "0x7c79b95ad939d97d0c7e1b2d4ce317dadeaad2a2d8fea950eaf844a7d0fe0107", time: "01.01.2018 23:45", amount: "0.04491600"},
          {hash: "0x7c79b95ad939d97d0c7e1b2d4ce317dadeaad2a2d8fea950eaf844a7d0fe0107", time: "01.01.2018 23:45", amount: "0.04491600"},
        ],


      }
    },

    methods: {

      goToTransaction: function (transactionNumber)
      {
        this.$router.push('/transactions/' + transactionNumber)
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

    filters: {
      currencydecimal (value) {
          return value.toFixed(2)
      }
    },



  }
</script>

<style>

</style>
