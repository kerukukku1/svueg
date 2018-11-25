<template>
    <line :style="getProperty" :x1="property.x1" :x2="property.x2" :y1="property.y1" :y2="property.y2" @mouseover="isHover=true" @mouseleave="isHover=false"></line>
</template>

<script>
export default {
    name: 'ultra-line',
    props : {
        property : Object
    },
    data() {
        return {
            isHover : false
        }
    },
    methods : {
        test() {
            console.log("test")
        }
    },
    computed : {
        getProperty() {
            if(this.isHover)this.property.stroke = "red"
            else this.property.stroke="green"
            return this.property
        }
    }
}
</script>

<style scoped>

</style>
