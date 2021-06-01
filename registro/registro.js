

registrar=() =>{
    
    const form= document.getElementById("form");
    const email= document.getElementById("email").value;
    const password= document.getElementById("contraseña").value;
   
    const expresiones = {
      /*  user:  /[A-Za-z0-9]{1,30}/,*/
        cuenta: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/ ,
        pass: /^(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})\S{8,}$/,    }
    

class Usuario{
    email;
    password;
    turnos;
    conectado;
    constructor(email, password){
        this.email = email;
        this.password = password;
        this.turnos="";
        this.conectado="";
    }
}

   form.addEventListener("submit", function(event){

        event.preventDefault();
    })
    
let  listaUsuarios = JSON.parse (localStorage.getItem('usuarios'));
let admin = new Usuario("administrador@hotmail.com", "Administrador","","");

if(listaUsuarios == null){
    listaUsuarios = new Array();
    listaUsuarios.push(admin);
    localStorage.setItem('usuarios',JSON.stringify(listaUsuarios));
}

let user = new Usuario(email, password);

for(u of listaUsuarios){

    if(u.email == email){
        alert('El email ya esta registrado');
        return; }

    if(u.email == email || email =="administrador@hotmail.com") {
        alert('El email ya esta registrado');
        return;}

       if( ! expresiones.cuenta.test(email)){
            alert("email no valido")
             return; } 

   /* if( ! expresiones.user.test(usuario)){
       alert("Usuario no valido")
        return; }*/
   
    if( ! expresiones.pass.test(password)){
    alert("Password no valido, debe tener como minimo 8 caracteres y una mayuscula")
    return;}
   
}

alert('Registro exitoso');
window.location.href="../cliente/cliente.html";





listaUsuarios.push(user);

localStorage.setItem('usuarios',JSON.stringify(listaUsuarios));

for(u of listaUsuarios){
    if(u.email == email){
       u.conectado="true";
       localStorage.setItem('usuarios',JSON.stringify (listaUsuarios));
        return; }
}

}



 //test()	Prueba una coincidencia en una cadena. Devuelve true o false

validartarjeta=()=>{
    const formularioTarjeta= document.getElementById("contenedor-formulario-tarjeta");
    const furmularioPrincipal= document.getElementById("contenedor-formulario-principal");

    const numeroTarjeta= document.getElementById("tarjeta").value;
    const formnombres= document.getElementById("nombres").value;
    const formcodigo= document.getElementById("codigo").value;

    const expresiones = {
        nombres: /^[a-zA-Z]*$/,
        tarjeta: /[1-9]{16}/,    
        codigo: /[1-9]{3}/
    }

    if( ! expresiones.tarjeta.test(numeroTarjeta)){
                alert("tarjeta no valida")
                 return; } 
     if( ! expresiones.nombres.test(formnombres)){
                 alert("nombre no validos")
                     return; }             
      if( ! expresiones.codigo.test(formcodigo)){
                alert("nombre no validos")
                    return; }      
                 
    else{formularioTarjeta.style.display="none";
    furmularioPrincipal.style.display="";
    titulo.innerHTML="Crea tu cuenta";
    }

    
    


}


formularioTarjeta=()=>{
    const titulo= document.getElementById("titulo");
     const formularioTarjeta= document.getElementById("contenedor-formulario-tarjeta");
    const furmularioPrincipal= document.getElementById("contenedor-formulario-principal");
   

    formularioTarjeta.style.display="";
    furmularioPrincipal.style.display="none";
    titulo.innerHTML="Tarjeta de debito";
    
   
    
        
}

formularioOpcional=()=>{
    const titulo= document.getElementById("titulo");
     const formularioTarjeta= document.getElementById("contenedor-formulario-tarjeta");
    const furmularioPrincipal= document.getElementById("contenedor-formulario-principal");
   

    formularioTarjeta.style.display="";
    furmularioPrincipal.style.display="none";
    titulo.innerHTML="Tarjeta de mercado pago";

  
   
}

volveratras=(b)=>{
    const titulo= document.getElementById("titulo");
    const formularioTarjeta= document.getElementById("contenedor-formulario-tarjeta");
    const furmularioPrincipal= document.getElementById("contenedor-formulario-principal");

    formularioTarjeta.style.display="none";
    furmularioPrincipal.style.display="";
    titulo.innerHTML="Crea tu cuenta";


}