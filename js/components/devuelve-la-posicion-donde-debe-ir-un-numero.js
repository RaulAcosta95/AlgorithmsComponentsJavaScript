import { LitElement,html } from "lit-element";

export class DevuelveLaPosicionDondeDebeIrUnNumero extends LitElement{
    static get properties(){
        return {
            resultado: {type: String},
            arr: {type: Number},
            numero: {type: Number}
        }
    }
    constructor(){
        super();
        this.arr=[];
        this.numero=0;
    }
    render(){
        return html `
            <link rel="stylesheet" href="./css/contenedorComponent.css">
            <div class="componentShadowDOM">
                <h3>Devuelve la posición donde debe ir un número</h3>
                <p>Introduce una cadena de números desordenados y un número random. <br>
                Indica en qué posición va el número con respecto a su valor.
                </p>
                <label for="arreglo">Introduce número de arreglo</label> <br>
                <input id="elementoArreglo" type="number" name="arreglo" placeholder="EJ: 24" min="1" max="99"> <br>
                <button @click=${this.pushArr}>Push</button><br>
                <input id="numero" @change=${this.cambiaNumero} type="number" name="numero" placeholder="EJ: 20"> 
                <button @click=${this.getIndexToIns}>EJECUTA</button>
                <p>Resultado: <b>${this.resultado}</b></p>
            </div>
        `
    }
    pushArr(){

        let temp = this.shadowRoot.getElementById('elementoArreglo').value;
        if (temp > 99) {
            return alert("Números menores a 99")
        }
        this.arr.push(temp);
        this.shadowRoot.getElementById('elementoArreglo').value ="";
    }

    cambiaNumero(e){
        this.numero = e.target.value;
    }
    getIndexToIns(){
        this.arr.push(this.numero);
        let temp;
        let flag=true;
        while(flag){
            flag=false;
            for(let i = 0; i<this.arr.length;i++){
                if (this.arr[i]>this.arr[i+1]) {
                    temp=this.arr[i];
                    this.arr[i]=this.arr[i+1];
                    this.arr[i+1]=temp;
                    flag=true;
                }
            }
        }
        console.log('DEVUELVE LA POSICIÓN DONDE DEBE IR UN NÚMERO');
        console.log(this.arr);
        console.log('Indice: ' +this.arr.indexOf(this.numero));
        this.resultado="El index del número es " + this.arr.indexOf(this.numero);
        return this.arr.indexOf(this.numero);
    }
}
customElements.define('devuelve-la-posicion-donde-debe-ir-un-numero',DevuelveLaPosicionDondeDebeIrUnNumero);


// function getIndexToIns(arr, num) {
//     arr.push(num);
//     let temp;
//     let flag=true;
//     while(flag){
//         flag=false;
//         for(let i = 0; i<arr.length;i++){
//             if (arr[i]>arr[i+1]) {
//                 temp=arr[i];
//                 arr[i]=arr[i+1];
//                 arr[i+1]=temp;
//                 flag=true;
//             }
//         }
//     }
//     return arr.indexOf(num);
//   }
  

//   getIndexToIns([10, 20, 30, 40, 50], 35)