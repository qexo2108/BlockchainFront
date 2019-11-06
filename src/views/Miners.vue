
<template>



<!--    <v-card>-->
        <v-container
                fluid
                grid-list-lg
        >
            <v-layout row wrap>

    <v-flex xs12 sm12 md6 lg6 xl6 v-for="miner in miners" :key="miner.number">
        <v-card color="red darken-2" class="white--text">
            <v-layout>
                <v-flex xs2>
                    <v-img
                            :src="require('../assets/miner.png')"
                            height="125px"
                            contain
                    ></v-img>
                </v-flex>
                <v-flex xs10>
                    <v-card-title primary-title>
                        <div>
<!--                            <div class="headline">Miner no. {{ block.number }}</div>-->

                            <div> <v-icon>fingerprint</v-icon>  Hash: {{ miner.hash}} </div>
                            <div> <v-icon>assessment</v-icon>        Number of Transactions:        {{ miner.numberOfTransactions }} </div>
                            <div> <v-icon>account_balance</v-icon>       Final Balance: {{ miner.finalBalance }} ETH </div>
                            <div> <v-icon>monetization_on</v-icon>        Total Sent: {{ miner.totalSent }}  ETH</div>
                            <div> <v-icon>monetization_on</v-icon>      Total Received: {{  miner.totalReceived }} ETH </div>
                            <div> <v-icon>monetization_on</v-icon>      Total Fees: {{  miner.totalFees }} ETH </div>


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

        goToBlock: function (blockNumber)
        {
            this.$router.push('/blocks/' + blockNumber)
        }
    },
    data()
    {
        return {
            // Switch to true if REST API is ready
            rest: false,

            miners: [
              {hash: "0x7c79b95ad939d97d0c7e1b2d4ce317dadeaad2a2d8fea950eaf844a7d0fe0107", numberOfTransactions: 23488386, finalBalance: 644.456125893380393669, totalSent: 6278743.890634905579106263, totalReceived: 96137.750324762544075523, totalFees: 2242.131899151221233131},
              {hash: "0x7c79b95ad939d97d0c7e1b2d4ce317dadeaad2a2d8fea950eaf844a7d0fe0107", numberOfTransactions: 23488386, finalBalance: 644.456125893380393669, totalSent: 6278743.890634905579106263, totalReceived: 96137.750324762544075523, totalFees: 2242.131899151221233131},
              {hash: "0x7c79b95ad939d97d0c7e1b2d4ce317dadeaad2a2d8fea950eaf844a7d0fe0107", numberOfTransactions: 23488386, finalBalance: 644.456125893380393669, totalSent: 6278743.890634905579106263, totalReceived: 96137.750324762544075523, totalFees: 2242.131899151221233131},
              {hash: "0x7c79b95ad939d97d0c7e1b2d4ce317dadeaad2a2d8fea950eaf844a7d0fe0107", numberOfTransactions: 23488386, finalBalance: 644.456125893380393669, totalSent: 6278743.890634905579106263, totalReceived: 96137.750324762544075523, totalFees: 2242.131899151221233131},
              {hash: "0x7c79b95ad939d97d0c7e1b2d4ce317dadeaad2a2d8fea950eaf844a7d0fe0107", numberOfTransactions: 23488386, finalBalance: 644.456125893380393669, totalSent: 6278743.890634905579106263, totalReceived: 96137.750324762544075523, totalFees: 2242.131899151221233131},
              {hash: "0x7c79b95ad939d97d0c7e1b2d4ce317dadeaad2a2d8fea950eaf844a7d0fe0107", numberOfTransactions: 23488386, finalBalance: 644.456125893380393669, totalSent: 6278743.890634905579106263, totalReceived: 96137.750324762544075523, totalFees: 2242.131899151221233131},
              {hash: "0x7c79b95ad939d97d0c7e1b2d4ce317dadeaad2a2d8fea950eaf844a7d0fe0107", numberOfTransactions: 23488386, finalBalance: 644.456125893380393669, totalSent: 6278743.890634905579106263, totalReceived: 96137.750324762544075523, totalFees: 2242.131899151221233131},
            ]
        }
    },
    mounted()
    {
        if(this.rest)
        {
            this.$axios
                .get('???/blocks') // fill in server URI here
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
