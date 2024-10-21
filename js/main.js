//realizar un programa en java scrypt donde se ingrese un numero por teclado y verifique si el numero es perfecto o no sabiendo que un numero perfecto es la suma de sus divisores excluyendo el mismo numero
var n = prompt("ingrese el numero ")
var acumulador = 0
for (i = 1; i < n; i++) {
    if(n % i == 0){
    acumulador = acumulador + i
    }
}
if (n==acumulador){
    document.write("EL numero es perfecto " + acumulador)
}else{
   document.write("El numero no es perfecto " + acumulador)
}




