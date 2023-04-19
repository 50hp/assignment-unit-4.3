console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


let basket = [];
console.log(basket);

//adds item to arrray basket
function addItem( item ){
    console.log('in addItem');
    basket.push( item )
    
    return console.log( basket, true );
}

//loops through and lists out the items in the array basket.
function listItems() {
    for (let i=0;i<(basket.length); i++) {
        console.log(basket[i]);
   }



}

//When called returns basket to an empty arry
function empty() {





}

//Test Calls
console.log(addItem('apple'));
console.log(empty());
console.log(addItem('pie'));
console.log(listItems());










