function foo(something){
    console.log(this.a, something);
    return this.a + something;
}

// simple binding
function bind(fn, obj){
    return function(){
        return fn.apply(obj, arguments);
    }
}

const obj={
    a:2
}

console.log('obj',obj);
const fnBindObj=bind(foo,obj)
console.log(fnBindObj('haha'));