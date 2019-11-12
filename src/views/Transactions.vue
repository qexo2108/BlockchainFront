<template>
  <v-container grid-list-md text-xs-center>


    <v-layout row wrap>
      <v-flex xs12  v-for="transaction in transactions" :key="transaction.hash">
<!--        sm12 md12 lg12 xl12-->



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
                    <div> <v-icon>alarm</v-icon>            Time:   {{ transaction.transactionDate }} </div>
                    <div> <v-icon>monetization_on</v-icon>  Amount: {{  transaction.moneyAmount }} ETH </div>


                </v-flex>
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

import {address} from '../main'

export default {
data()
{
  return {

    transactions: []

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
          .get(address + 'transactions')
          .then(response => (this.transactions = response.data))
          // eslint-disable-next-line no-console
          .catch(error => console.log(error))
},





}

</script>
