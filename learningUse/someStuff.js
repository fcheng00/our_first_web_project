function simpleSwitch() {
    let productId = 2;

    switch(productId) {
        case 1:
            console.log("Product 1");
            break;
        case 2:
            console.log("product 2");
            break;
        default:
            console.log("Unknown product");
            break;
    }
}
function multipleSwitches() {
    let color = "red";

    switch(color) {
        case "red":
        case "pink":
            console.log("The color is red");
            break;
        case "Blue":
        case "Light Blue":
        case "Dark Blue":
            console.log("The color is blue");
            break;
        case "Gray":
        case "Grey":
            console.log("The color is Grey")
            break;
        default:
            console.log("Unknown color");
            break;
    }
}
function forgetABreak() {
    let thing000 = 200;
    
    switch(thing000) {
        case 1:
            console.log("This is the first thing");
            break;
        case 2:
            console.log("This is the second thing");
            break;
        case 3:
            console.log("This is the third thing");
            break;
        default:
            console.log("RGOOD");
            break;
    }
}