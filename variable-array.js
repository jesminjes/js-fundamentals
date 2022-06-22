var bottleColor = 'yellow';
var waterQuantity = 1;
var isFull = false;

// array 
var items = ['bottle', 'mug', 'papper', 'pen'];
items.indexOf('logens');  // -1
items.push('envelope');
items.concat('watch');
items.pop();

//conditional 
if(items.length >=4){
    console.log('You have too my stuff on your desk.');
}
else if(items.length == 4){
    console.log('you only have one hali items');
}
else{
    console.log('wow! You have a clean desk.');
}