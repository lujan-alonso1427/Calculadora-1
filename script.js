//PESO
/*
Si P > 30 ... Superficie Corporal
SI NO
Si P <= 30 ... Holliday

Función Superficie Corporal

//  Si P > 30                   V = P * 1500

Función Holliday

//  Si P > 20                   V = (P - 20) *20
                                D = V + 1500
    Si P <= 20   && P > 10;     V = (P - 10) * 50
                                D = V + 1000
    Si P <= 10                  V = (P) * 100
*/

const CALCULAR = document.getElementById("calcular");
const ERROR = document.getElementById("error");
const FLUJO = document.getElementById("flu");
const MANTENIMIENTO = document.getElementById("man")
const INPUT = document.getElementById("peso")

CALCULAR.addEventListener("click", () => {
    const PESO = INPUT.value 
    if (PESO > 0) {
        if (PESO <= 30) {
            ERROR.style.display="none"
            let flujo = Holliday(PESO)
            let mantenimiento = flujo * 1.5
            MANTENIMIENTO.innerHTML=`m+m/2 ${mantenimiento} cc/h`
            MANTENIMIENTO.style.display="block"

/*            FLUJO.innerHTML=flujo + "cc/h"
            FLUJO.style.display="block"
            console.log(flujo)
        }else{
            ERROR.style.display="none"
            let aux= SuperficieCorporal(PESO)
            let resultado1= aux*1500
            let resultado2= aux*2000
            FLUJO.innerHTML=resultado1.toFixed(2)
            FLUJO.style.display="block"

            MANTENIMIENTO.innerHTML=resultado2.toFixed(2)
            MANTENIMIENTO.style.display="block"
        }
    }else{
        ERROR.style.display="block"
        FLUJO.style.display="none"
        MANTENIMIENTO.style.display="none"
    }
})
*/
function Holliday (peso){
    let resto = peso;
    let flujo = 0;
    if (resto > 20){
        let aux = resto - 20;
        flujo += aux*1;
        resto -= aux;
    }
    if (resto > 10){
        let aux = resto - 10;
        flujo += aux*2;
        resto -= aux;
    }
    flujo += resto*4;
    return flujo;
}
function SuperficieCorporal (peso) {
    return (((peso * 4) + 7) / (peso + 90))
}