let arrSunil:number[] = [50,60,70,100,50];
let arrPawan:number[] = [20,30,40,50,60,100,80];


let spanArr1 = document.getElementById("array1");
spanArr1.innerHTML = arrSunil.join(",");


let spanArr2 = document.getElementById("array2");
spanArr2.innerHTML = arrPawan.join(",");

function unique(arr1:number[], arr2:number[]){
  let uniqueArray:number[] = [];
  for(let i:number = 0; i <=arr1.length; i++){
    let isUnique:boolean = true;
    for(let j:number = 0; j <= arr2.length; j++){
      if(arr1[i] == arr2[j]){
        isUnique = false;
        break;
      }
    }
    if(isUnique){
      uniqueArray.push(arr1[i]);
    }
  }

  return uniqueArray;
}
let ans = document.getElementById("ans");
ans.innerHTML = unique(arrPawan, arrSunil).join(",");