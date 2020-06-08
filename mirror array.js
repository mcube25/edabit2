function mirrorArray(){
    let y = arr;
    let x = y.slice(0, 1).reverse();
    let z = y.concat(x);
    return z;
}