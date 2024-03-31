const linkedinData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    datasets: [{
        label: 'Number of Connections',
        data: [20, 25, 18, 22, 30],
        backgroundColor: 'rgba(0, 119, 181, 0.5)', // LinkedIn's primary color
        borderColor: 'rgba(0, 119, 181, 1)', // LinkedIn's primary color
        borderWidth: 1
    }]
};

// Create histogram
const linkedinCtx = document.getElementById('linkedinChart').getContext('2d');
const linkedinChart = new Chart(linkedinCtx, {
    type: 'bar',
    data: linkedinData,
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    suggestedMax: 40, // Lower scaling for LinkedIn
                    callback: function(value, index, values) {
                        return value.toLocaleString(); // Format y-axis labels with comma separator
                    }
                }
            }]
        }
    }
});
