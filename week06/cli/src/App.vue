<template>
  <div id="app">
    <div class="vld-parent">
      <loading
        :active.sync="isLoading"
      />

      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isLoading: false
    }
  },
  created () {

  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      // console.log(process.env.APIPATH, process.env.UUID)
      this.$http.get(`${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/products`)
        .then(data =>
          console.log(data)
        )
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
