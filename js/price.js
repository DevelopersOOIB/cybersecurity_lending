let priceMoneys = "80 000 рублей";
let discountedPrice = "64 000 рублей";
let discountedEndDate = new Date("2023-10-20");

let curentDate = new Date();

if (curentDate < discountedEndDate) {
    document.getElementById('priceMoney').textContent = priceMoneys;
    document.getElementById('discountedPrice').textContent = discountedPrice;
} else {
    document.getElementById('priceMoney').textContent = priceMoneys;
    document.getElementById('discountedPrice').textContent = "";
};