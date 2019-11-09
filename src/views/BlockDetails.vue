
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
                            <div> <v-icon>alarm</v-icon>        Mined:        {{ block.mined }} </div>
                            <div> <v-icon>person</v-icon>       Miner: {{ block.miner }} </div>
                            <div> <v-icon>gavel</v-icon>        Transactions: {{ block.transactions }} </div>
                            <div> <v-icon>storage</v-icon>       Size: {{  block.size }} </div>

                            <div> <v-icon>input</v-icon>       Parent hash: {{  block.miner }} </div>
                            <div> <v-icon>local_gas_station</v-icon>       Gas used: {{  block.size }} </div>
                            <div> <v-icon>local_activity</v-icon>       Reward: {{  block.size }} </div>


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

        goToBlock: function (blockNumber)
        {
            this.$router.push('/blocks/' + blockNumber)
        }
    },

    components: {
      Transactions
    },

    data()
    {
        return {
            // Switch to true if REST API is ready
            rest: true,

            block: {number: 8803241, hash: "0x7c79b95ad939d97d0c7e1b2d4ce317dadeaad2a2d8fea950eaf844a7d0fe0107", mined: "01.01.2010", miner: "0x5a0b54d5dc17e0aadc383d2db43b0a0d3e029c4c", transactions: 128, size: 26.970}

        }
    },
    mounted()
    {
        if(this.rest)
        {
            this.$axios
                .get('http://localhost:51419/api/blockchain/blocks/' /*TODO+ hash*/) // fill in server URI here
                .then(response => (this.blocks = response.data))
                // eslint-disable-next-line no-console
                .catch(error => console.log(error))
        }
    },
    filters: {
        // currencydecimal (value) {
        //     return value.toFixed(2)
        // }
    },
}

</script>

<style scoped>

</style>
