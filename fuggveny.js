function masod(szam) {
    if (szam === undefined ){
        return "Nincs paraméter"
    }
    if (arguments.length>1){
        return "Egynél több paraméter"
    }
    if(isNaN(szam)){
        return "Nem szám a bemenet"
    }

    szam = parseInt(szam)
    if (szam<=0){
    return "Pozitiv szám, csak a bemenet"
    }

    return Math.abs(parseInt(szam)) % 10;
}
