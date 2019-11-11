
<template>
<!--    <v-card>-->
        <v-container
                fluid
                grid-list-lg
        >
            <v-layout row wrap>



    <v-flex xs3></v-flex>
    <v-flex xs6>
        <v-card color="yellow darken-2" class="white--text">
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
                        <!-- TODO: -->
                            <div class="headline">Block no. {{ block.number }}</div>

                            <div> <v-icon>fingerprint</v-icon>  Hash: {{ block.hash }} </div>
                            <div> <v-icon>alarm</v-icon>        Mined:        {{ block.minedDate }} </div>
                            <div> <v-icon>gavel</v-icon>        Transactions: {{ block.transactionCount }} </div>
                            <div> <v-icon>storage</v-icon>       Size: {{  block.size }} </div>

                            <div> <v-icon>local_gas_station</v-icon>       Gas used: {{  block.gasAmount }} </div>
                            <div> <v-icon>local_activity</v-icon>       Reward: {{  block.awardForMining }} </div>


                            <div>      totalSentAmount: {{  block.totalSentAmount }} </div>
                            <div>      totalReceivedAmount: {{  block.totalReceivedAmount }} </div>
                            <div>      totalBalance: {{  block.totalBalance }} </div>
                            <div>      parentHash: {{  block.parentHash }} </div>
                            <div>      childHash: {{  block.childHash }} </div>
                            <div>      transactionsHashes: {{  block.transactionsHashes }} hasze transakcji </div>


                        </div>
                    </v-card-title>
                </v-flex>
            </v-layout>

        </v-card>
        </v-flex>

        <v-flex xs3></v-flex>
    </v-layout>


    <v-flex xs12>
        <Transactions/>
    </v-flex>


    </v-container>
<!--    </v-card>-->

</template>




<script>

  import Transactions from './Transactions'

export default {
    methods: {

    },

    components: {
      Transactions
    },

    data()
    {
        return {
            // Switch to true if REST API is ready
            rest: true,
            block: {}
        }
    },
    mounted()
    {
        if(this.rest)
        {
            this.$axios
                .get('http://localhost:51419/api/blockchain/blocks/' + this.$route.params.id) // fill in server URI here
                .then(response => (this.block = response.data))
                // eslint-disable-next-line no-console
                .catch(error => console.log(error))
        }
    }
}

</script>

<style scoped>

</style>
