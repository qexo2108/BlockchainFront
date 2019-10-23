
<template>
    <v-container grid-list-md text-xs-center>
        <v-layout row wrap>

            Here will be list of blocks

<!--{{channels}}-->

<!--            <v-flex xs2 v-for="channel in channels" :key="channel.channelName"> &lt;!&ndash; sm6 offset-sm3 &ndash;&gt;-->
<!--                <v-card>-->



<!--                    <v-img-->
<!--                            :src="channel.channelPicture"-->
<!--                            aspect-ratio="1"-->
<!--                    ></v-img>-->

<!--                    <v-card-title primary-title>-->
<!--                        <div>-->
<!--                            <h3 class="headline mb-0"> {{ channel.channelName }}</h3>-->

<!--                        </div>-->
<!--                    </v-card-title>-->

<!--                    <v-card-actions>-->
<!--                        <v-btn flat color="orange" @click="goToStats(channel.id)">Explore</v-btn>  &lt;!&ndash; router :to="stats" &ndash;&gt;-->
<!--                    </v-card-actions>-->
<!--                </v-card>-->
<!--            </v-flex>-->





        </v-layout>
    </v-container>
</template>

<script>


    export default {
        methods: {

            goToStats: function (channelId)
            {
                this.$router.push('/channelstats/' + channelId)
            }
        },
        data()
        {
            return {
                channels: null,
                stats: null
            }
        },
        mounted()
        {

            this.$axios
                .get('https://polish-twitch-stat.appspot.com/channels/findAll')
                .then(response => (this.channels = response.data))
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

<style scoped>

</style>
