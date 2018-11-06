<template lang="pug">
    .list
        Phone(v-for="phone in $options.phones" v-bind:phone="phone")
</template>

<script>
import PHONES from './../data/phones.json'
import Phone from './../components/Phone.vue'

export default {
    name: 'list',
    components: {
        Phone
    },
    data(){
        return {
        }
    },
    phones: PHONES
}

</script>

<style lang="sass">
</style>
