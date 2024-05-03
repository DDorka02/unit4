function masod(a,b,c) {
    if (a === undefined || b === undefined || c === undefined){
        return "Nincs paraméter"
    }
    if (arguments.length>3){
        return "Egynél több paraméter"
    }
    if(isNaN(a)){
        return "Nem szám a bemenet"
    }
    if(isNaN(b)){
        return "Nem szám a bemenet"
    }
    if(isNaN(c)){
        return "Nem szám a bemenet"
    }

    return Math.abs(parseInt(a)) % 10; 
    return Math.abs(parseInt(b)) % 10; 
    return Math.abs(parseInt(c)) % 10; 
}

/* function masodsor(n) {
    const LISTA = [];
    let index = 1;
    while (index <= n) {
      LISTA.push(masod(index));
      index++;
    }
    return LISTA.join(", ");
  }
   */