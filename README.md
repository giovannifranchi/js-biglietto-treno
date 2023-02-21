Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.


---------------------
// viene creata una variabile PricePerKm
// viene creata variabile UnderAgeDiscount = 20
// viene creata variabile OverAgeDiscount = 40
// viene creata una variabile KmToGo che estrae il dato con un prompt
    //Bonus: se il dato non corrisponde a numero, un do-while continua a richiedere il prompt
// viene creata una variabile UserAge che estrae il dato con un prompt
    //Bonus: se il dato non corrisponde a numero, un do-while continua a richiedere il prompt
    // si crea una variabile price = PricePerKm * KmToGo
    // se UserAge è < 18 allora price = price * ((100 - UnderAgeDiscount) / 100);
    // se UserAge è > 65 allora price = price * ((100 - OverAgeDiscount) / 100);
    // in tutti gli altri casi price = price;
    // si logga il price;
