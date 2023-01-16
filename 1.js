let a;
a = prompt('Пожалуйста, введите что-нибудь:');
a = +a;
console.log (a);
if (typeof (a) == "number" && !isNaN(a)) {
   a%2==0?console.log ("четное число"):console.log ("нечетное число")
} else {
    console.log ("Упс, кажется, вы ошиблись")
}




