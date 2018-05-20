<template lang="pug">
  div
    nav-component
    div.main-layout
      h1.header {{ title }}
      p Welcome to the Vue.js demo app! Here you will find examples of different components in actions with user inputs, string manipulations, animations, charts and more. Use the Nav at the top to check out different features or click an icon below.
      div.icons.col-wrapper
        router-link.col.four(to="/animation")
          img(src='../assets/res/animation.svg')
          div.title Animations
        router-link.col.four(to="input")
          img(src='../assets/res/input.svg')
          div.title Inputs
        router-link.col.four(to="/chart")
          img(src='../assets/res/chart.svg')
          div.title Charts

</template>

<script>
  import NavComponent from './NavComponent.vue'
  export default {
    components: {
      NavComponent
    },
    data() {
      return {
        title: 'Home',
      }
    }
  }
</script>

<style lang='scss' scoped>
  h1, h2 {
    font-weight: normal;
  }
  a {
    color: #42b983;
  }
  .icons {
    text-align: center;
    margin-top: 50px;
    .col:first-child {
      text-align: left;
      img {
        margin-left: 0;
      }
    }
    .col:last-child {
      text-align: right;
      img {
        margin-right: 0;
      }
    }
    .col:hover {
      img {
        top: -4px;
      }
    }
    img {
      width: 180px;
      display: block;
      margin: auto;
      position: relative;
      top: 0;
      transition: all .23s ease-out;
    }
    .title {
      font-size: 30px;
      font-weight: 300;
      margin-top: 20px;
      display: inline-block;
      border-top: 1px solid #d8d8d8;
      color: black;
    }
  }
</style>
