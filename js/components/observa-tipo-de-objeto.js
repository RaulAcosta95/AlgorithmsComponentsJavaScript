import { LitElement,html } from "lit-element";
export class ObservaTipoDeObjeto extends LitElement{
    constructor(){
        super();
    }
    static get properties(){

    }

}
customElements.define('observa-tipo-de-objeto', ObservaTipoDeObjeto);

// function Dog(name) {
//     this.name = name;
//   }
//   function joinDogFraternity(candidate) {
//     return candidate.constructor === Dog;
//   }
//   let verificoObjetoConstructor = new Dog ("firuralys");
//         //Si es una instancia de Dog
//   // console.log(verificoObjetoConstructor.constructor);
//   // console.log(verificoObjetoConstructor.constructor === Dog);
  