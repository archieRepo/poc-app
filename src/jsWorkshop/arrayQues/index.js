const arrFreq = [2,3,3,4,5,8,9,3,4,5,8,9,9,9,8,4,3];

const getFrequency = (arr) => {
    const countFreq = arr.reduce((acc, current) => {
        acc[current] = acc[current] ? (acc[current] + 1) : 1;
        return acc;
    }, {}) 
    //return Object.entries(countFreq);
    return countFreq;
}

const arrAve = [3, 4, 5, 6, 3, 4]

const getAverage = (arr) => {
    const sum = arr.reduce((acc, curr) => {
        acc = acc + curr;
        return acc;
    }, 0)
    return sum/arr.length;
}

//console.log(getAverage(arrAve));
//console.log(getFrequency(arrFreq));

const removeDuplicate = [...new Set(arrAve)];
//console.log(removeDuplicate);
//console.log(Object.keys(getFrequency(arrFreq)));
//console.log(Object.values(getFrequency(arrFreq)));
//console.log(Object.entries(getFrequency(arrFreq)));

const getMod = (arr) => {
    const freqObj = getFrequency(arr);
    let mode = [];
    let maxCount = 0;
    for(let num in freqObj){
        if(freqObj[num] > maxCount){
            mode = [num];
            maxCount = freqObj[num];
        }else if(freqObj[num] === maxCount) {
            mode.push(num);
            maxCount = freqObj[num];
        }
    }
    return mode;
};

//console.log(getMod(arrFreq));

const convertToObj = (arr) => {
    const convertedObj = arr.reduce((acc, curr, i) => {
            acc[i] = curr;
        return acc
    }, {})

    return convertedObj
}

const obj1 = {...arrAve}
//console.log(convertToObj(arrAve));
//console.log(Object.assign({}, arrAve));

const fibonacci = (n) => {
    const fib = [0, 1];

    for(let i=2; i<=n; i++){
        fib[i] = fib[i-1] + fib[i-2];
    }

    return fib[n];
};

const plindrom = (str) => {
    return str === str.split('').reverse().join('');
}

console.log(plindrom('ttett'))


