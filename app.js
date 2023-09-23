console.log("init");


async function getData(){
    let url="https://api.cmfchile.cl/api-sbifv3/recursos_api/dolar/2010/01?apikey=3e281bf471dfc4a28ea37e1523a89b182f3ade79&formato=JSON";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}

getData();
