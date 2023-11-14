let priceMoneys = "₽80 000";
let discountedPrice = "₽64 000";
let discountedDate = "предложение действует до 31.12.2023";
let discountedEndDate = new Date("2023-12-31");

let curentDate = new Date();

function updatePrice(elementId, price, discountPrice, discountDate, endDate, currentDate) {
    if (currentDate < endDate) {
        let Money = document.getElementById(`priceMoney${elementId}`);
        let Discount =  document.getElementById(`discountedPrice${elementId}`);
        let discountedDate = document.getElementById(`discountedDate${elementId}`);
        Money.textContent = price;        
        Money.style = 'text-decoration: line-through; font-size: max(150%); font-family: "Gotham Pro Light", sans-serif;';
        Discount.textContent = discountPrice;
        discountedDate.textContent = discountDate;
        discountedDate.style = 'font-size: max(100%); text-transform: lowercase; font-family: "Gotham Pro Light", sans-serif;';
    } else {
        let Money = document.getElementById(`priceMoney${elementId}`);
        let Discount =  document.getElementById(`discountedPrice${elementId}`);
        let discountedDate = document.getElementById(`discountedDate${elementId}`);
        Money.textContent = price;
        // Money.classList.remove(`strike-through${elementId}`);
        Discount.textContent = "";
        Discount.classList.remove(`discountedPrice`);
        discountedDate.textContent = "";
        discountedDate.classList.remove(`discountedDate`);
    }
}

updatePrice('1', priceMoneys, discountedPrice, discountedDate, discountedEndDate, curentDate);
updatePrice('2', priceMoneys, discountedPrice, discountedDate, discountedEndDate, curentDate);
