// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
//Aquí deberás desarrollar la lógica para resolver el problema.

//INDICACIONES DE TRELLO 
// Declarar un array para almacenar los amigos
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
    // Capturar el valor del campo de texto
    const amigoInput = document.getElementById('amigo');
    const nombre = amigoInput.value.trim();

    // Validar que el campo no esté vacío
    if (nombre === "") {
      alert("¡Epa! Estás enviando algo vacío. Ingresa un nombre válido.");
        return;
    }

    // Actualizar el array de amigos
    amigos.push(nombre);

    // Limpiar el campo de entrada
    amigoInput.value = "";

    // Actualizar la lista de amigos en el HTML
    actualizarListaAmigos();
}

// Función para actualizar la lista de amigos en el HTML
function actualizarListaAmigos() {
    // Obtener el elemento de la lista
    const listaAmigos = document.getElementById('listaAmigos');

    // Limpiar la lista existente
    listaAmigos.innerHTML = "";

    // Iterar sobre el array de amigos y agregar cada uno como <li>
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("Por favor, añada al menos un nombre para sortear.");
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `¡El amigo secreto es: <strong>${amigoSorteado}</strong>!`;
}

/*/ Declaramos un array vacío para almacenar los nombres de los amigos
let listaDeAmigos = [];

function agregarAmigo() {
  // Obtiene el valor ingresado en el campo de texto con id "amigo"
  let nombreAmigos = document.getElementById("amigo").value;

  // Verifica si el campo está vacío para evitar agregar entradas en blanco
  if (nombreAmigos === "") {
    alert("¡Epa! Estás enviando algo vacío. Ingresa un nombre válido.");
    return; // Detiene la ejecución de la función si el input está vacío
  }

  // Agrega el nombre ingresado al array listaDeAmigos
  listaDeAmigos.push(nombreAmigos);

  // Actualiza la lista mostrada en la página, separando cada nombre con un salto de línea
  document.getElementById("listaAmigos").innerHTML = listaDeAmigos.join("<br>");

  // Muestra en la consola la lista actualizada (para depuración)
 // console.log(listaDeAmigos);

  // Limpia el campo de entrada después de agregar un nombre
  document.getElementById("amigo").value = "";
}

function sortearAmigo() {
  // Verifica si la lista está vacía antes de sortear
  if (listaDeAmigos.length === 0) {
    alert("No hay ningún nombre en la lista para sortear.");
    return;
  }

  // Genera un índice aleatorio dentro del rango de la lista
  let indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);

  // Obtiene el nombre del amigo ganador usando el índice aleatorio
  let amigoGanador = listaDeAmigos[indiceSorteado];

  // Muestra el resultado en la página
  document.getElementById("resultado").innerText = "El amigo secreto es: " + amigoGanador;

  // Muestra quien es el nombre del ganador

}

*/
/*
*/