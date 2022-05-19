// A Recursive Closure function
function closure(one){
    return function(two){
        return two ? closure(one + two) : one
    }
}
console.log(closure(1)(2)(3)(4)(5)(6)(7)())