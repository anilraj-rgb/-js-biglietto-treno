// VARIABLE DECLARATION
let price;
const pricePerKm = 0.21;
const numberKm = Number(
    prompt("inserisci il numero di km che vuoi percorrere")
);
console.log(numberKm,typeof age);

const age = Number(prompt("Inserisci la tua età"));
console.log(age, typeof age);

// CALCULATE THE PRICE BASED ON PRICE FOR KM
price = numberKm * pricePerKm;
let finalPrice = price.toFixed(2);
console.log("Il prezzo del biglietto non scontato è " + finalPrice + "€");

//APPLY THE DISCOUNT
if (age < 18) {
    price = price - (price * 20) / 100;
  } else if (age > 65) {
    price = price - (price * 40) / 100;