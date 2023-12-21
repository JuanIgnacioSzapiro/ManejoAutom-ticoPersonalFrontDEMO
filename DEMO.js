function expandirOcontraerCitas(){
    if(document.getElementById("opcionesCitas").style.display=="contents"){
        ocultarSublistadoOpcionesCitas();
    }
    else{
        mostrarSublistadoOpcionesCitas();
    }
}

function mostrarSublistadoOpcionesCitas(){
    document.getElementById("opcionesCitas").style.display="contents";
    document.getElementById("citas").innerHTML = "Citar a través de ▲";
}

function ocultarSublistadoOpcionesCitas(){
    document.getElementById("opcionesCitas").style.display="none";
    document.getElementById("citas").innerHTML = "Citar a través de ▼";
}

function expandirOcontraerListado(){
    if(document.getElementById("opcionesListado").style.display=="contents"){
        ocultarSublistadoOpcionesListado();

    }
    else{
        mostrarSublistadoOpcionesListado();
    }
}

function mostrarSublistadoOpcionesListado(){
    document.getElementById("opcionesListado").style.display="contents";
    document.getElementById("listado").innerHTML = "Lista de ▲";
}

function ocultarSublistadoOpcionesListado(){
    document.getElementById("opcionesListado").style.display="none";
    document.getElementById("listado").innerHTML = "Lista de ▼";
}