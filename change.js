function changeEnough(change, amountDue) {
    return (change[0]* 25 + change[1]*10 + change[2]*5 + 
        change[3])/100 >= amountDue;
}