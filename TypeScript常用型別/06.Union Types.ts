let id: string | number;
id = "12345";
id = 333;

let names: string | string[];
names= "alice";
names = ["Alice","Bob"];

function displayPrice(price: number|[number,number]){
    if(typeof price === "number"){
        console.log(`價格:${price}`)
    }else{
        console.log(`價格範圍:${price[0]}~${price[1]}`)
    }
}

displayPrice(49.99);
displayPrice([33,55])