let orderData: any = "Smart Watch";
console.log("Product:", orderData);

orderData = 4999;
console.log("Amount:", orderData);

let deliveryStatus: unknown = true;

if (typeof deliveryStatus === "boolean") {
    console.log("Delivered:", deliveryStatus);
}

function orderSummary(): void {
    console.log("Order summary displayed.");
}

orderSummary();