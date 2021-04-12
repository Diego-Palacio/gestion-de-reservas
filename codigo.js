 i=0;
usuarios=new Array;

usuariosa= new Array();

registrar=() =>{

const form= document.getElementById("form");
const email= document.getElementById("email");
const contraseña= document.getElementById("contraseña");


form.addEventListener("submit", function(event){

    event.preventDefault();
})


     let users=   (
        {
            usuario: email.value,
            password: contraseña.value
        }

        
    );

//console.log(users.usuario);

//contador para 
contador=0;


//Si localStorage esta vacio le agrego el usuario y tambien lo agrego a un array usuarios
 if( localStorage.length==0){
    
      localStorage.setItem(localStorage.length, JSON.stringify(users));
      usuarios.push(users);
  
 }

//Cuando se refresca la pagina se pierden todos los usuarios del arreglo, entonces los vuelvo a cargar
if (usuarios.length==0 && localStorage.length!=0){
    
    for(x=0; x<localStorage.length;x++){
         usuarios.push(localStorage.getItem(x))
         console.log(usuarios)
    }
    contador=localStorage.length;
}

 else {

    //Recorro todos los usuarios del arreglo
    for(u of usuarios){
       
        console.log(localStorage.length)
        //si el usuario ingresado ya existia lo informo mediante un alert
     
        if(u.usuario==users.usuario && contador!=localStorage.length ){
                alert("Este email ya ah sido utilizado")
                console.log(u.usuario)
          }
         else{
                contador++;}
         }   
 }
   
 //si el usuario ingresado no existia informo mediante un alert que el registro fue exitoso
      if(contador==localStorage.length ){ 
        alert("Usuario ingresado")
      localStorage.setItem(localStorage.length, JSON.stringify(users));
      usuarios.push(users);}

 i++;

}


iniciar=() =>{


const form= document.getElementById("form");
const email= document.getElementById("email");
const contraseña= document.getElementById("contraseña");


form.addEventListener("submit", function(event){

    event.preventDefault();
})

    let users=   (
        {
            usuario: email.value,
            password: contraseña.value
        }
  );
  

     for(x=0; x<localStorage.length;x++){
        usuariosa.push(localStorage.getItem(x))
         console.log(usuariosa)
        }
       
       for(u of usuariosa)
        {

            console.log(u.usuario)
            console.log(users.usuario)
             if(u.usuario==users.usuario){
           console.log("usuarios logeado")
       }
        }

  

    }
    