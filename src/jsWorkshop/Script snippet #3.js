var whatIsData = "";
//var whatIsData = "hi";

let callApi = async (url) => {
    try {
        const fetchedApi = await fetch(url);
        const fetchedJson = await fetchedApi.json();
        whatIsData = fetchedJson.fact;
        return fetchedJson.fact;
    }catch(error) {
        return ('pqnError:', error);
    }
}

callApi("https://catfact.ninja/fact").then(() => {
console.log(whatIsData);
});
                           
