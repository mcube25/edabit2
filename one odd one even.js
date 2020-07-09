function oneOddOneEven(n) {
    return String(n)[0] % 2 === 0 && String(n)[1] % 2 !== 0 ||
     String(n)[0] % 2 !== 0 && String(n)[1] % 2 === 0; 
}