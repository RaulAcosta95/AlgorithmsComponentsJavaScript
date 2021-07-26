import { LitElement,html } from "lit-element";
export class ConvierteANumerosRomanos extends LitElement{
    static get properties(){
        return {
            resultado: {type: String},
            num: {type: Number}
        }
    }
    constructor(){
        super();
        this.resultado="";
        this.num=0;
    }
    render(){
        return html `
            <link rel="stylesheet" href="./css/contenedorComponent.css">
            <div class="componentShadowDOM">
                <h3>Convierte un número entero a numero Romano</h3>
                <p>Toma un número entero y lo conviere a notación romana.</p>
                <label for="numero">Introduce número entero</label> <br>
                <input id="numero" @change=${this.cambiaNumero} type="number" name="numero" placeholder="EJ: 24"> <br>
                <button @click=${this.convertToRoman}>EJECUTA</button>
                <p>Resultado: <b>${this.resultado}</b></p>
            </div>
        `
    }

    cambiaNumero(e){
        if(e.target.value<=0){
            return alert("Los romanos no conocían los números negativos.")
        }else if(e.target.value>4999){
            return alert("Números mayores a 4999 usan caracteres especiales.")
        }
        this.num = e.target.value;
    }

    convertToRoman(){
        if (this.num<=0) {
            return alert("Los romanos no conocían los números negativos.")
        }
        const num = this.num;
        let numRomano;
        let digits = String(+num).split(""),
                romans = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
                        "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
                        "","I","II","III","IV","V","VI","VII","VIII","IX"],
                roman = "",
        i = 3;
        while (i--){
            roman = (romans[+digits.pop() + (i * 10)] || "") + roman;
        }
        numRomano = Array(+digits.join("") + 1).join("M") + roman;
        console.log('CONVIERTE UN NÚMERO ENTERO A NÚMERO ROMANO');
        console.log(num+" es "+numRomano);
        this.resultado = numRomano;
        return numRomano

    }
}
customElements.define('convierte-a-numeros-romanos',ConvierteANumerosRomanos);
// Convierte a numeros romanos
// function convertToRoman(num) {
//     let numRomano;
//     if (!+num){
//       return false;
//     }
//     let digits = String(+num).split(""),
//             romans = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
//                   "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
//                   "","I","II","III","IV","V","VI","VII","VIII","IX"],
//             roman = "",
//     i = 3;
//     while (i--){
//       roman = (romans[+digits.pop() + (i * 10)] || "") + roman;
//     }
//     numRomano = Array(+digits.join("") + 1).join("M") + roman;
//     console.log(numRomano);
//     return numRomano
//   }
  
//    convertToRoman(36);