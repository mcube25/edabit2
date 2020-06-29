//create a function which returns the number of true values in an array e.g [true, false] -> 1
function countTrue(arr) {
    if (arr == []){return 0}
   else {return arr.filter(x=> x == true).length;
            }} 