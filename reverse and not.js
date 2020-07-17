function reverseAndNot(i) {
    let k=	i.toString().split("").reverse().join("")+ i;
        return Number(k);
    }