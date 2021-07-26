import { LitElement,html } from "lit-element";
export class CajaRegistradora extends LitElement{
    static get properties(){
        return {

        }
    }
    constructor(){
        super();

    }
    render(){
        return html `
            <link rel="stylesheet" href="./css/contenedorComponent.css">
            <div class="componentShadowDOM">
                <h3>Caja registradora(Inconcluso)</h3>
                <p>Realiza la función de una caja registradora, pero hay que pasarle el precio del artículo, el cash disponible</p>
                <label for="precioProducto">Introduce el precio de un producto</label> <br>
                <input id="precioProducto" type="number" name="precioProducto" placeholder="EJ: 20" > <br>
                <label for="dineroActual">Introduce el dinero actual de tu caja registradora</label> <br>
                <input id="dineroActual" type="number" name="dineroActual" placeholder="EJ: 250" > <br>
                <label for="dineroActual">Introduce cualquiera de estas dos variantes</label> <br>
                <p>No puedo facilitar el ingreso del arreglo: [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]</p>

                <input id="dineroActual" type="number" name="dineroActual" placeholder="EJ: ['PENNY', 1.01]" > <br>
            </div>
        `
    }
}
customElements.define('caja-registradora', CajaRegistradora);

// Caja Registradora
// function checkCashRegister(price, cash, cid) {
//     let cidRestante = 0;
//     let cambio = cash - price;
//     const CANTIDAD = {
//       "PENNY": .01,
//       "NICKEL": .05,
//       "DIME": .10,
//       "QUARTER": .25,
//       "ONE": 1.00,
//       "FIVE": 5.00,
//       "TEN": 10.00,
//       "TWENTY": 20.00,
//       "ONE HUNDRED": 100.00
//     }
//     for (let element of cid) {
//       cidRestante = cidRestante+element[1];
//     }
//     cidRestante = cidRestante.toFixed(2);
//     const cambioDado = [];
//     if (cambio > cidRestante) {
//       return { status: "INSUFFICIENT_FUNDS", change: cambioDado };
//     } else if (cambio.toFixed(2) === cidRestante) {
//       return { status: "CLOSED", change: cid };
//     } else {
//       cid = cid.reverse();
//       for (let elem of cid) {
//         let temp = [elem[0], 0];
//         while (cambio >= CANTIDAD[elem[0]] && elem[1] > 0) {
//           temp[1] += CANTIDAD[elem[0]];
//           elem[1] -= CANTIDAD[elem[0]];
//           cambio -= CANTIDAD[elem[0]];
//           cambio = cambio.toFixed(2);
//         }
//         if (temp[1] > 0) {
//           cambioDado.push(temp);
//         }
//       }
//     }
//     console.log(cambioDado);
//     if (cambio > 0) {
//       return { status: "INSUFFICIENT_FUNDS", change: [] };
//     }
//     return { status: "OPEN", change: cambioDado};
//   }
  
//   console.log(0.5%0.5)
//   console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
//   console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5],  ["NICKEL", 0],    ["DIME", 0],   ["QUARTER", 0],    ["ONE", 0],  ["FIVE", 0],  ["TEN", 0],  ["TWENTY", 0],  ["ONE HUNDRED", 0]]));
  