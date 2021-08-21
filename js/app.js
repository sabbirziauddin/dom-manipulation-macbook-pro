const img1 = document.getElementById('images');
const img = document.getElementById('arts');
const bestPrice = document.getElementById('best-cost');
const total = document.getElementById('total-cost');
const memoryCost = document.getElementById('memory-cost');
const storageCost = document.getElementById('storage-cost');
const deliveryCost = document.getElementById('delivery-cost');
const memory8Gb = document.getElementById('8gb-memory');
const memory16gb = document.getElementById('16gb-memory');
const storage256gb = document.getElementById('256gb-memory');
const storage512gb = document.getElementById('512gb-memory');
const storage1Tb = document.getElementById('1tb-memory');
const freeDelivery = document.getElementById('free-delivery');
const primeDelivery = document.getElementById('prime-delivery')
const promCode = document.getElementById('promo-btn');
const promoInput = document.getElementById('promo-input');
const specialDiscount = document.getElementById('special-discount')


// changing images
img1.addEventListener('click', function () {
    img.src = "images/macbook.jpg";

})

// update total

function updateTotal() {
    const bestPriceAmount = parseInt(bestPrice.innerText);
    const memoryCostAmount = parseInt(memoryCost.innerText);
    const storageCostAmount = parseInt(storageCost.innerText);
    const deliveryCostAmount = parseInt(deliveryCost.innerText);
    console.log(bestPrice.innerText, memoryCost.innerText, storageCost.innerText, deliveryCost.innerText);
    const totalAmount = bestPriceAmount + memoryCostAmount + storageCostAmount + deliveryCostAmount;
    total.innerText = totalAmount;
    specialDiscount.innerText = totalAmount;


}


// unified memory event handler
memory8Gb.addEventListener('click', function () {
    memoryCost.innerText = "0";
    updateTotal();
})
memory16gb.addEventListener('click', function () {
    memoryCost.innerText = "180";
    updateTotal();
})
// storage event handler
storage256gb.addEventListener('click', function () {
    storageCost.innerText = "0";
    updateTotal();


})
storage512gb.addEventListener('click', function () {
    storageCost.innerText = "100";
    updateTotal();


})
storage1Tb.addEventListener('click', function () {
    storageCost.innerText = "180";
    updateTotal();



})

// Delivery Event handler
freeDelivery.addEventListener('click', function () {
    deliveryCost.innerText = "0";
    updateTotal();

})
primeDelivery.addEventListener('click', function () {
    deliveryCost.innerText = "20";
    updateTotal();

})



// promoCode event handler
promCode.addEventListener('click', function () {
    const totalDiscount = parseInt(total.innerText);
    //console.log(totalDiscount);
    const promoCodeVlue = promoInput.value;
    if (promoCodeVlue == 'stevekaku') {
        const newPrice = totalDiscount * .2;
        const newTotalPrice = totalDiscount - newPrice;
        specialDiscount.innerText = newTotalPrice;
        promoInput.value = "";


    }

})






