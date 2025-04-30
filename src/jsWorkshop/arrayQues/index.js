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

//console.log(plindrom('ttett'))


const arr8 = [56,789,2787,8762];

//find differnce between max and min item or find highest difference between two element

const findMaxDiff = (arr) => {
    const maxVal = Math.max(...arr);
    const minVal = Math.min(...arr);
    console.log("values:", minVal, maxVal);
    return maxVal - minVal

}

//console.log(findMaxDiff(arr8));

// try these TODO console.log(new Map(arr8));

const getWinnerAmmount = (arr) => {
    let prize = 0;
    while(arr.length !== 1) {
        arr.sort((a,b) => a-b)
        prize += (arr[arr.length-1] - arr[0]);
        arr[0] = arr[arr.length-1] - arr[0];
        arr.pop();
        console.log(hhi);
    }
    return prize;
}

//console.log(getWinnerAmmount([2,3,4,9]));


const findPattern = (arr, randomNum) => {
    const part = Math.floor(arr.length/randomNum);
    const pattern = []
    for(let i=1; i <= part; i++){
        if(i%2 !== 0){
            pattern.push(...arr.slice(0,randomNum).sort((a,b) => a-b))
        }else {
            pattern.push(...arr.slice(randomNum, arr.length).sort((a,b) => b-a))
        }
    }
    return pattern;
}

//console.log(findPattern([19,5,6, 28, 8, 10, 27, 56], 3));







function main(input){
    let max = Math.max(...input);

    let indexOfMax = input.indexOf(max);
    let min = Math.min(...input.slice(0, indexOfMax));

    let diff = max - min;

    return diff;
};

console.log(main([5,4,3,8,9,10]));


let arrToSort = [278, 277, 89, 88];


arrToSort.reduce((acc, curr, i) => {
    console.log(i);
    if((i > 0) && (acc[i-1] < curr)){
        acc.push(curr);
    }
    return acc;
}, [arr[0]]);

console.log(arr);