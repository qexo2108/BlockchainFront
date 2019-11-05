
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
                            <div> <v-icon>alarm</v-icon>        Mined:        {{ block.mined }} </div>
                            <div> <v-icon>person</v-icon>       Miner: {{ block.miner }} </div>
                            <div> <v-icon>gavel</v-icon>        Transactions: {{ block.transactions }} </div>
                            <div> <v-icon>storage</v-icon>       Size: {{  block.size }} </div>

                        </div>
                    </v-card-title>
                </v-flex>
            </v-layout>
            <v-divider light></v-divider>
            <v-card-actions class="pa-3">

                <v-spacer></v-spacer>
                <v-btn color="secondary" class="white--text" @click="goToBlock(block.number)">Explore</v-btn>  <!-- router :to="stats" -->

            </v-card-actions>
        </v-card>
        </v-flex>

        <v-flex xs3></v-flex>
    </v-layout>






    <v-spacer></v-spacer>
        <v-divider></v-divider>
        <v-spacer></v-spacer>



            <!--<v-card>
                <v-card-title>
                    Nutrition
                    <v-spacer></v-spacer>
                    <v-text-field
                            v-model="search"
                            append-icon="search"
                            label="Search"
                            single-line
                            hide-details
                    ></v-text-field>
                </v-card-title>
                <v-data-table
                        :headers="headers"
                        :items="desserts"
                        :search="search"
                >
                    <template v-slot:items="props">
                        <td>{{ props.item.name }}</td>
                        <td class="text-xs-right">{{ props.item.calories }}</td>
                        <td class="text-xs-right">{{ props.item.fat }}</td>
                        <td class="text-xs-right">{{ props.item.carbs }}</td>
                        <td class="text-xs-right">{{ props.item.protein }}</td>
                        <td class="text-xs-right">{{ props.item.iron }}</td>
                    </template>
                    <template v-slot:no-results>
                        <v-alert :value="true" color="error" icon="warning">
                            Your search for "{{ search }}" found no results.
                        </v-alert>
                    </template>
                </v-data-table>
            </v-card>-->



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
            rest: false,

            block: {number: 8803241, hash: "0x7c79b95ad939d97d0c7e1b2d4ce317dadeaad2a2d8fea950eaf844a7d0fe0107", mined: "01.01.2010", miner: "0x5a0b54d5dc17e0aadc383d2db43b0a0d3e029c4c", transactions: 128, size: 26.970},




            search: '',
                headers: [
            {
                text: 'Dessert (100g serving)',
                align: 'left',
                sortable: false,
                value: 'name'
            },
            { text: 'Calories', value: 'calories' },
            { text: 'Fat (g)', value: 'fat' },
            { text: 'Carbs (g)', value: 'carbs' },
            { text: 'Protein (g)', value: 'protein' },
            { text: 'Iron (%)', value: 'iron' }
        ],
            desserts: [
            {
                name: 'Frozen Yogurt',
                calories: 159,
                fat: 6.0,
                carbs: 24,
                protein: 4.0,
                iron: '1%'
            },
            {
                name: 'Ice cream sandwich',
                calories: 237,
                fat: 9.0,
                carbs: 37,
                protein: 4.3,
                iron: '1%'
            },
            {
                name: 'Eclair',
                calories: 262,
                fat: 16.0,
                carbs: 23,
                protein: 6.0,
                iron: '7%'
            },
            {
                name: 'Cupcake',
                calories: 305,
                fat: 3.7,
                carbs: 67,
                protein: 4.3,
                iron: '8%'
            },
            {
                name: 'Gingerbread',
                calories: 356,
                fat: 16.0,
                carbs: 49,
                protein: 3.9,
                iron: '16%'
            },
            {
                name: 'Jelly bean',
                calories: 375,
                fat: 0.0,
                carbs: 94,
                protein: 0.0,
                iron: '0%'
            },
            {
                name: 'Lollipop',
                calories: 392,
                fat: 0.2,
                carbs: 98,
                protein: 0,
                iron: '2%'
            },
            {
                name: 'Honeycomb',
                calories: 408,
                fat: 3.2,
                carbs: 87,
                protein: 6.5,
                iron: '45%'
            },
            {
                name: 'Donut',
                calories: 452,
                fat: 25.0,
                carbs: 51,
                protein: 4.9,
                iron: '22%'
            },
            {
                name: 'KitKat',
                calories: 518,
                fat: 26.0,
                carbs: 65,
                protein: 7,
                iron: '6%'
            }
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
