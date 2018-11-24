<template>
  <div>
    <h1>{{msg}}</h1>
    <p v-setHeight="red"></p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Test App'
    }
  },
  methods: {
    sumOfNumber(a, b){
      return a + b
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
