import { formatDate, replaceForDecimal } from "./utils.js";

/**
 * GET DATA FOR API cmfchile
 */
export async function getData(year, month) {
    let url = "https://api.cmfchile.cl/api-sbifv3/recursos_api/dolar/" + year + "/" + month + "?apikey=3e281bf471dfc4a28ea37e1523a89b182f3ade79&formato=JSON";

    try {
        const response = await fetch(url);
        const data = await response.json();

        const newData = data.Dolares.map(function (row) {
            console.log(row);
            let newDate = formatDate(row.Fecha);
            let newNUm = replaceForDecimal(row.Valor);

            let info = { date: newDate, value: newNUm };

            return info;
        });
        console.log(newData);
        return newData;

    } catch (error) {
        console.log(error);
        return {};
    }


}

