var id;
id = "12345";
id = 333;
var names;
names = "alice";
names = ["Alice", "Bob"];
function displayPrice(price) {
    if (typeof price === "number") {
        console.log("\u50F9\u683C:".concat(price));
    }
    else {
        console.log("\u50F9\u683C\u7BC4\u570D:".concat(price[0], "~").concat(price[1]));
    }
}
displayPrice(49.99);
displayPrice([33, 55]);
