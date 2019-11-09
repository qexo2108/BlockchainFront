
<template>



<!--    <v-card>-->
        <v-container
                fluid
                grid-list-lg
        >
            <v-layout row wrap>

    <v-flex xs12 sm12 md6 lg6 xl6 v-for="block in blocks" :key="block.number">
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
                            <div class="headline">Block no. {{ block.id }}</div>

                            <div> <v-icon>fingerprint</v-icon>  Hash: {{ block.hash }} </div>
                            <div> <v-icon>alarm</v-icon>        Mined:        {{ block.minedDate }} </div>
                            <div> <v-icon>person</v-icon>       Miner: {{ block.minerHash }} </div>
                            <div> <v-icon>gavel</v-icon>        Transactions: {{ block.transactionCount }} </div>
                            <div> <v-icon>storage</v-icon>       Size: {{  block.size }} </div>
                            <div>      gasAmount: {{  block.gasAmount }} </div>
                            <div>      awardForMining: {{  block.awardForMining }} </div>
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
            <v-divider light></v-divider>
            <v-card-actions class="pa-3">

                <v-spacer></v-spacer>
                <v-btn color="secondary" class="white--text" @click="goToBlock(block.hash)">Explore</v-btn>  <!-- router :to="stats" -->

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

        goToBlock: function (blockNumber)
        {
            this.$router.push('/blocks/' + blockNumber)
        }
    },
    data()
    {
        return {
            // Switch to true if REST API is ready
            rest: true,

            blocks: [
                {number: 8803241, hash: "0x7c79b95ad939d97d0c7e1b2d4ce317dadeaad2a2d8fea950eaf844a7d0fe0107", mined: "01.01.2010", miner: "0x5a0b54d5dc17e0aadc383d2db43b0a0d3e029c4c", transactions: 128, size: 26.970},
                {number: 8803247, hash: "0x6d6be545a5b33013cd9655817d8a450eff34198d29ddf937b5f502ae405b2aed", mined: "01.01.2010", miner: "0x2a65aca4d5fc5b5c859090a6c34d164135398226", transactions: 194, size:31.965},
                {number: 8803255, hash: "0x761a7faac7cae5ac51776e57c3cd49c9efac17a143b05e949c900c22166bf432", mined: "01.01.2010", miner: "0x829bd824b016326a401d083b33d092293333a830", transactions: 80, size: 20.352},
                {number: 8803255, hash: "0x761a7faac7cae5ac51776e57c3cd49c9efac17a143b05e949c900c22166bf432", mined: "01.01.2010", miner: "0x829bd824b016326a401d083b33d092293333a830", transactions: 80, size: 20.352},
                {number: 8803255, hash: "0x761a7faac7cae5ac51776e57c3cd49c9efac17a143b05e949c900c22166bf432", mined: "01.01.2010", miner: "0x829bd824b016326a401d083b33d092293333a830", transactions: 80, size: 20.352},
                {number: 8803255, hash: "0x761a7faac7cae5ac51776e57c3cd49c9efac17a143b05e949c900c22166bf432", mined: "01.01.2010", miner: "0x829bd824b016326a401d083b33d092293333a830", transactions: 80, size: 20.352},
                {number: 8803255, hash: "0x761a7faac7cae5ac51776e57c3cd49c9efac17a143b05e949c900c22166bf432", mined: "01.01.2010", miner: "0x829bd824b016326a401d083b33d092293333a830", transactions: 80, size: 20.352},
                {number: 8803255, hash: "0x761a7faac7cae5ac51776e57c3cd49c9efac17a143b05e949c900c22166bf432", mined: "01.01.2010", miner: "0x829bd824b016326a401d083b33d092293333a830", transactions: 80, size: 20.352}
            ]
        }
    },
    mounted()
    {
        if(this.rest)
        {
            this.$axios
                .get('http://localhost:51419/api/blockchain/blocks') // fill in server URI here
                .then(response => {(this.blocks = response.data); console.log(this.blocks);})
                // eslint-disable-next-line no-console
                .catch(error => console.log("DUPA" + error))
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
