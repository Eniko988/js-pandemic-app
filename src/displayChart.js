import {Chart,BarController, BarElement,Colors} from 'chart.js/auto';
Chart.register(BarController, BarElement, Colors);
global.Chart = Chart;

Chart.defaults.font.size = 20;
Chart.defaults.color = '#FAFAE4';

export const getChart = async()=>{
  const data = [
    { city: "Austria", vaccinated: 6894479, cases:4984809},
    { city: "France", vaccinated: 54608180,cases:2604595},
    { city: "Hungary", vaccinated: 6419996, cases:2058847},
    { city: "Romania", vaccinated:8183574,cases:3239392},
    { city: "Slovenia", vaccinated: 1265802,cases:1142042},
    { city: "Slovakia", vaccinated:2838788,cases:2580748}, 
  ];

  new Chart(
    document.getElementById('my-chart').getContext('2d'),
    {
      type: 'bar',
      data: {
        labels: data.map(row => row.city),
        datasets: [
          {
          label: 'cases',
          data: data.map(row => row.cases),
          backgroundColor:'rgba(0, 255, 25, 0.5)',
          borderColor: 'rgb(0, 255, 25)',
          borderWidth: 1,
          },
          {
            label: 'vaccinated',
            data: data.map(row => row.vaccinated),
            backgroundColor:'rgba(242, 14, 56, 0.5)',
            borderColor:'rgb(242, 14, 56)',
            borderWidth: 1,
          },
          ],
      },
      options: {
        plugins: {
            legend:{
              position:'top'
            },
             }
          }
            })
        }
    
  

