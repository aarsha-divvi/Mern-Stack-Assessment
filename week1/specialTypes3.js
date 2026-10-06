"use strict";
let orderData = "Smart Watch";
console.log("Product:", orderData);
orderData = 4999;
console.log("Amount:", orderData);
let deliveryStatus = true;
if (typeof deliveryStatus === "boolean") {
    console.log("Delivered:", deliveryStatus);
}
function orderSummary() {
    console.log("Order summary displayed.");
}
orderSummary();
