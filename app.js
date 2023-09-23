import { getData } from "./js/data.js";


const btn = document.getElementById("btn-make");
const year = document.getElementById("year");
const month = document.getElementById("month");
const modalMessage = new bootstrap.Modal(document.getElementById('modal-message'));
const message = document.getElementById("message");
const loading = document.getElementById("loading");
const graph = document.getElementById('graph');
let graphGlobal = null;


/**
 * EVENT CLICK
 */
btn.addEventListener("click", function () {
    let yearValue = year.value;
    let monthValue = month.value;
    let countError = 0;
    let messageError = "";

    if (yearValue == "") {
        messageError += "<div>-Favor seleccionar Año</div>";
        countError++;
    }
    if (monthValue == "") {
        messageError += "<div>-Favor seleccionar Mes</div>";
        countError++;
    }

    if (countError > 0) {
        message.innerHTML = messageError;
        modalMessage.show();
    } else {
        loading.style.display = "block";
        const response = makeGraph(yearValue, monthValue);
    }
});


/**
 * MAKE GRAPH
 * @param {*} year 
 * @param {*} month 
 */
async function makeGraph(year, month) {
    const response = await getData(year, month);
    const data = response;

    if (graphGlobal != null) {
        graphGlobal.destroy();
    }


    if (Object.keys(data).length === 0) {
        message.innerHTML = "-Fecha seleccionada no tiene datos";
        modalMessage.show();
    } else {
        graphGlobal = new Chart(
            graph,
            {
                type: 'bar',
                data: {
                    labels: data.map(row => row.date),
                    datasets: [
                        {
                            label: 'Valor Dolar',
                            data: data.map(row => row.value)
                        }
                    ]
                }
            }
        );
    }



    loading.style.display = "none";
}



