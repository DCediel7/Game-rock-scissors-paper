let jugadores = document.getElementById("jugadores")
let unJugador = document.getElementById("un-jugador")
let multijugador = document.getElementById("dos-jugadores")
let juego = document.getElementById("juego-total")
let piedra = document.getElementById("boton-piedra")
let papel = document.getElementById("boton-papel")
let tijera = document.getElementById("boton-tijera")
let piedra2 = document.getElementById("boton-piedra2")
let papel2 = document.getElementById("boton-papel2")
let tijera2 = document.getElementById("boton-tijera2")
let imagenJugador1= document.getElementById("img-jugador1")
let imagenJugador2= document.getElementById("img-jugador2")
let contadorEmpate = document.getElementById("contador-empate")
let contadorJugador1 = document.getElementById("contador-jugador1")
let contadorJugador2 = document.getElementById("contador-jugador2")
let botones2 = document.getElementById("botones2")

let turno = true;
let turnos = 0;
let turnosMaximos = Number(prompt('ingrese la cantidad de turnos a jugar'));
let eleccion1 = null;
let eleccion2 = null;
let empate = 0;
let contador1 = 0;
let contador2 = 0;
let modoJuego = null;


function solo(){
    jugadores.className = "hide"
    juego.className = "show"
    modoJuego = "unJugador"
    botones2.className = "hide"
}

function multi(){
    jugadores.className = "hide"
    juego.className = "show"
    modoJuego = "multijugador"
}


unJugador.addEventListener('click', solo)
multijugador.addEventListener('click', multi)

function evento(e){
    console.log(e.currentTarget.id);
}

unJugador.addEventListener('click', evento);
multijugador.addEventListener('click', evento);

function boton(e){
    let eleccion = e.currentTarget.id;

    if(eleccion == "boton-piedra"){
        imagenJugador1.src = '/imagenes/Piedra.png';
        eleccion1 = "boton-piedra";
    } else if(eleccion == "boton-papel"){
        imagenJugador1.src = '/imagenes/Papel.png';
        eleccion1 = "boton-papel";
    } else if(eleccion == "boton-tijera"){
        imagenJugador1.src = '/imagenes/Tijera.png';
        eleccion1 = "boton-tijera";
    }

    if(modoJuego === "multijugador"){
        if(eleccion == "boton-piedra2"){
            imagenJugador2.src = '/imagenes/Piedra.png';
            eleccion2 = "boton-piedra";
        } else if(eleccion == "boton-papel2"){
            imagenJugador2.src = '/imagenes/Papel.png';
            eleccion2 = "boton-papel";
        } else if(eleccion == "boton-tijera2"){
            imagenJugador2.src = '/imagenes/Tijera.png';
            eleccion2 = "boton-tijera";
        }
    }


    if(modoJuego === "unJugador" && eleccion1){
        let opciones = ["boton-piedra", "boton-papel", "boton-tijera"];
        eleccion2 = opciones[Math.floor(Math.random() * 3)];

    
        if(eleccion2 === "boton-piedra"){
            imagenJugador2.src = '/imagenes/Piedra.png';
        } else if(eleccion2 === "boton-papel"){
            imagenJugador2.src = '/imagenes/Papel.png';
        } else{
            imagenJugador2.src = '/imagenes/Tijera.png';
        }
    }
    if (turnos == turnosMaximos){ return; }

    if(
        (modoJuego === "multijugador" && eleccion1 && eleccion2) ||
        (modoJuego === "unJugador" && eleccion1 && eleccion2)
    ){
        determinarGanador();
    }
}

function determinarGanador(){
    if(eleccion1 === eleccion2){
        alert("Empate");
        turnos++;
        empate++;
        contadorEmpate.textContent = empate;
        
    } 
    else if(
        (eleccion1 === "boton-piedra" && eleccion2 === "boton-tijera") ||
        (eleccion1 === "boton-papel" && eleccion2 === "boton-piedra") ||
        (eleccion1 === "boton-tijera" && eleccion2 === "boton-papel")
    ){
        alert("Gana Jugador 1");
        turnos++;
        contador1++;
        contadorJugador1.textContent = contador1;
        
    } 
    else{
        alert("Gana Jugador 2");
        turnos++;
        contador2++;
        contadorJugador2.textContent = contador2;
    }

    eleccion1 = null;
    eleccion2 = null;
}

piedra.addEventListener('click', boton);

papel.addEventListener('click', boton);

tijera.addEventListener('click', boton);

piedra2.addEventListener('click', boton);

papel2.addEventListener('click', boton);

tijera2.addEventListener('click', boton);


