/**
 * Conversion de unidades de mts, pies, yardas y pulgadas.
 * @method cambiarunidades
 * @param {string} id- El id de los inputs de las unidades de medida.
 * @param {number} Valor- El valor de los inputs de las unidades
 * @return 
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
/*
cambiarunidades = (id,valor) => {
    let met, pul, pie, yar;

    if(valor.includes(",")){
        valor = valor.replace(",", ".")
    }
    if(isNaN(valor)){
        alert("El valor ingresado es incorrecto");
        met = "";
        pul = "";
        pie = "";
        yar = "";
    }else if(id==="metro"){
        met = valor;
        pul = valor*39.3701;
        pie = valor*3.28084;
        yar = valor*1.09361;
    }else if(id==="pulgada"){
        pul=valor;
        met=valor*0.0254;
        pie=valor*0.0833333;
        yar=valor*0.0277778;
    }
    else if(id==="pie"){
        pie=valor;
        met=valor*0.3048;
        pul=valor*12;
        yar=valor*0.333333;
    }else if(id==="yarda"){
        yar=valor;
        met=valor*0.9144;
        pie=valor*3;
        pul=valor*36;
    }
    document.lasUnidades.unid_metro.value = Math.round(met*100)/100;
    document.lasUnidades.unid_pulgada.value = Math.round(pul*100)/100;
    document.lasUnidades.unid_pie.value = Math.round(pie);
    document.lasUnidades.unid_yarda.value = Math.round(yar);
}
*/


function grad_rad(id,valor){
    var rad, grad;
    if(isNaN(valor)){
        alert("El valor ingresado es invalido. Ingrese valores en " + id + ".");
        document.grados_a_radianes.unid_grados.value=" ";
        document.grados_a_radianes.unid_radianes.value=" ";
    }else if(id=="grados"){
        grad=document.getElementById("grados").value;
        rad=(grad*Math.PI)/180;
    }else if(id=="radianes"){
        rad=document.getElementById("radianes").value;
        grad=(rad*180)/Math.PI;
    }
    document.getElementById("grados").value=grad;
    document.getElementById("radianes").value=rad;
}



/*let cargarlisteners = ()=> {
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

}*/
function mostrar_ocultar(valorMO){
    if(valorMO=="val_mostrar"){
        document.getElementById("divMO").style.display='block';
    }else if(valorMO=="val_ocultar"){
        document.getElementById("divMO").style.display='none';
    }
}

function calcularsuma(){
    var num1, num2;
    num1=Number(document.getElementsByName("sum_num1")[0].value);
    num2=Number(document.getElementsByName("sum_num2")[0].value);
    document.getElementsByName("sum_total")[0].innerHTML= num1+num2;
}
function calcularresta(){
    var num1, num2;
    num1=document.getElementsByName("res_num1")[0].value;
    num2=document.getElementsByName("res_num2")[0].value;
    document.getElementsByName("res_total")[0].innerHTML= Number(num1)-Number(num2);
}
function calcularmult(){
    var num1, num2;
    num1=document.getElementsByName("mul_num1")[0].value;
    num2=document.getElementsByName("mul_num2")[0].value;
    document.getElementsByName("mul_total")[0].innerHTML= (Number(num1)* Number(num2));
}
function calculardiv(){
    var num1, num2;
    num1=document.getElementsByName("div_num1")[0].value;
    num2=document.getElementsByName("div_num2")[0].value;
    document.getElementsByName("div_total")[0].innerHTML= (Number(num1)/ Number(num2));
}

function segundaweb(){
    var cant, unidad, urlComp;
    cant=document.getElementById("distancia").value;
    unidad=document.getElementsByName("unidades")[0].value;
    urlComp= "segundaWeb.html# " + cant + "#" + unidad;
    window.open(urlComp);
}
function cargarResultados(){
    var urlComp, can, un;
    urlComp=window.location.href.split("/")[5];
    cant=urlComp.split("#")[1];
    un=urlComp.split("#")[2];
    document.getElementById("dist").value= can + " " + un;

}
function Dibujarcircuad(){
    var canvas= document.getElementById("myCanvas");
    var ctx= canvas.getcontext("2d");
    var yMax= canvas.Height;
    var margen=5;
    var xMax=canvas.Width;

    ctx.fillstyle= "#333899";
    ctx.fillrect( 0+margen, yMax-40-margen, 40, 40);
    ctx.arc(xMax/2, yMax/2, 20, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fillstyle= "#8b4c99";
    ctx.fill();
}
var bandera;
function dibujar(event){
    var canvas=document.getElementById("Minipaint");
    var ctx= getcontext("2d");
    var posx = event.clientx;
    var posy = event.clienty;
    console.log(posx, posy);
    canvas.onmousedown= function() {bandera=true};
    canvas.onmouseup= function() {bandera=false};
    if(bandera){
        ctx.fillrect(posx, posy, 5, 5);
        ctx.fill;
    }
    ctx.fillrect(posx, posy, 5, 5);
    ctx.fill();
}

function limpiarcanv(){
    var canvas= document.getElementById("limpiar");
    var ctx=canvas.getcontext("2d");
    canvas.width=canvas.width;
}

function dibujarcuadriculado (){
    var canvas= document.getElementById("myCanvas");
    var ctx=canvas.getcontext("2d");
    var alturaMax=canvas.Height;
    var anchoMax=canvas.width;
    ctx.beginPath();
    //lineas horizontales
    for(var i=0;i<alturaMax;){
    ctx.moveTo(0, i);
    ctx.lineTo(anchoMax,i);
    ctx.strokestyle= "#3e67d9"
    ctx.stroke();
    i=i+20;
    }
    ctx.closePath();
    
    //lineas verticales
    ctx.beginPath();
    for(var i=0;i<anchoMax;){
        ctx.moveTo(i, 0);
        ctx.lineTo(i,alturaMax);
        ctx.strokestyle= "#3e67d9"
        ctx.stroke();
        i=i+20;
    }
    ctx.closePath();
    //ejeX
    ctx.beginPath();
    ctx.moveTo(0, alturaMax/2);
    ctx.lineTo(anchoMax,alturaMax/2);
    ctx.strokestyle= "#d91c00"
    ctx.stroke();
    ctx.closePath();
    //ejeY
    ctx.beginPath();
    ctx.moveTo(anchoMax/2, 0);
    ctx.lineTo(anchoMax/2,alturaMax);
    ctx.strokestyle= "#d91c00"
    ctx.stroke();
    ctx.closePath();

}


