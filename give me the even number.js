function sumEvenNumsInRange(start, stop) {
    let sum = 0;
        for (i=start; i <= stop; i++){
            if (i % 2==0){
                sum+= i;
            }
        }
        return sum;
    }