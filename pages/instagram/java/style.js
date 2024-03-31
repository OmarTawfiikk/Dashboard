const feedData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    datasets: [{
        label: 'Number of Posts',
        data: [30, 25, 40, 35, 45],
        backgroundColor: 'rgba(250, 89, 89, 0.5)', // Instagram's primary color
        borderColor: 'rgba(250, 89, 89, 1)', // Instagram's primary color
        borderWidth: 1
    }]
};

// Create histogram
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: feedData,
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
