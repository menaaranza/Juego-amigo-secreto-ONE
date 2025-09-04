let amigos = [];

//función para agregar amigos a la lista
function agregarAmigo(){
    let amigoSecreto = document.getElementById("amigo").value;
    if(amigoSecreto == ""){
        alert("Por favor, ingresa un nombre");
    }else{
        amigos.push(amigoSecreto);
        document.getElementById("amigo").value = ""; // Limpia el campo de entrada
    }
}

//función para actualizar la lista de amigos en el DOM
function actualizarLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for(let i = 0; i < amigos.length; i++){
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}


//función para sortear un amigo secreto
function sortearAmigo(){
    let resultado = document.getElementById("resultado");
    if (amigos.length === 0) {
        resultado.innerHTML = "No hay amigos para sortear.";
        return null; 
    }
    let indice = Math.floor(Math.random() * amigos.length);
    let nombreAleatorio = amigos[indice]; 
    resultado.innerHTML = `El amigo secreto es: ${nombreAleatorio}`;
    return nombreAleatorio;
}

// Función que combina agregarAmigo y actualizarLista
function agregarActualizar(){
    agregarAmigo();
    actualizarLista();
}
