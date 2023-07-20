/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */
function cambiarunidades(id,Valor){
    if(isNaN(Valor)){
        alert("El valor ingresado es invalido. Ingrese valores en " + id + ".");
        document.lasunidades.unid_metro.value= " ";
        document.lasunidades.unid_pie.value= " ";
        document.lasunidades.unid_yarda.value= " ";
        document.lasunidades.unid_pulgada.value=  " ";

    }else if (id=="metro"){ 

        document.lasunidades.unid_pulgada.value= Valor*39.3701;
        document.lasunidades.unid_pie.value=Valor*3.28084;
        document.lasunidades.unid_yarda.value=Valor*1.0936;
    }else if(id=="pulgada"){
        document.lasunidades.unid_metro.value = Valor*0.0254;
        document.lasunidades.unid_pie.value = Valor*0.0833333;
        document.lasunidades.unid_yarda.value = Valor*0.0277778;
        }else if(id=="pie"){
            document.lasunidades.unid_metro.value = Valor*0.3048;
            document.lasunidades.unid_yarda.value = Valor*0.333333;
            document.lasunidades.unid_pulgada.value= Valor*12;
        }
        else if(id=="yarda"){
            document.lasunidades.unid_metro.value = Valor*0.9144;
            document.lasunidades.unid_pulgada.value= Valor*36;
            document.lasunidades.unid_pie.value = Valor*3;
        }

}
let cargarlisteners = ()=> {
    document.getElementById ("mycanvas").addEventListener("mousemove", dibujarcuadriculado)
}
let dibujarcuadriculado = () =>{
    const canvas = document.getElementById("mycanvas");
    const ctx = canvas.getcontext("2d");

    const anchoMax = canvas.Width;
    const alturaMax = canvas.Height;
    const paso = 20;
//lineas Verticales
    for(let i=paso; i<anchoMax; i+=paso){
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, alturaMax);
    ctx.strokeStyle = "#000000";
    ctx.stroke();
    ctx.closePath();
}
//lineas horizontales
for(let i=paso; i<alturaMax; i+=paso){
    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(anchoMax, i);
    ctx.strokeStyle = "#000000";
    ctx.stroke();
    ctx.closePath();
}
//eje x
    ctx.beginPath();
    ctx.moveTo(0, alturaMax/2);
    ctx.lineTo(anchoMax, alturaMax/2);
    ctx.strokeStyle = "red";
    ctx.stroke();
    ctx.closePath();
    //eje y
    ctx.beginPath();
    ctx.moveTo(anchoMax/2, 0);
    ctx.lineTo(anchoMax/2, alturaMax);
    ctx.strokeStyle = "red";
    ctx.stroke();
    ctx.closePath();

}

