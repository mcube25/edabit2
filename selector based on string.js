function emsSelector(arr, str){
    return arr.sort().filter(w=> w.toLowerCase().includes(str));
}