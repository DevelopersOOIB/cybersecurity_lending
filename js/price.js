let priceMoneys = "80 000 рублей";
let discountedPrice = "64 000 рублей";
let discountedDate = "до 31.12.2023";
let discountedEndDate = new Date("2023-12-31");

let curentDate = new Date();

function updatePrice(elementId, price, discountPrice, discountDate, endDate, currentDate) {
    if (currentDate < endDate) {
        let Money = document.getElementById(`priceMoney${elementId}`);
        let Discount =  document.getElementById(`discountedPrice${elementId}`);
        let discountedDate = document.getElementById(`discountedDate${elementId}`);
        Money.textContent = price;        
        Money.style = 'font-size: max(200%);';
        Discount.textContent = discountPrice;
        discountedDate.textContent = discountDate;
    } else {
        let Money = document.getElementById(`priceMoney${elementId}`);
        let Discount =  document.getElementById(`discountedPrice${elementId}`);
        let discountedDate = document.getElementById(`discountedDate${elementId}`);
        Money.textContent = price;
        Money.classList.remove(`strike-through${elementId}`);
        Discount.textContent = "";
        Discount.classList.remove(`discountedPrice`);
        discountedDate.textContent = "";
        discountedDate.classList.remove(`discountedDate`);
    }
}

updatePrice('1', priceMoneys, discountedPrice, discountedDate, discountedEndDate, curentDate);
updatePrice('2', priceMoneys, discountedPrice, discountedDate, discountedEndDate, curentDate);
