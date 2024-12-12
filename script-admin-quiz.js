function openTab(event, tabName) {
    let tabcontent = document.querySelectorAll('.tabcontent');
    let tablinks = document.querySelectorAll('.tablinks'); 
    let i;

    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active");
}

document.querySelectorAll(".tablinks").forEach(item => {
    item.addEventListener("click", (event) => {
        openTab(event, item.innerText.trim().replace(" ", "-"));
    });
});

const xArray = ["Direct", "Referal", "Organic"];
const yArray = [55, 49, 44];

const layout = {
    title: "",
    showlegend: true,
    legend: {
        orientation: "v",
        x: -0.9,
        y: 0.5, 
    }
};

const data = [{
    labels: xArray,
    values: yArray,
    hole: 0.7, 
    type: "pie",
    marker: {
        colors: ["#5F2DED", "#5F2DED", "#5F2DED"], 
        line: {
            color: '#FFFFFF', 
            width: 2
        }
    },
    textinfo: "none", 
    hoverinfo: "label+percent"
}];

Plotly.newPlot("myPlot", data, layout);

const xValues = ["Jan", "Feb", "March", "April", "May", "June", "July", "August", "Sept", "Oct", "Nov", "Dec"];
const yValues = [150, 120, 200, 140, 160, 150, 170, 155, 180, 175, 160, 250];

new Chart("myChart", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            fill: false,
            lineTension: 0.3,
            backgroundColor: "#5F2DED",
            borderColor: "#5F2DED",
            pointBackgroundColor: "#5F2DED",
            pointBorderColor: "#5F2DED",
            pointRadius: 5,
            data: yValues
        }]
    },
    options: {
        legend: {display: false},
        scales: {
            y: {
                beginAtZero: true,
                max: 300,
                ticks: {
                    stepSize: 50
                }
            }
        }
    }
});