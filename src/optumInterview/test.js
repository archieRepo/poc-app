const getData = async () => {
    let url = "https://catfact.ninja/fact"
    let data = await fetch(url);
    let jsonData = await data.json();
    return jsonData;
}

const printData = async () => {
    let printableData = await getData();
    console.log(printableData);
}

printData();