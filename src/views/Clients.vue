
<template>



<!--    <v-card>-->
        <v-container
                fluid
                grid-list-lg
        >
            <v-layout row wrap>

    <v-flex xs12 sm12 md6 lg6 xl6 v-for="client in clients" :key="client.number">
        <v-card color="red darken-2" class="white--text">
            <v-layout>
                <v-flex xs2>
                    <v-img
                            v-if="(client.type === 0)"
                            :src="require('../assets/client.png')"
                            height="125px"
                            contain
                    ></v-img>
                    <v-img
                            v-if="(client.type === 1)"
                            :src="require('../assets/miner.png')"
                            height="125px"
                            contain
                    ></v-img>
                </v-flex>
                <v-flex xs10>
                    <v-card-title primary-title>
                        <div>
<!--                            <div class="headline">Miner no. {{ block.number }}</div>-->

                            <div> <v-icon>fingerprint</v-icon>  Hash: {{ client.hash}} </div>
                            <div> <v-icon>assessment</v-icon>        Number of Transactions:        {{ client.transactionsCount }} </div>
                            <div> <v-icon>account_balance</v-icon>       amount: {{ client.amount }} ETH </div>
                            <div>        </div>
                            <div> <v-icon>alarm</v-icon>      Created: {{  client.startDate }}  </div>
<!--                            <div>      minedBlocksHashes: {{  client.minedBlocksHashes }} lista blockow  </div>-->


                        </div>
                    </v-card-title>
                </v-flex>
            </v-layout>

            <v-card-actions class="pa-3">
<!--                <v-btn color="secondary" class="white&#45;&#45;text" @click="goToBlock(block.number)">Explore</v-btn>  &lt;!&ndash; router :to="stats" &ndash;&gt;-->
            </v-card-actions>
        </v-card>
        </v-flex>



            </v-layout>
        </v-container>
<!--    </v-card>-->


</template>

<script>


export default {
    methods: {

        /*goToBlock: function (blockNumber)
        {
            this.$router.push('/blocks/' + blockNumber)
        }*/
    },
    data()
    {
        return {
            // Switch to true if REST API is ready
            rest: true,

            clients: []

        }
    },
    mounted()
    {
        if(this.rest)
        {
            this.$axios
                .get('http://localhost:51419/api/blockchain/clients')
                .then(response => (this.clients = response.data))
                // eslint-disable-next-line no-console
                .catch(error => console.log(error))
        }
    }

}

</script>

<style scoped>

</style>
