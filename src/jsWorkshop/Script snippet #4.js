var pawanK = "";

let callApi = async (url) => {
    try {
        const fetchedApi = await fetch(url);
        const fetchedJson = await fetchedApi.json();
        pawanK = fetchedJson.fact;
        return fetchedJson.fact;
    } catch (error) {
        return ('pqnError:', error);
    }
}

callApi("https://catfact.ninja/fact")
    .then(() => {
        console.log(pawanK); // Logs the fetched data after it's available
    });