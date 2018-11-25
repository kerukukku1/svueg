<template>
    <transition name="slide">
        <circle :r="30" :cx="cx" :cy="cy" @mouseenter="changeStats()"></circle>
    </transition>
</template>

<script>
export default {
    name: 'ultra-circle',
    props : {
        property : Object
    },
    data() {
        return {
            isHover : false,
            interval : null,
            updateInterval : 500, //ms
            stats : {},
            tmpStats : {},
            cx : 0,
            cy : 0
        }
    },
    watch : {
        tmpStats : {
            handler : function(newStats, oldStats) {
                var newStyle = this.generateStyle(newStats) 
                TweenLite.to(
                    this.$data,
                    this.updateInterval / 1000,
                    { 
                        cx : newStyle.cx,
                        cy : newStyle.cy
                    }
                )
            },
            deep : true
        },
    },
    methods : {
        getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max  - this.property.r*2 )) + this.property.r;
        },
        newRandomCoordinate(max) {
            return {
                cx : this.getRandomInt(500),
                cy : this.getRandomInt(500)
            }
        },
        randomStats() {
            var vm = this
            var coord = vm.newRandomCoordinate()
            this.$set(this.tmpStats, 'cx', coord.cx)
            this.$set(this.tmpStats, 'cy', coord.cy)
        },
        initStats() {
            console.log("mount and initialized")
        },
        changeStats(){
            console.log("hover")
            this.randomStats()
        },
        generateStyle(coord) {
            var ret = Object.assign({}, this.property); 
            ret.cx = coord.cx
            ret.cy = coord.cy
            return ret
        }
    },
    computed : {
        getProperty() {
            if(this.isHover)this.property.stroke = "red"
            else this.property.stroke="green"
            return this.property
        }
    },
    mounted() {
        this.initStats()
        this.stats = Object.assign({}, this.property); 
        this.tmpStats = Object.assign({}, this.property); 
    }
}
</script>

<style scoped>
.slide-enter-active .slide-fade-leave-active{
    fill: #333;
    transition: all 0.4s cubic-bezier(.96,.04,.04,.96);
    stroke: rgb(119, 0, 255);
    stroke-width: 1px;
    transition: all .3s ease;
}
.slide-fade-enter, .slide-fade-leave-to{
    fill: white;
    stroke-width: 50px;
}
</style>
