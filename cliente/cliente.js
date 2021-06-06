

function guardarTurno(){

   




}















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
    let especialidad = document.for.select.value;

    if (especialidad=="Traumatologia")
    {
        document.getElementById("turnos").style.display="none";
        swal({ title: "No hay turno disponible",
        text: "",
        icon: "warning",
        button: "Volver a ingresar dato",
        });    
  
   return;

    }


    
    
/*
    
    let  listaUsuarios = JSON.parse (localStorage.getItem('usuarios'));
 
    //recorro la lista de usuarios y su coincide con el user y contraseña se ingresa al sistema
       for(u of listaUsuarios){
       if(u.conectado=="true"){
           alert('Confirmado');
           turno =u.turnos+="12";
           localStorage.setItem('usuarios',JSON.stringify (listaUsuarios));
           return;
          
       }

  }
 */
}

cerrarSesion=()=>{
    let  listaUsuarios = JSON.parse (localStorage.getItem('usuarios'));
    for(u of listaUsuarios){
        if(u.conectado=="true"){
          
           u.conectado="false";
           localStorage.setItem('usuarios',JSON.stringify (listaUsuarios));
            return; }
    }

}

seleccionturno=()=>{

   

/* Para obtener el texto */
var combo = document.getElementById("seleccionTurno");
var selected = combo.options[combo.selectedIndex].text;

  return(selected);
}




reservarTurno=()=>{
 

  let  listaUsuarios = JSON.parse (localStorage.getItem('usuarios'));

  
    //recorro la lista de usuarios y su coincide con el user y contraseña se ingresa al sistema
       for(u of listaUsuarios){
       if(u.conectado=="true"){
           swal({
            title: "Tienes un turno el "+ u.turnos,
            text: "",
            icon: "success",
            button: "Salir",
          });
        
           u.turnos=seleccionturno();
           localStorage.setItem('usuarios',JSON.stringify (listaUsuarios));
           return;
          
       }
     

  
}




}