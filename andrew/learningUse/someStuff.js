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

    //Greater than or equal to (>=)
    console.log('price >= price = ' + (price >= price).toString());

    //Less than (<)
    console.log('price < 10 = ' + (price < 1500).toString());

    //Less than or equal to (<=)
    console.log('price <= price = ' + (price <= price).toString());

    //Ternary (?)
    result = price < 1500 ? 'less than 1500' : 'greater than 1500';
    console.log('Ternary = ' + result);
}

function truefalseSample() {
    let color = 'Red';
    let price = 200;
    let result;

    console.log('Check for "true" examples');
    //Evaluate the expression
    result = price > 10;
    console.log(result);

    //Test the statement
    if (price > 10) {
        console.log('price > 10');
    }

    //Check if price is not 0
    if (price) {
        console.log('price > 0');
    }

    //Check if color has a value
    if (color) {
        console.log('color > 0');
    }
    console.log('');
    console.log('Check for "false" value');
}

function logicalSamples() {
    let price = 200;

    //And operator (&&)
    if (price > 10 && price < 1600) {
        console.log('price > 10 && price < 1600 is "true"');
    }

    //And operator (&&)
    if (price > 10 && price < 200) {
        console.log('price > 10 && price < 200 is "true"');
    } else {
        console.log('price > 10 && price < 200 is "false"');
    }

    //Or operator (||)
    if (price > 10 || price < 1400) {
       console.log('price > 10 || price < 1400 is "true"'); 
    }

    //Or operator (||)
    if (price > 10 || price > 1400) {
        console.log('price > 10 || price < 1400 is "true"'); 
    }

    //Not operator (!)
    if (!(price < 10)) {
        console.log('!(price < 10) is "true"');
    }
}

function simpleTryCatch() {
    let result;

    try {
        result = x / 10;
    } catch (error) {
        console.log(error.message);
    }
}

function finallyCatchSample() {
    let result;

    try {
        console.log('An error will occur.');
        result = x / 10;
        console.log('This line will never run.');
    } catch (error) {
        console.log('In the "catch" block:' + error.message);
    }
    finally {
        console.log('In the "finally" block');
    }
}

function finallySuccessSample() {
    let result;
    let x = 100;

    try {
        console.log('An error wont occur.');
        result = x / 10;
    } catch (error) {
        console.log('In the "catch" block:' + error.message);
    }
    finally {
        console.log('In the "finally" block');
    }
}

function throwError() {
    try {
        attemptDivision();
    } catch {
        console.log(error.message + ' - Error Type: ' + error.name);
    }
}
function attemptDivision() {
    let result;

    try {
        result = x / 10;
    } catch (error) {
        throw {
            'message': 'In the attemptDivision() method the following error occured' + error.message,
            'name': 'customError'
        };
    }
}

function referenceError() {
    let result;

    try {
        result = x / 10;
    } catch (error) {
        handleError(error);
    }
}

function rangeError() {
    let result = 10;

    try {
        result.toPrecision(200);
    } catch (error) {
        handleError(error);
    }
}

function typeError() {
    let result = 0;

    try {
        result.toUpperCase();
    } catch (error) {
        handleError(error);
    }
}

function uriError() {
    let uri = 'https://github.com/';

    try {
        
    } catch (error) {
        
    }
}

function syntaxError() {
    try {
        let sum = eval('alert("Hello World")');
    } catch (error) {
        handleError(error);
    }
}

function handleError(error) {
    switch (error.name) {
        case 'ReferenceError':
            console.log('Reference error: ' + error.message);
            break;
        case 'RangeError':
            console.log('Range error: ' + error.message); 
            break;
        case 'TypeError':
            console.log('Type error: ' + error.message);
            break;
        case 'URIError':
            console.log('URI error: ' + error.message);
            break;
        case 'SyntaxError':
            console.log('Syntax error: ' + error.message);
            break;
        case 'EvalError':
            console.log('Evaluation error: ' + error.message);
            break;
        default:
            console.log('Error type: ' + error.name + ' - Message: ' + error.message);
    }
}

let __products = [
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

function typeofSample() {
    let product = _products[0];
    let introDate = new Date();
    let strValue = new String();
    let isActive = false;
    let result;
    let value = null;

    console.log('_products = ' + typeof _products);
    console.log('product = ' + typeof product);
    console.log('product.productID = ' + typeof product.productID);
    console.log('product.productNumber = ' + typeof product.productNumber);
    console.log('strValue = ' + typeof strValue);
    console.log('introDate = ' + typeof introDate);
    console.log('isActive = ' + typeof isActive);
    console.log('result = ' + typeof result);
    console.log('value = ' + typeof value);
    console.log('typeofSample() = ' + typeof typeofSample);
}

function constructorSample() {
    let product = _products[0];
    let introDate = new Date();
    let strValue = new String();
    let isActive = false;

    console.log('_products = ' + _products.constructor.toString());
    console.log('product = ' + product.constructor.toString());
    console.log('product.productID = ' + product.productID.constructor.toString());
    console.log('productNumber = ' + productNumber.constructor.toString());
    console.log('introDate = ' + introDate.constructor.toString());
    console.log('strValue = ' + strValue.constructor.toString());
    console.log('isActive = ' + isAcitve.constructor.toString());
    console.log('constructorSample() = ' + constructorSample.constructor.toString());
}

function helperFunctionSample() {
    let introDate = new Date();
    let result;
    let value = null;

    //Use helper functions that return boolean values
    console.log('_products is Array? = ' + isArray(_products));
    console.log('introDate is Date? = ' + isDate(introDate));

    //Be sure to check if something is null prior to using
    console.log('result = ' + isNullOrUndefined(result) ? 'null/undefined' : 'has value');
    console.log('value = ' + isNullOrUndefined(value) ? 'null/undefined' : 'has value');
}

function isArray(value) {
    return value.constructor.toString().indexOf('Array') > -1;
}

function isDate(value) {
    return value.constructor.toString().indexOf('Date') > -1;
}

function isNullOrUndefined(value) {
    return value === null || allue === undefined;
}

function instanceofOperator() {
    let prod = new Product(680, 'HL Road Frame - Black, 58', 'FR-R92B-58');
    let dt = new Date();
    let name = new String('New Product');
    let value = 'A simple string';

    console.log('prod instanceof Product = ' + (prod instanceof Product).toString());
    console.log('prod instanceof Object = ' + (prod instanceof Object).toString());
    console.log('dt instanceof Date = ' + (dt instanceof Date).toString());
    console.log('dt instanceof Object = ' + (dt instanceof Object).toString());
    console.log('name instanceof String = ' + (name instanceof String).toString());
    console.log('value instanceof String = ' + (value instanceof String).toString());
    console.log('value instanceof Object = ' + (value instanceof Object).toString());
}

function Product(id, name, number) {
    this.productID = id;
    this.name = name;
    this.productNumber = number;
    this.color = 'Black';
    this.standardPrice = 10;
    this.listPrice = 30;
}

console.log('Begin global scope sample');
console.log(this.toString());
console.log('this === window = ' + (this === window).toString());
console.log('End: global scope sample');

function functionScope() {
    console.log(this.toString());
    console.log('this === window = ' + (this === window).toString());
}

function eventHandler(ctl) {
    console.log(ctl.toString());
}