console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


let basket = [];
const maxItems = 5;
console.log(`Whats in the basket ${basket}`);

//adds item to arrray basket
function addItem( item ){
    console.log('in addItem');
    if( isFull() ) {
        return false;
    }else {
        basket.push( item );
        return true;
    }
    
}

//loops through and lists out the items in the array basket.
function listItems() {
    console.log('in listItems');
    for (let i=0;i<(basket.length); i++) {
        console.log(basket[i]);
   }

}

//When called returns basket to an empty arry
function empty() {
    console.log('in empty');
    basket = [];

}



//Function to check the number of items in array basket
function isFull(){
    console.log('in isFull');
    if (basket.length<maxItems){
        return false;
    }
    else {
        return true;
    }

}


//Function to remove an Item
function removeItem( item ) {
    console.log('in removeItem');
    console.log(basket.indexOf(item));
    
    if ( (basket.indexOf(item)) >= 0 ) {
        basket.splice( (basket.indexOf(item)),1 );
        return `${item}, removed`;
    }else {
        return null;
    }

}






//Test Calls
console.log(addItem('apple'));
console.log(addItem('pie'));
console.log(listItems());
console.log(isFull());
console.log(removeItem('pear'));


console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem('apples'));
console.log(`Basket is now ${basket}`);



console.log(empty());



