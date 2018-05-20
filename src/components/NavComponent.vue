<template>
  <div class="nav has-no-secondary">
    <a class="nav__brand" href="/">
      <img class="nav__logo" src="http://assets.dynatrace.com/global/logos/dynatrace-logo.svg" alt="dynatrace logo"/>
    </a>
    <div class="nav__buttongroup">
      <button data-target="#nav-bar-example1" class="nav__btn nav__btn--menutoggle">Menu</button>
    </div>
    <nav id="nav-bar-example1" class="nav__bar">
      <ul class="nav__list nav__list--primary">
        <li class="nav__item">
          <router-link class="nav__link" to="/animation">Animations</router-link>
        </li>
        <li class="nav__item">
          <router-link class="nav__link" to="/input">Inputs</router-link>
        </li>
        <li class="nav__item">
          <router-link class="nav__link" to="/chart">Charts</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    props : ['active'],
  }
</script>

<style scoped>
  .nav-bar {
    background: black;
    color: #fff;
  }
</style>
