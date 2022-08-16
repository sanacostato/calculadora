console.log ("estoy en main,JS");


class Calculadora {
    constructor (numero1, numero2){
        this.numero1 = numero1;
        this.numero2 = numero2;

    }
    multiplicacion(){
        this.multiplicacion = this.numero1 * this.numero2;
        console.log(`el resultado de la multiplicacion es: ${this.multiplicacion}`);
    }
    suma(){
        this.suma = this.numero1 + this.numero2;
        console.log (`el resultado de la suma es: ${this.suma}`)
    }
    resta(){
        this.resta = this.numero1 - this.numero2;
        console.log (`el resultado de la resta es: ${this.resta}`)
    }
}
let num1 = 5;
let num2 = 2;
let resultado = new Calculadora(num1, num2);
resultado.multiplicacion();
resultado.suma();
resultado.resta();
