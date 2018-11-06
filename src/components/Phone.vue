<template lang="pug">
    .phone
        h1 {{phone.name}}
        img(:src="phone.image" :alt="phone.name")
</template>

<script>

export default {
    name: 'phone',
    components: {
    },
    props: {
        phone: {
            id: Number,
            name: String,
            audio: String,
            image: String
        }
    },
    data(){
        return {
        }
    }
}

</script>

<style lang="sass">
</style>
