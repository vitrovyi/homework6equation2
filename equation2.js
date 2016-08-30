// var num = String(prompt('Enter val a'));

var a = Number(prompt('Enter parameter "a"'));
var b = Number(prompt('Enter parameter "b"'));
var c = Number(prompt('Enter parameter "c"'));


// function check(a) {
//     a = prompt('Enter parameter "a"');
//     return Number(a)
// }

function discriminant(a,b,c) {
    var result;
    result = b*b - 4*a*c;
    return result;
}

function findx1(a,b,c) {
    var result;
    result = (-b + Math.sqrt(discriminant(a,b,c))) / 2 * a;
    return result;
}

function findx2(a,b,c) {
    var result;
    result = (-b - Math.sqrt(discriminant(a,b,c))) / 2 * a;
    return result;
}

console.log(discriminant(a,b,c));

function main() {
    var x1 = findx1(a,b,c);
    var x2 = findx2(a,b,c);
    console.log(x1);
    console.log(x2);
}
main();
