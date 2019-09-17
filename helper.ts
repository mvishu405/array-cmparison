export function unique(arr1:number[], arr2:number[]){
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