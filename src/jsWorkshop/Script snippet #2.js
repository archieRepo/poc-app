const getData = async () => {
    let url = "https://catfact.ninja/fact"
    let data = await fetch(url);
    let returnableData = await data.json();
    //console.log(returnableData);
    return returnableData.fact;

}

const printData = async () => {

    debugger;
   try {  
       var printableData = 
        await getData();
    } catch (error){
        console.log('pwn', error)
    }
       return console.log(printableData); 
}

printData();

//console.log(printableData)