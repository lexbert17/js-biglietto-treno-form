// raccolta dei dati 

const kilometresTravelledElem = document.getElementById("kilometres")
console.log(kilometresTravelledElem);

const userAgeElem = document.getElementById("age")
console.log(userAgeElem);

const resultSection = document.querySelector(".result-section")
console.log(resultSection);

const kmprice = 0.21;

// logica 

const sendBtn = document.getElementById("send");
sendBtn.addEventListener("click", function () {
  
  console.log("Funziona!!!");

  const userAge = parseInt (userAgeElem.value)
  console.log(userAge);

  const kmTravelled = parseInt (kilometresTravelledElem.value)
  console.log(kmTravelled, typeof kmTravelled);

  const basePrice =kmTravelled * kmprice
  console.log(basePrice);

  let discount= 0;
let discountMessage = "Non hai nessun sconto";

if(userAge < 18){
    discount = basePrice * 0.2
    discountMessage = `Sei minorenne, quindi hai uno sconto del 20% ( €${discount.toFixed(2)})`;

}else if (userAge >= 65) {
    discount = basePrice * 0.4;
    discountMessage = `Sei over 65, quindi hai uno sconto del 40% ( €${discount.toFixed(2)})`;
}

console.log(discount);

// calcolo prezzo  finale
const finalPrice = basePrice - discount;
console.log(finalPrice);

const userMessage = `Il prezzo del tuo biglietto è ${finalPrice.toFixed(2)}€`;
console.log(userMessage);

document.getElementById("price-text").innerHTML = userMessage;
resultSection.classList.remove("hidden");
})

// annullamento
document.getElementById("clear").addEventListener("click", function () {
    kilometresTravelledElem.value = "";
    userAgeElem.value = "";
    document.getElementById("price-text").innerHTML = "";
    resultSection.classList.add("hidden");
});


