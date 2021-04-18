
login=() =>{


    const form= document.getElementById("form");
    const password= document.getElementById("contraseña").value;
    const usuario= document.getElementById("usuario").value;

    

class Usuario{
    usuario;
    password;

    constructor(usuario, password){
        this.usuario=usuario;
        this.password = password;
    }
}
    // evento para que no se actualize la pagina al apretar algun boton
   form.addEventListener("submit", function(event){
         event.preventDefault();
    })

    //cargo la lista de usuarios
    let  listaUsuarios = JSON.parse (localStorage.getItem('usuarios'));

    //Ingreso de administrador 
   if(usuario=="administrador" && password=="Administrador"){
    alert('logeado');   
    window.location.href="../administrador/admin.html" ;
    return
    }

    //Si la lista de usuarios es vacia, entonces no existe usuario posible
    if(listaUsuarios==null){
        alert("Usuario inexistente");
    }
    
    else{ 
     //recorro la lista de usuarios y su coincide con el user y contraseña se ingresa al sistema
          for(u of listaUsuarios){
        if(u.usuario==usuario && u.password==password){
            alert('logeado');
            window.location.href="../cliente/cliente.html";
            return;
        }
   }alert('Usuario inexistente o contraseña incorrecta');
    }
  
  

}
 
//Input de ingresar email para recuperar contraseña oculto
document.getElementById("emailRecuperarContraseña").style.display="none";
document.getElementById("btnRecuperarContraseña").style.display="none";
document.getElementById("btnVolver").style.display="none";
document.getElementById("infoContraseña").style.display="none";


ocultarYmostrar=()=>{
    if( document.getElementById("usuario").style.display=="none"){
        document.getElementById("usuario").style.display="";
        document.getElementById("contraseña").style.display="";
        document.getElementById("btnRegistrarse").style.display="";
        document.getElementById("btnContraseñaOlvidada").style.display="";
       
        document.getElementById("infoContraseña").style.display="none";
        document.getElementById("btnVolver").style.display="none";
        document.getElementById("emailRecuperarContraseña").style.display="none";
        document.getElementById("btnRecuperarContraseña").style.display="none";
        document.getElementsByTagName("H1")[0].textContent = 'Inicia sesion:';

    }
    else{
    document.getElementById("usuario").style.display="none";
    document.getElementById("contraseña").style.display="none";
    document.getElementById("btnRegistrarse").style.display="none";
    document.getElementById("btnContraseñaOlvidada").style.display="none";

    document.getElementById("btnVolver").style.display="";
    document.getElementById("emailRecuperarContraseña").style.display="";
    document.getElementById("btnRecuperarContraseña").style.display="";
  
    document.getElementsByTagName("H1")[0].textContent = 'Recuperar contraseña:';
    }


 }
   
 infoContraseña=()=>{
    document.getElementById("infoContraseña").style.display="";
 }