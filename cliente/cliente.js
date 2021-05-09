


 function buscarProfesional(){ 
    document.getElementById("contenedor").style.display="";
    document.getElementById("turnos").style.display="none";
  

    let especialidad = document.for.select.value;

    document.getElementById("especialista").innerHTML=", Especialidad:"+ especialidad;
    document.getElementById("especialista2").innerHTML=", Especialidad:"+ especialidad;
    document.getElementById("especialista3").innerHTML=", Especialidad:"+ especialidad;

    
  

}

 

function turnos(){

    document.getElementById("turnos").style.display="";
    document.getElementById("contenedor").style.display="none";
}