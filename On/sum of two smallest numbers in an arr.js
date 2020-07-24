function sumTwoSmallestNums(arr) {
    let x = arr.sort((a,b)=> a-b).filter(y=>y >=0);
        return x[0]+x[1]
    }