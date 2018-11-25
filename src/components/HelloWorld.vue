<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ultra-svg :size="{width:'60vw', height:500}">
      <ultra-line :property="lineprop"></ultra-line>
      <ultra-circle :property="circleprop"></ultra-circle>
    </ultra-svg>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'svueg demo page.',
      lineprop : {
        x1 : "10",
        x2 : "100",
        y1 : "50",
        y2 : "150",
        stroke : "green",
        strokeWidth : "5",
        strokeLinecap: "round"
      },
      circleprop : {
        cx : 140,
        cy : 140,
        r : 40,
        stroke : "cyan"
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
