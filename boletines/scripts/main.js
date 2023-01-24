//obtener los elementos de la clase ".close"

let links = document.querySelectorAll('.close');
//Recorrer todos los elementos de la clase ".close"
links.forEach(function(link){

    // Agregar un evento "Click" a cada uno de los elementos de la clase ".close"
    link.addEventListener("click",function(ev){

        ev.preventDefault();
        let content = document.querySelector('.content');


        //quitarle las clases de animacion que ya tiene
        content.classList.remove('animate__fadeInDown');
        content.classList.remove('animate__animated');


        //agegar clases de animacion para su salida
        content.classList.add('animate__fadeOutUp');
        content.classList.add('animate__animated');

    
        setTimeout(function() {
           location.href = "/boletines"; 
        },600)

        return false;
    })


})
