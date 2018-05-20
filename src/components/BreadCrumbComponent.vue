<template>
  <ul class="breadcrumbs">
    <li class="breadcrumbs__item">
      <router-link class="breadcrumbs__link" to="/">Home</router-link>
    </li>
    <li class="breadcrumbs__item">
      <span class="breadcrumbs__last">{{ name }}</span>
    </li>
  </ul>
</template>

<script>
  export default {
    props : ['name'],
  }
</script>

<style scoped>
  .nav-bar {
    background: black;
    color: #fff;
  }
</style>
