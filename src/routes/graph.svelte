<script>
    import { Line } from 'svelte-chartjs';
    export let inData = []
    export let inLabel = []
    export let width = 400
    export let height = 400
    let data = {
    labels: inLabel,
    datasets: [
      {
        label: 'Push day',
        fill: true,
        lineTension: .4,
        backgroundColor: 'rgba(225, 204,230, .3)',
        borderColor: '#3F9FFE',
        pointBorderColor: 'rgb(205, 130,1 58)',
        pointBorderWidth: 4,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgb(0, 0, 0)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 5,
        data: inData,
      },
    ],
  };

  


    import {
      Chart as ChartJS,
      Title,
      Tooltip,
      Legend,
      LineElement,
      LinearScale,
      PointElement,
      CategoryScale,
    } from 'chart.js';
  
    ChartJS.register(
      Title,
      Tooltip,
      Legend,
      LineElement,
      LinearScale,
      PointElement,
      CategoryScale
    );
  </script>

  <h3 id="recentDate">{inLabel[inLabel.length-1]}</h3>
  <Line {data} width={width} height={height} />

  <style>
    #recentDate{
      opacity: 60%;
    }
  </style>
  

