import {unique} from './helper'

let arrSunil:number[] = [50,60,70,100,50];
let arrPawan:number[] = [20,30,40,50,60,100,80];

let spanArr1 = document.getElementById("array1");
spanArr1.innerHTML = arrSunil.join(",");

let spanArr2 = document.getElementById("array2");
spanArr2.innerHTML = arrPawan.join(",");

let ans = document.getElementById("ans");
ans.innerHTML = unique(arrPawan, arrSunil).join(",");