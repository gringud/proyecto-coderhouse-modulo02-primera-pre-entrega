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
                

                
                console.log("El interes ganado es: "+calc_interes);
                console.log("Total a depositar "+total_cuenta);
                console.log("El tea es "+calc_tea);

                crearTablaConValores(monto, dias, tna, calc_interes, total_cuenta, calc_tea);

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




function crearTablaConValores(monto,dias,tna,calc_interes, total_cuenta, calc_tea) {

    

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
    </div>
</div>
                            ` ;
    

}