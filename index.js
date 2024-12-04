//Q1
function receivesAFunction(callback) {
    callback()
}
receivesAFunction(function spy() {})

//Q2
function returnsANamedFunction() {
    return function fn(){}
}

//Q3
function returnsAnAnonymousFunction() {
    return function () {}
}