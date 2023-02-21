const pricePerKm = 0.25;
const underAgeDiscount = 20;
const overAgeDiscount = 40;
let kmToGO;
let userAge;
let price;



do {
    kmToGO = prompt('enter number of Km to go', '');
}while(isNaN(kmToGO));

do {
    userAge = prompt('enter your age', '');
}while(isNaN(userAge) || +userAge > 130); // si presume nessuno viva dopo i 130 anni


price = pricePerKm * +kmToGO;

if(+userAge < 18){
    price = price * ((100 - underAgeDiscount)/100);
}else if(+userAge > 65){
    price = (price * (100 - overAgeDiscount) / 100);
}

price = Math.round(price);

console.log(price);