// 1
console.log('["1","2","3"].map(parseInt)', ["1", "2", "3"].map(parseInt));
// The callback function is specified as:

// callback
// Function that produces an element of the new Array, taking three arguments:
// currentValue
// The current element being processed in the array.
// index
// The index of the current element being processed in the array.
// array
// The array map was called upon.

// Therefore your map() function expands into:

// parseInt('1', 0, the_array) # 1
// parseInt('2', 1, the_array) # NaN
// parseInt('3', 2, the_array) # NaN

//2
console.log('[typeof null, null instanceof Object]', [typeof null, null instanceof Object]);

//3
//console.log('[3,2,1].reduce(Math.pow),[].reduce(Math.pow)]',[[3,2,1].reduce(Math.pow),[].reduce(Math.pow)]);

//4
var val = 'smtg';
console.log('Value is' + (val === 'smtg') ? 'Someting' : 'Nothing');

//5 
var name='World';
(function(){
    if(typeof name==='undefined'){
        var name='Jack';
        console.log('5: Goodbye ' + name);
    }else{
        console.log('5: Hello '+name);
    }
})();







