let arr = [1, 1, 1, 1, 1];
let result;
for (let i=0; i < arr.length; i++){
  if (arr[0]===arr[i]){
    result = true
  } else {
    result = false;
    break;
  }
}
console.log(result);
