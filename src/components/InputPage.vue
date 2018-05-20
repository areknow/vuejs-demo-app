<template lang="pug">
  div
    nav-component
    bread-crumb-component(:name='breadCrumb')
    div.main-layout
      h1.header {{ title }}
     
      h3 fetch json data
        pre from http://headers.jsontest.com/
        div.block
          dl.definition-list
            dt X-Cloud-Trace-Context
            dd {{ data["X-Cloud-Trace-Context"] }}
            dt Accept-Language
            dd {{ data["Accept-Language"] }}
            dt Host
            dd {{ data["Host"] }}
            dt Referer
            dd {{ data["Referer"] }}
            dt User-Agent
            dd {{ data["User-Agent"] }}
            dt Origin
            dd {{ data["Origin"] }}
            dt Accept
            dd {{ data["Accept"] }}

        h3 string manipulation
        div.block
          p {{ message }}
          button.btn.btn--primary(v-on:click='reverseMessage') reverse

        h3 live user input
        div.block
          p {{ vModelMessage }}
          input.inputfield(v-model='vModelMessage')

        
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
      title: 'Inputs',
      breadCrumb: 'Vue.js Inputs and Data',
      //inputs
      data: [],
      message: "This is a test!",
      vModelMessage: "Type in this textbox",
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.$http.get("http://headers.jsontest.com/").then(
        response => {
          this.data = response.body;
        },
        response => {}
      );
    },
    reverseMessage() {
      this.message = this.message
        .split("").reverse().join("");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@dynatrace/groundhog/src/definition-list/definition-list";
@import "~@dynatrace/groundhog/src/inputfield/inputfield";
@import "~@dynatrace/groundhog/src/button/button";

h1,
h2 {
  font-weight: normal;
}
pre {
  color: #859aff;
  font-family: "Arial" sans-serif;
  font-size: 12px;
}
.definition-list {
  background: #f2f2f2;
  dd {
        text-shadow: 1px 2px 2px #f2f2f2, 2px 2px 2px #f2f2f2, 3px 2px 2px #f2f2f2, 4px 2px 2px #f2f2f2, 5px 2px 2px #f2f2f2, 6px 2px 2px #f2f2f2, -1px 2px 1px #f2f2f2, -2px 2px 1px #f2f2f2, -3px 2px 2px #f2f2f2, -4px 2px 2px #f2f2f2, -5px 2px 2px #f2f2f2, -6px 2px 2px #f2f2f2;
  }
}
</style>









<style>
.test {
  background: red;
}
</style>