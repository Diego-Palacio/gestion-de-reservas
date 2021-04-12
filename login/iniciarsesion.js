
login=() =>{


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
    
    for(usuario of listaUsuarios){
        if(usuario.email == email){
            alert('logeado');
          return
        }
         
   }alert('Usuario inexistente');
}
 





