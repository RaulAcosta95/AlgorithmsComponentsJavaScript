import { LitElement,html } from "lit-element";

export class ComparaValoresDeDosCadenas extends LitElement{
    static get properties(){
        return {
            primerCadena: {type:String},
            segundaCadena: {type: String},
            resultado: {type: String}
        }
    }
    constructor(){
        super();
        this.primerCadena="";
        this.segundaCadena="";
    }
    render(){
        return html `
            <link rel="stylesheet" href="./css/contenedorComponent.css">
            <div class="componentShadowDOM">
                <h3>Compara dos cadenas</h3>
                <p>Toma los valores de la primer cadena y asegura que cada valor coincida con los valores de la segunda cadena.</p>
                <p>Ej: "hola" y "HolA"</p>
                <input id="segundaCadena" @change=${this.cambiaSegundaCadena} type="text" name="Cadena2" placeholder="EJ: hola"> <br>
                <input id="primerCadena" @change=${this.cambiaPrimerCadena} type="text" name="Cadena1" placeholder="EJ: Hola"> <br>
                <button @click=${this.mutation}>EJECUTA</button>
                <p>Resultado: <b>${this.resultado}</b></p>
            </div>
        `
    }
    cambiaPrimerCadena(e){
        this.primerCadena = e.target.value;
    }
    cambiaSegundaCadena(e){
        this.segundaCadena = e.target.value;
    }
    mutation(){
    let primArr= this.primerCadena.toLowerCase();
    let secArr= this.segundaCadena.toLowerCase();
    for (let i = 0; i < secArr.length; i++) {
        if (primArr.indexOf(secArr[i]) < 0) {
            this.resultado= "No coinciden";
            console.log('COMPARA DOS CADENAS: ');
            console.log(this.resultado);
            return false;
        }
    }
    this.resultado= "Si coinciden";
    console.log('COMPARA DOS CADENAS: ');
    console.log(this.resultado);
    return true;
    }
}
customElements.define('compara-valores-de-dos-cadenas', ComparaValoresDeDosCadenas);
