<template lang="pug">
  div
    nav-component
    bread-crumb-component(:name='breadCrumb')
    div.main-layout
      h1.header {{ title }}
      
      h3 static chart
      div.block
        line-chart(:chart-data='datacollection',:options='chartOptions')
</template>

<script>
import NavComponent from "./NavComponent.vue";
import BreadCrumbComponent from "./BreadCrumbComponent.vue";
import LineChart from "./LineChart.js";

export default {
  components: {
    NavComponent,
    BreadCrumbComponent,
    LineChart
  },
  data() {
    return {
      title: "Charts",
      breadCrumb: "Vue.js Charts",
      //chartjs
      datacollection: null,
      chartOptions: {
        maintainAspectRatio: false,
        elements: {
          line: {
            tension: 0
          }
        },
        responsive: true,
        title:{
          display:true,
          text:'Chart.js Line Charts'
        },
        tooltips: {
          mode: 'index',
          intersect: false,
        },
        hover: {
          mode: 'nearest',
          intersect: true
        },
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Month'
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Value'
            },
            ticks: {
                suggestedMax: 40,
                beginAtZero: true
            }
          }]
        }
      }
    };
  },
  created() {
    this.fillData();
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: [
          "January","February","March","April","May","June","July"
        ],
        datasets: [
          {
            label: "Account 1",
            fill: true,
            backgroundColor: 'rgba(116, 140, 255, 0.5)',
            borderColor: '#526cff',
            data: [
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt()
            ]
          },{
            label: "Account 2",
            fill: true,
            backgroundColor: 'rgba(169, 114, 204, 0.5)',
            borderColor: '#9355b7',
            data: [
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt()
            ]
          }
        ]
      };
    },
    getRandomInt() {
      return Math.floor((Math.random() * (50 - 5 + 1)) + 5) / 2;
    },
    getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  }
};
</script>

<style lang="scss" scoped>
h1,
h2 {
  font-weight: normal;
}
</style>
