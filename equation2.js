// var num = String(prompt('Enter val a'));
var a = 1;
var b = 4;
var c = 3;

function discriminant(a,b,c) {
    var result;
    result = b*b - 4*a*c;
    return result;
}

function x1(a,b,c) {
    var result;
    result = (-b + Math.sqrt(discriminant(a,b,c))) / 2 * a;
    return result;
}

function x2(a,b,c) {
    var result;
    result = (-b - Math.sqrt(discriminant(a,b,c))) / 2 * a;
    return result;
}

console.log(discriminant(a,b,c));

x1(a,b,c);