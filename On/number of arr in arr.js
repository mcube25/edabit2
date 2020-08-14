function numOfSubbarrays(arr) {
    return arr.filter(x=> Array.isArray(x)).length
    }