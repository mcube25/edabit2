function isSubset(arr1, arr2) {
    return arr1.every(e => arr2.includes(e))
    }