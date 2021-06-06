
login=() =>{



    const password= document.getElementById("contraseña").value;
    const usuario= document.getElementById("email").value;

    

class Usuario{
    usuario;
    password;
    

    constructor(usuario, password){
        this.usuario=usuario;
        this.password = password;
      
    }
}
    // evento para que no se actualize la pagina al apretar algun boton
  

    //cargo la lista de usuarios
    let  listaUsuarios = JSON.parse (localStorage.getItem('usuarios'));

    //Ingreso de administrador 
   if(email=="administrador@hotmail.com" && password=="Administrador"){
    swal({
        title: "Login exitoso",
        text: "",
        icon: "success",
        button: "Volver a ingresar dato",
      });  
    window.location.href="../administrador/admin.html" ;
    return
    }

    //Si la lista de usuarios es vacia, entonces no existe usuario posible
    if(listaUsuarios==null){
        swal({
            title: "Login erroneo",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          });  
    }
    
    else{ 
     //recorro la lista de usuarios y su coincide con el user y contraseña se ingresa al sistema
          for(u of listaUsuarios){
        if(u.email==usuario && u.password==password){
            
            u.conectado="true";
            localStorage.setItem('usuarios',JSON.stringify (listaUsuarios));
            window.location.href="../cliente/cliente.html";
           
          swal({ title: "Login exitoso",
                text: "",
                icon: "success",
                button: "Volver a ingresar dato",
              });  
           
        }
   } 
   
   swal({
    title: "Usuario inexistente o contraseña incorrecta",
    text: "",
    icon: "warning",
    button: "Volver a ingresar dato",
  }); 
 
    }
  
  

}
 
//Input de ingresar email para recuperar contraseña oculto
document.getElementById("infoContraseña").style.display="none";

ocultarYmostrar=()=>{
    if( document.getElementById("contenedor").style.display=="none"){
        document.getElementById("contenedor").style.display="";
        document.getElementById("contenedor2").style.display="";
        document.getElementById("form").style.display="none";
        document.getElementById("infoContraseña").style.display="none";
        
    document.getElementsByTagName("H1")[0].textContent = 'Recuperar contraseña:';
    }
    else{
    document.getElementById("contenedor").style.display="none";
    document.getElementById("contenedor2").style.display="none";
    document.getElementById("infoContraseña").style.display="none";
    document.getElementById("form").style.display="";
    document.getElementsByTagName("H1")[0].textContent = 'Inicia sesion:';
    }
 }
   
 infoContraseña=()=>{
    document.getElementById("infoContraseña").style.display="";
 }