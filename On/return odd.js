function oddeven(arr) {
    if (arr.filter(num=> num % 2 !== 0).length > arr.filter(num=> num % 2 == 0).length){return true}
       else{return false}
   }