function afterMonth (){
    return !year? "year missing": !month? "month missing":year + Math.floor(month/12);
}