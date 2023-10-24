let priceMoneys = "80 000 рублей";
let discountedPrice = "64 000 рублей";
let discountedEndDate = new Date("2023-10-20");

let curentDate = new Date();

function updatePrice(elementId, price, discountPrice, endDate, currentDate) {
    document.getElementById(`priceMoney${elementId}`).textContent = price;
    document.getElementById(`discountedPrice${elementId}`).textContent = currentDate < endDate ? discountPrice : "";
}

updatePrice('1', priceMoneys, discountedPrice, discountedEndDate, curentDate);
updatePrice('2', priceMoneys, discountedPrice, discountedEndDate, curentDate);
