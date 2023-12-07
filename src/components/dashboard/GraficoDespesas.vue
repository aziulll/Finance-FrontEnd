<template>
    <div>
      <bar-chart :data="data" :options="options"></bar-chart>
    </div>
  </template>
  
  <script>
  import { Bar } from 'vue-chartjs';
  
  export default {
    extends: Bar,
    data() {
      return {
        data: {
          labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
          datasets: [
            {
              label: 'Gastos por Mês',
              backgroundColor: '#3490dc',
              data: [50, 80, 60, 100, 75, 120],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: [
              {
                barThickness: 30, 
              },
            ],
            y: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        },
      };
    },
    mounted() {
      this.renderChart(this.data, this.options);
    },
  };
  </script>
  