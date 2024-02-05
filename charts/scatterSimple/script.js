$(inicio)

function inicio() {
    const canva = $("#myChart");

    const datos = {
        labels:["Orbea", "Specialized", "Trek", "Cervelo", "Canyon"],
        datasets:[
            {
                labels:["Ventas"],
                data: [{
                    x: 2010,
                    y: 20
                },  {
                    x: 2013,
                    y: 6
                }, {
                    x: 2015,
                    y: 10
                }, {
                    x: 2018,
                    y: 17
                },],
                backgroundColor:["red","blue"],
                pointStyle: 'cross',
            }
        ]
    };

    new Chart(canva, {
        type: 'scatter', //bar,pie,line,scatter
        data:datos,
        options: {
            elements:{
                point:{
                    radius: 10,
                    hoverRadius: 15,
                },
                line:{
                    tension:5,
                    border:3,
                }
            },
            scales: {
                x: {
                  position: 'bottom',
                  suggestedMin: 2005,
                  suggestedMax: 2020,
                },
                y: {
                  suggestedMax: 30,
                  beginAtZero: true
                }
              }
        }
    });
}
