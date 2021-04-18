
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

   form.addEventListener("submit", function(event){
         event.preventDefault();
    })

    let  listaUsuarios = JSON.parse (localStorage.getItem('usuarios'));
    
    for(u of listaUsuarios){
        if(u.usuario==usuario && u.password==password){
            alert('logeado');
            return;
        }
         
   }alert('Usuario inexistente o contraseña incorrecta');
}
 





