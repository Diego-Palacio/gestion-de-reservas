

registrar=() =>{
    
    const form= document.getElementById("form");
    const email= document.getElementById("email").value;
    const password= document.getElementById("contraseña").value;
    const usuario= document.getElementById("usuario").value;
    const expresiones = {
        user:  /[A-Za-z0-9]{1,30}/,
        pass: /^(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})\S{8,}$/,    }
    
    
  

class Usuario{
    usuario; 
    email;
    password;

    constructor(usuario,email, password){
        this.usuario=usuario;
        this.email = email;
        this.password = password;
    }
}

   form.addEventListener("submit", function(event){

        event.preventDefault();
    })
    
let  listaUsuarios = JSON.parse (localStorage.getItem('usuarios'));

if(listaUsuarios == null){
    listaUsuarios = new Array();
}



let user = new Usuario(usuario,email, password);

for(u of listaUsuarios){
    if(u.email == email){
        alert('El email ya esta registrado');
        return; }

    if(u.usuario == usuario || u.usuario=="administrador"){
        alert('El nombre de usuario ya esta registrado');
        return;}
    
    if( ! expresiones.user.test(usuario)){
       alert("Usuario no valido")
        return; }
   
    if( ! expresiones.pass.test(password)){
    alert("Password no valido, debe tener como minimo 8 caracteres y una mayuscula")
    return;}



}
alert('Registro exitoso');
window.location.href="../cliente/cliente.html";


listaUsuarios.push(user);

localStorage.setItem('usuarios',JSON.stringify(listaUsuarios));



}



 //test()	Prueba una coincidencia en una cadena. Devuelve true o false






 