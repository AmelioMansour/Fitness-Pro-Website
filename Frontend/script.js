let pushChart = document.getElementById('pushChart').getContext('2d')
let push = new Chart(pushChart, {
  type:'line',
  data:{
    labels : ["Date1", "Date2", "Date3", "Date4", "Date5", "Date6","Date1", "Date2", "Date3", "Date4", "Date5", "Date6"],
    datasets : [{
      label: 'Weight',
      data : [200, 205,205,210, 210, 220,220, 225,230,230, 235, 235],
      borderColor : 'red',
      backgroundColor: 'black'

    }]
  },
  options:{}
})

let pullChart = document.getElementById('pullChart').getContext('2d')
let pull = new Chart(pullChart, {
  type:'line',
  data:{
    labels : ["Date1", "Date2", "Date3", "Date4", "Date5", "Date6"],
    datasets : [{
      label: 'Weight',
      data : [200, 205,200,210, 220, 250]
    }]
  },
  options:{}
})

let legsChart = document.getElementById('legsChart').getContext('2d')
let legs = new Chart(legsChart, {
  type:'line',
  data:{
    labels : ["Date1", "Date2", "Date3", "Date4", "Date5", "Date6"],
    datasets : [{
      label: 'Weight',
      data : [200, 205,200,210, 220, 250]
    }]
  },
  options:{}
})