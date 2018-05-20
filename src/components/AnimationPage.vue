<template lang="pug">
  div
    nav-component
    bread-crumb-component(:name='breadCrumb')
    div.main-layout
      h1.header {{ title }}

      h3 show/hide
      div.block
        button.inline.btn.btn--primary(v-on:click='show = !show') toggle
        transition(name='fade')
          span.inline.toggler(v-if='show') hello
</template>

<script>
  import NavComponent from './NavComponent.vue'
  import BreadCrumbComponent from './BreadCrumbComponent.vue'

  export default {
    components: {
      NavComponent, BreadCrumbComponent
    },
    data() {
      return {
        title: 'Animations',
        breadCrumb: 'Vue.js Animations',
        show: false,
      };
    }
  };
</script>

<style lang="scss" scoped>
@import "~@dynatrace/groundhog/src/button/button";

h1, h2 {
  font-weight: normal;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
