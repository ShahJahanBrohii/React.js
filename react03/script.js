import importedNum from './test.js'
import {nameBro} from './test.js'

import shahAge  from './test2.js'
import {czn, cznAge} from  './test2.js'

let name = 'Shah Jahan'
console.log(name)

console.log(`This is the number that was imported => ${importedNum}`)// error

console.log(`This is the name that was imported => ${nameBro}`)// error


let data = document.createElement('h1');
data.innerHTML = `This is the number that was imported => ${importedNum}`
document.body.appendChild(data);

let broName = document.createElement('h1');
broName.innerHTML = `This is the name that was imported => ${nameBro}`
document.body.appendChild(broName);


let ageShah = document.createElement('h1')
ageShah.innerHTML = `This is default export => ${shahAge}`

document.body.appendChild(ageShah);

let cznName = document.createElement('h1');
cznName.innerHTML = `This is named export => ${czn}`
document.body.appendChild(cznName);

let ageCzn = document.createElement('h1');
ageCzn.innerHTML = `This is named export => ${cznAge}`
document.body.appendChild(ageCzn);




let title = document.getElementById("title");
let btn = document.getElementById("btn");

btn.addEventListener("click",()=>{
    title.innerHTML = "I have been changed due to the button clicked"
    title.style.color = "red"
});