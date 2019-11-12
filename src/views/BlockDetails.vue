
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

                            <div class="headline">Block no. {{ block.number }}</div>

                            <div> <v-icon>fingerprint</v-icon>  Hash: {{ block.hash }} </div>
                            <div> <v-icon>alarm</v-icon>        Mined:        {{ block.minedDate }} </div>
                            <div> <v-icon>gavel</v-icon>        Transactions: {{ block.transactionCount }} </div>
                            <div> <v-icon>storage</v-icon>       Size: {{  block.size }} </div>

                            <div> <v-icon>local_gas_station</v-icon>       Gas used: {{  block.gasAmount }} </div>
                            <div> <v-icon>local_activity</v-icon>       Reward: {{  block.awardForMining }} </div>


                            <div>  <v-icon>remove_circle</v-icon>    Total sent amount: {{  block.totalSentAmount }} </div>
                            <div>  <v-icon>add_circle</v-icon>    Total received amount: {{  block.totalReceivedAmount }} </div>
                            <div> <v-icon>monetization_on</v-icon>     Total balance: {{  block.totalBalance }} </div>
                            <div> <v-icon>fingerprint</v-icon>     Parent hash: {{  block.parentHash }} </div>
                            <div> <v-icon>fingerprint</v-icon>     Child hash: {{  block.childHash }} </div>
                            <div>   <!-- TODO: -->   Transactions hashes: {{  block.transactionsHashes }} </div>


                        </div>
                    </v-card-title>
                    <v-card-actions></v-card-actions>
                </v-flex>
            </v-layout>


            <v-card-actions></v-card-actions>

        </v-card>
        </v-flex>



        <v-flex xs3></v-flex>
<!--    </v-layout>-->


<!--    <v-flex xs12>-->

<!--            <v-divider> </v-divider>-->


<!--        <v-layout row wrap>-->
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


<!--    </v-flex>-->


    </v-container>
<!--    </v-card>-->

</template>




<script>

import Transactions from './Transactions'
import {address} from '../main'

export default {
    methods: {

    },

    components: {
      Transactions
    },

    data()
    {
        return {
            block: {},
            transactions:[]
        }
    },
    mounted()
    {
        this.$axios
            .get(address + 'blocks/' + this.$route.params.id)
            .then(response => (this.block = response.data))
            // eslint-disable-next-line no-console
            .catch(error => console.log(error))

        this.$axios
            .get(address + 'transactions')
            .then(response => (this.transactions = response.data))
            // eslint-disable-next-line no-console
            .catch(error => console.log(error))
    }
}

</script>

