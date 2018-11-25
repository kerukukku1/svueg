<template>
    <svg :width="size.width" :height="size.height">
        <slot></slot>
    </svg>
</template>

<script>
/* eslint-disable */
export default {
    name: 'ultra-svg',
    props : {
        size : {
            width : String,
            height : String
        }
    },
    data() {
        return {

        }
    }
}
</script>

<style scoped>
svg{
    border: 1px gray solid
}
</style>
