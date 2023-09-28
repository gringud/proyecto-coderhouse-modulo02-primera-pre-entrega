const d = document;


const lbl_monto = d.getElementById("monto");
const lbl_dias = d.getElementById("cantDias");
const lbl_tna = d.getElementById("tna");


const btn_calcular = d.getElementById("btn-calcular");
const btn_borrar = d.getElementById("btn-borrar");


const divContenedor = d.getElementById("divContenedor");

btn_calcular.addEventListener("click", () => {

    
    validarCampos(lbl_dias, lbl_monto, lbl_tna);

    if (parseInt(lbl_dias.value) >= 30){
        if (parseInt(lbl_monto.value) >= 1000){
            if (parseInt(lbl_tna.value) > 0){

                let monto = parseInt(lbl_monto.value);
                let dias = parseInt(lbl_dias.value);
                let tna = parseInt(lbl_tna.value);

                let calc_interes = monto*(dias*tna/365)/100;
                let total_cuenta = monto + calc_interes;
                
                let calc_tea = (((1+(tna/100)/12) ** 12) -1).toFixed(2)

                const meses = 12;
                let gananciaAcumulada = 1000;
                for (let i = 0; i<= meses-1; i++){
                    console.log(gananciaAcumulada);
                    gananciaAcumulada = gananciaAcumulada + (gananciaAcumulada*30*118/365)/100;
                }
                console.log("La ganancia es: "+gananciaAcumulada);
                
                console.log("El interes ganado es: "+calc_interes);
                console.log("Total a depositar "+total_cuenta);
                console.log("El tea es "+calc_tea);

                crearTablaConValores(monto, dias, tna, calc_interes, total_cuenta, calc_tea, gananciaAcumulada);

            } else {
                console.log("El TNA debe ser mayor a 0");
                
            }   
        } else {
            console.log("Cantidad de dinero a depositar debe superar los $1000");
            
        }
    } else {
        console.log("La cantidad de dias para constituir un Plazo fijo debe ser mayor a 30 dias");
        
    }
})



btn_borrar.addEventListener("click", () => {
    lbl_monto.value = ""
    lbl_dias.value ="";
    lbl_tna.value ="";
    console.log("Borre todo!!!");
    divContenedor.innerHTML=""
    lbl_dias.classList.remove("campo-error");
    lbl_monto.classList.remove("campo-error");
    lbl_tna.classList.remove("campo-error");
})




function validarCampos(lbl_dias, lbl_monto, lbl_tna){
    console.log(lbl_dias.value);
    if ((parseInt(lbl_dias.value) <= 29)|| lbl_dias.value===""){
        lbl_dias.classList.add("campo-error")
    } else {
        lbl_dias.classList.remove("campo-error")
    }
    if ((parseInt(lbl_monto.value) <= 999)|| lbl_monto.value===""){
        lbl_monto.classList.add("campo-error")
    } else {
        lbl_monto.classList.remove("campo-error")
    }
    if ((parseInt(lbl_tna.value) <= 0)|| lbl_tna.value===""){
        lbl_tna.classList.add("campo-error")
    } else {
        lbl_tna.classList.remove("campo-error")
    }
}




function crearTablaConValores(monto,dias,tna,calc_interes, total_cuenta, calc_tea, ganancia_anual) {

    

    divContenedor.innerHTML = `
    <div class="contenedor contenedor-resp">
    <div class="contenedor-centro centro-resp">
        <div class="resp_monto resp_alineacion">
            <label class="respuestas" for="resp_monto">Monto invertido: </label>
            <p id="resp_monto">$ ${monto}</p>
        </div>

        <div class="resp_interes resp_alineacion">
            <label class="respuestas" for="resp_interes">Ingeres generado: </label>
            <p id="resp_interes">$ ${calc_interes.toFixed(2)}</p>
        </div>

        <div class="resp_total resp_alineacion">
            <label class="respuestas" for="resp_total">Total a acreditar: </label>
            <p id="resp_total">$ ${total_cuenta.toFixed(2)}</p>
        </div>

        <div class="resp_cantDias resp_alineacion">
            <label class="respuestas" for="resp_cantDias">Intrese cant. dias: </label>
            <p id="resp_cantDias">${dias}</p>
        </div>

        <div class="resp_tna resp_alineacion">
            <label class="respuestas" for="resp_tna">Intrese el TNA: </label>
            <p id="resp_tna">${tna} %</p>
        </div>

        <div class="resp_tea resp_alineacion">
            <label class="respuestas" for="resp_tea">Intrese el TEA: </label>
            <p id="resp_tea">${calc_tea} %</p>
        </div>

        <div class="resp_tea resp_alineacion">
            <label class="respuestas" for="resp_tea">Ganancia Total Anual: </label>
            <p id="resp_tea">${ganancia_anual.toFixed(2)} %</p>
        </div>
    </div>
</div>
                            ` ;
}

//segunda entrega

const btnPromt = d.querySelector(".btnPromt");
console.log(btnPromt);

const listado = d.querySelector(".listado");
/* listado.innerHTML = "asd" */



let arreglo = [];
arreglo[0] = {
    id:0,
    marca: "Ford",
    modelo: "Ka",
    precio: 5000
}

arreglo[1] = {
    id:1,
    marca: "Audi",
    modelo: "A3",
    precio: 12000
}

arreglo[2] = {
    id:2,
    marca: "Chevrolet",
    modelo: "Corsa",
    precio: 3000
}




function iniciar(){
    listado.innerHTML = `<div class="items-titulo">
                            <div>ID</div>
                            <div>Marca</div>
                            <div>Modelo</div>
                            <div>Precio</div>
                        </div>
                        `

};

function actualizar(){
    iniciar();
    for (let i = 0; i< arreglo.length; i++){
        console.log(arreglo[i]);
        listado.innerHTML += `<div class="items">
                                <div>${arreglo[i].id}</div>
                                <div>${arreglo[i].marca}</div>
                                <div>${arreglo[i].modelo}</div>
                                <div>${arreglo[i].precio}</div>
                            </div>
                            `
    }
}

/* iniciar(); */
actualizar();



const btnAgregar = d.querySelector(".agregar");
const btnBorrar = d.querySelector(".borrar-item");


function agregarItems(){
    /* let temporalMarca ="",
        temporalModelo ="",
        temporalAnio=""; */
    prompt
    let temporalMarca = prompt("Ingrese la marca");
    let temporalModelo = prompt("Ingrese el Modelo");
    let temporalPrecio = prompt("Ingrese el Precio");

    console.log(arreglo.length-1);
    console.log(arreglo[arreglo.length-1].id);

    /* arreglo.push([arreglo[arreglo.length-1].id, temporalMarca, temporalModelo, temporalAnio]); */
    arreglo.push({
        id: arreglo[arreglo.length-1].id+1, 
        marca: temporalMarca,
        modelo: temporalModelo,
        precio: temporalPrecio
    })
    console.log(arreglo);
    actualizar();
}



d.addEventListener("click", el =>{
    if (el.target.matches(".agregar")){
        agregarItems();
        console.log("presione el boton");
    }
})

d.addEventListener("click", el =>{
    if (el.target.matches(".borrar-item")){
        console.log("estoy borrando");

        /* const found = arreglo.find((el) => {
            el === 2
        } ); */

        let temporalEliminar = prompt("Ingrese el ID que quiere eliminar")
        const found = arreglo.find((element) => element.id === parseInt(temporalEliminar));
        
        arreglo = arreglo.filter((item) => item !== found)

        actualizar();
        
    }
})