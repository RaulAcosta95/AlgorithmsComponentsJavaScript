import { LitElement,html } from "lit-element";
export class FraccionaUnArreglo extends LitElement{
    constructor(){
        super();
        this.resultado=[];
        this.arr=[];
    }
    static get properties(){
        return {
            resultado:{type:Array},
            arr: {type: Array},
            size:{type:Number}
        }
    }
    render(){
        return html `
        <link rel="stylesheet" href="./css/contenedorComponent.css">
        <div class="componentShadowDOM">
            <h3>Fracciona un arreglo</h3>
            <p>Introduce un arreglo y un numero en el cual va a fraccionar el arreglo.</p>
            <p>EJ: "["a", "b", "c", "d","e"]" y "2"</p>
            <label for="arreglo">Introduce dato de arreglo</label> <br>
            <input id="elementoArreglo" type="text" name="arreglo" placeholder="EJ: a"> <br>
            <button @click=${this.pushArr}>Push</button><br>
            <label for="divisor">Introduce número divisor</label> <br>
            <input @change=${this.cambiarSize} type="text" name="divisor" placeholder="EJ: 2"> <br>
            <button @click=${this.chunkArrayInGroups}>EJECUTA</button> <br>
            <p>Resultado: <b>${this.resultado}</b></p>
        </div>
        `
    }
    pushArr(){
        let temp = this.shadowRoot.getElementById('elementoArreglo').value;
        this.arr.push(temp);
        this.shadowRoot.getElementById('elementoArreglo').value ="";
    }
    cambiarSize(e){
        this.size = e.target.value;
    }
    chunkArrayInGroups() {
        let temp = [];
        let result = [];
        for (let i = 0; i < this.arr.length; i++) {
          if (i % this.size !== this.size - 1) {
              temp.push(this.arr[i]);
            }else {
                temp.push(this.arr[i]);
                result.push(temp);
                temp = [];
            }
        }
        if (temp.length !== 0) {
            result.push(temp);
        }
        console.log('FRACCIONA UN ARREGLO: ');
        console.log(result);
        this.resultado = "Este resultado se ve en la consola de JavaScript -->";
        return result;
      }

}
customElements.define('fracciona-un-arreglo',FraccionaUnArreglo);
