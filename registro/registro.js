
registrar=() =>{


    const form= document.getElementById("form");
    const email= document.getElementById("email").value;
    const password= document.getElementById("contraseña").value;
    

class Usuario{
    email;
    password;

    constructor(email, password){
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

let user = new Usuario(email, password);
for(usuario of listaUsuarios){
    if(usuario.email == email){
        alert('Este usuario ya esta registrado');
        return;
    }
}
alert('Registro exitoso');

listaUsuarios.push(user);
localStorage.setItem('usuarios',JSON.stringify(listaUsuarios));

 }



 