'use strict';

function simpleSwitch() {
    let productId = 2;

    switch(productId) {
        case 1:
            console.log('Product 1');
            break;
        case 2:
            console.log('product 2');
            break;
        default:
            console.log('Unknown product');
            break;
    }
}

function multipleSwitches() {
    let color = 'red';

    switch(color) {
        case 'red':
        case 'pink':
            console.log('The color is red');
            break;
        case 'Blue':
        case 'Light Blue':
        case 'Dark Blue':
            console.log('The color is blue');
            break;
        case 'Gray':
        case 'Grey':
            console.log('The color is Grey')
            break;
        default:
            console.log('Unknown color');
            break;
    }
}

function forgetABreak() {
    let thing000 = 200;
    
    switch(thing000) {
        case 1:
            console.log('This is the first thing');
            break;
        case 2:
            console.log('This is the second thing');
            break;
        case 3:
            console.log('This is the third thing');
            break;
        default:
            console.log('RGOOD');
            break;
    }
}

function forInSample() {
    let product = {
        'productID': 680,
        'productNumber': 'FR-9O41-2A',
        'name': 'iPhone 11 Pro Max',
        'color': 'Red',
        'standardPrice': 1069.99,
        'listPrice': 1299.99,
        calculateGrossProfit: function () {
            return this.listPrice - this.standardPrice;
        }
    };

    for (const key in product) {
        console.log("'" + key + "' =" + product[key]);
    }
}

let _products = [
    {
        'productID': 948,
        'name': 'iPhone XS',
        'productNumber': 'AE-F5Q1-54',
        'color': 'Yellow',
        'standardPrice': 999.99,
        'listPrice': 1299.99
    },
    {
        'productID': 570,
        'name': 'Sport-R Scooter',
        'productNumber': 'XP-P5G5-24',
        'color': 'Blue',
        'standardPrice': 74.99,
        'listPrice': 89.99
    }
];

function forOfSample() {
    for (const item of _products) {
        console.log(JSON.stringify(item));
    }
}

function loopStringSample() {
    let productName = 'Picture Frame, 12in x 8in';
    let letters = '';

    for (const char of productName) {
        letters += char;
    }
    console.log(letters);
}

let productsForBreakSample = [
    {
        'productID': 453,
        'name': 'Water, 48 pack',
        'productNumber': 'DF-F7F3-48',
        'color': 'Green',
        'standardPrice': 3.99,
        'listPrice': 4.99
    },
    {
        'productID': 546,
        'name': 'Picture Frame 4 pack, 8in x 8in',
        'productNumber': 'EF-F8D3-04',
        'color': 'Silver',
        'standardPrice': 11.99,
        'listPrice': 14.99
    }
];
function breakSample() {
    for (const item of productsForBreakSample) {
        if (item.standardPrice < 20) {
            break;
        }
        console.log(JSON.stringify(item));
    }
}

let productsForContinueSample = [
    {
        'productID': 453,
        'name': 'Water, 48 pack',
        'productNumber': 'DF-F7F3-48',
        'color': 'Green',
        'standardPrice': 3.99,
        'listPrice': 4.99
    },
    {
        'productID': 546,
        'name': 'Picture Frame 4 pack, 8in x 8in',
        'productNumber': 'EF-F8D3-04',
        'color': 'Silver',
        'standardPrice': 11.99,
        'listPrice': 14.99
    }
];

function continueSample() {
    for (const item of productsForContinueSample) {
        if (item.standardPrice > 1000) {
            continue;
        }
        console.log(JSON.stringify(item));
    }
}

function mathSample() {
    let price = 200;
    let result = 0;
    
    //Addition (+)
    result = price + 100;
    console.log('price + 100 = ' + result.toString());

    //Subtraction (-)
    result = price - 10;
    console.log('price - 10 = ' + result.toString());

    //Multiplication (*)
    result = price * 2;
    console.log('price * 2 = ' + result.toString());

    //Division (/)
    result = price / 2;
    console.log('price / 2 = ' + result.toString());

    //Exponentiation (**)
    result = price ** 2;
    console.log('price ** 2 = ' + result.toString());
    
    //Modulus (%)
    result = price % 3;
    console.log('price % 3 =' + result.toString());
    
    //Increment (++)
    result = price ++;
    console.log('result = price++ = ' + result.toString());
    console.log('price = ' + price.toString());
    result = ++price;
    console.log('result = ++price = ' + result.toString());

    //Decrement (--)
    result = price --
    console.log('result = price-- = ' + result.toString());
    console.log('price = ' + price.toString());
    result = --price;
    console.log('result = --price = ' + result.toString());
}

function plusSignSample() {
    let price = 200;
    let stringValue = '100';
    let result = 0;

    console.log('price = ' + price.toString());

    result = price + stringValue;
    console.log('result (number + stringValue) = ' + result.toString());

    result = price + (+stringValue);
    console.log('result (number + (+stringValue)) = ' + result.toString());
}

function assignmentSample() {
    let price = 200;

    console.log('price = ' + price.toString());

    //Addition (+=)
    price += 100;
    console.log('price += 100 = ' + price.toString());

    //Subtraction (-=)
    price -= 100;
    console.log('price -= 100 = ' + price.toString());
    
    //Multiplication (*=)
    price *= 2;
    console.log('price *= 2 = ' + price.toString());

    //Multiplication (*=)
    price /= 2;
    console.log('price /= 2 = ' + price.toString());

    //Exponentiation (**=)
    price **= 2;
    console.log('price **= 2 = ' + price.toString());

    //Modulus (%=)
    price %= 3;
    console.log('price %= 3 = ' + price.toString());
}

function comparisonSample() {
    let price = 200;
    let result = 0;

    console.log('price = ' + price.toString());
    console.log('');

    //Equal to (==)
    console.log('price == price = ' + (price == price).toString());

    //Equal to (==)
    result = price.toString();
    console.log('price(number) == result(string) = ' + (price == result).toString());

    //Equal to/type (===)
    result = price;
    console.log('price(number) === result(string) = ' + (price === result).toString());

    //Equal to/type (===)
    result = price.toString();
    console.log('price(number) === result(string) = ' + (price === result).toString());
    console.log('');

    //Not equal to (!=)
    result = 100;
    console.log('result = ' + (price === result).toString());
    console.log('price(number) != result(string) = ' + (price != result).toString());

    //Not equal to/Not equal type (!==)
    result = price.toString();
    console.log('price(number) !== result(string) = ' + (price !== result).toString());
    console.log('');

    //Greater than (>)
    console.log('price > 10 = ' + (price > 10).toString());
}