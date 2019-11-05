<template>
  <v-container grid-list-md text-xs-center>

Here you will see transaction details in the future.
    <!--<v-layout row wrap>
      <v-flex xs12 sm12 md12 lg12 xl12 v-for="transaction in transactions" :key="transaction.number">




        <v-card color="blue darken-2" class="white&#45;&#45;text">
          <v-layout>
            <v-flex xs6>
              <v-card-title primary-title>
                <div>
                  <div class="headline">Block no. {{ transaction.number }}</div>



                  <div> <v-icon>gavel</v-icon>        Transactions: {{ transaction.transactions }} </div>
                  <div> <v-icon>storage</v-icon>       Size: {{  transaction.size }} </div>

                </div>
              </v-card-title>
            </v-flex>
            <v-flex xs6>
              <v-card-title primary-title>
                <div>
                  <div class="headline">Block no. {{ transaction.number }}</div>


                  <div> <v-icon>alarm</v-icon>        Mined:        {{ transaction.mined }} </div>


                </div>
              </v-card-title>
            </v-flex>
          </v-layout>
          <v-divider light></v-divider>
          <v-card-actions class="pa-3">

            <v-spacer></v-spacer>
            <v-btn color="secondary" class="white&#45;&#45;text" @click="goToTransaction(transaction.number)">Explore</v-btn>  &lt;!&ndash; router :to="stats" &ndash;&gt;

          </v-card-actions>
        </v-card>




        &lt;!&ndash;<v-flex xs6>


            <v-card color="blue darken-2" class="white&#45;&#45;text">
                <v-layout>
                    <v-flex xs2>
                        <v-img
                                :src="require('../assets/ethereum_blockchain-512.png')"
                                height="125px"
                                contain
                        ></v-img>
                    </v-flex>
                    <v-flex xs10>
                        <v-card-title primary-title>
                            <div>
                                <div class="headline">Block no. {{ transaction.number }}</div>

                                <div> <v-icon>fingerprint</v-icon>  Hash: {{ transaction.hash }} </div>
                                <div> <v-icon>alarm</v-icon>        Mined:        {{ transaction.mined }} </div>
                                <div> <v-icon>person</v-icon>       Miner: {{ transaction.miner }} </div>
                                <div> <v-icon>gavel</v-icon>        Transactions: {{ transaction.transactions }} </div>
                                <div> <v-icon>storage</v-icon>       Size: {{  transaction.size }} </div>

                            </div>
                        </v-card-title>
                    </v-flex>
                </v-layout>
                <v-divider light></v-divider>
                <v-card-actions class="pa-3">

                    <v-spacer></v-spacer>
                    <v-btn color="secondary" class="white&#45;&#45;text" @click="goToTransaction(transaction.number)">Explore</v-btn>  &lt;!&ndash; router :to="stats" &ndash;&gt;

                </v-card-actions>
            </v-card>

        </v-flex>&ndash;&gt;






      </v-flex>
    </v-layout>-->




  </v-container>


</template>

<script>

  export default {
    data()
    {
      return {
          games: null,

        transactions: [
          {number: 8803241, hash: "0x7c79b95ad939d97d0c7e1b2d4ce317dadeaad2a2d8fea950eaf844a7d0fe0107", mined: "01.01.2010", miner: "0x5a0b54d5dc17e0aadc383d2db43b0a0d3e029c4c", transactions: 128, size: 26.970},
          {number: 8803247, hash: "0x6d6be545a5b33013cd9655817d8a450eff34198d29ddf937b5f502ae405b2aed", mined: "01.01.2010", miner: "0x2a65aca4d5fc5b5c859090a6c34d164135398226", transactions: 194, size:31.965},
          {number: 8803255, hash: "0x761a7faac7cae5ac51776e57c3cd49c9efac17a143b05e949c900c22166bf432", mined: "01.01.2010", miner: "0x829bd824b016326a401d083b33d092293333a830", transactions: 80, size: 20.352},
          {number: 8803247, hash: "0x6d6be545a5b33013cd9655817d8a450eff34198d29ddf937b5f502ae405b2aed", mined: "01.01.2010", miner: "0x2a65aca4d5fc5b5c859090a6c34d164135398226", transactions: 194, size:31.965},
          {number: 8803247, hash: "0x6d6be545a5b33013cd9655817d8a450eff34198d29ddf937b5f502ae405b2aed", mined: "01.01.2010", miner: "0x2a65aca4d5fc5b5c859090a6c34d164135398226", transactions: 194, size:31.965},
          {number: 8803247, hash: "0x6d6be545a5b33013cd9655817d8a450eff34198d29ddf937b5f502ae405b2aed", mined: "01.01.2010", miner: "0x2a65aca4d5fc5b5c859090a6c34d164135398226", transactions: 194, size:31.965},
          {number: 8803247, hash: "0x6d6be545a5b33013cd9655817d8a450eff34198d29ddf937b5f502ae405b2aed", mined: "01.01.2010", miner: "0x2a65aca4d5fc5b5c859090a6c34d164135398226", transactions: 194, size:31.965},

          // {number: 123, hash: , mined:, miner:, transactions:, size:},
        ],


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
