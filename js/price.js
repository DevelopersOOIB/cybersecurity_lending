let priceMoneys = "80 000 рублей";
let discountedPrice = "64 000 рублей";
let discountedDate = "до 05.11.2023";
let discountedEndDate = new Date("2023-11-07");

let curentDate = new Date();

function updatePrice(elementId, price, discountPrice, discountDate, endDate, currentDate) {
    if (currentDate < endDate) {
        let Money = document.getElementById(`priceMoney${elementId}`);
        let Discount =  document.getElementById(`discountedPrice${elementId}`);
        let discountedDate = document.getElementById(`discountedDate${elementId}`);
        Money.textContent = price;
        Money.style = 'font-size: 150%; text-decoration: line-through; text-decoration-color: red; text-decoration-thickness: 0.4rem; margin-bottom: 0';
        Discount.textContent = discountPrice;
        Discount.style = 'font-size: 200%; font-family: "Gotham Pro Black", sans-serif;';
        discountedDate.textContent = discountDate;
        discountedDate.style = 'font-size: 150%; font-family: "Gotham Pro Light", sans-serif; margin-bottom: 5%';
    } else {
        let Money = document.getElementById(`priceMoney${elementId}`);
        let Discount =  document.getElementById(`discountedPrice${elementId}`);
        let discountedDate = document.getElementById(`discountedDate${elementId}`);
        Money.textContent = price;
        // Discount.textContent = "";
        // discountedDate.textContent = "";
    }
}

updatePrice('1', priceMoneys, discountedPrice, discountedDate, discountedEndDate, curentDate);
updatePrice('2', priceMoneys, discountedPrice, discountedDate, discountedEndDate, curentDate);
