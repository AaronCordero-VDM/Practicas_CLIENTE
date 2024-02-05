$(inicio)

function inicio() {
    const canva = $("#myChart");

    const datos = {
        labels:["Orbea", "Specialized", "Trek", "Cervelo", "Canyon"],
        datasets:[
            {
                label:"Ventas",
                data:[33, 41, 59, 21, 12],
                borderWidth: 2,
            },
            {
                label:"Modelos",
                data:[3, 4, 8, 2, 9],
                borderWidth: 2
            },
            {
                label:"Devoluciones",
                data:[11, 15, 17, 12, 18],
                borderWidth: 2
            }
        ]
    };

    new Chart(canva, {
        type: "bar", //bar,pie,line,scatter
        data:datos,
        options: {
            indexAxis: "y"
        }
    });
}
