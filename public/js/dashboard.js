
const canvas = document.getElementById('cpuChart');

if (canvas && typeof Chart !== 'undefined') {
  new Chart(canvas, {
    type: 'line',

    data: {
      labels: [
        '09:00', '10:00', '11:00', '12:00',
        '13:00', '14:00', '15:00', '16:00'
      ],

      datasets: [{
        label: 'CPU utilization',
        data: [18, 24, 21, 35, 28, 42, 31, 25],

        borderColor: '#60a5fa',
        backgroundColor: 'rgba(96, 165, 250, 0.12)',

        borderWidth: 2,
        fill: true,
        tension: 0.4,

        pointRadius: 3,
        pointHoverRadius: 6,
        pointBackgroundColor: '#60a5fa'
      }]
    },

    options: {
      responsive: true,
      maintainAspectRatio: false,

      plugins: {
        legend: {
          display: false
        },

        tooltip: {
          backgroundColor: '#17243a',
          titleColor: '#edf3ff',
          bodyColor: '#cbd5e1',
          borderColor: '#334155',
          borderWidth: 1,

          callbacks: {
            label: function(context) {
              return `CPU utilization: ${context.parsed.y}%`;
            }
          }
        }
      },

      scales: {
        x: {
          grid: {
            display: false
          },

          ticks: {
            color: '#91a0b8',
            font: {
              size: 10
            }
          },

          border: {
            display: false
          }
        },

        y: {
          beginAtZero: true,
          max: 100,

          ticks: {
            stepSize: 25,
            color: '#91a0b8',
            font: {
              size: 10
            },

            callback: function(value) {
              return value + '%';
            }
          },

          grid: {
            color: 'rgba(145, 160, 184, 0.10)'
          },

          border: {
            display: false
          }
        }
      }
    }
  });
}
