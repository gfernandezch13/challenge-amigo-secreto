let friends = [];

/**
 * Agrega un nuevo amigo al array de friends.
 * Valida que el nombre no esté vacío antes de agregarlo y actualiza la lista visual.
 */
function addFriends() {
  let friendName = document.getElementById("friend").value;

  if (friendName.trim() === "") {
    alert("Por favor, inserte un nombre");
  } else {
    friends.push(friendName);
    document.querySelector("#friend").value = "";
    displayFriendsList();
  }
}

/**
 * Agrega un nuevo amigo al array de friends.
 * Valida que el nombre no esté vacío antes de agregarlo y actualiza la lista visual.
 */
document.getElementById("friend").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addFriends();
    }
});

/**
 * Actualiza la visualización de la lista de amigos en el DOM, creando elementos <li> para cada amigo.
 */
function displayFriendsList() {
    let friendsList = document.querySelector("#friendsList");
    friendsList.innerHTML = "";
  
    for (let index = 0; index < friends.length; index++) {
      const element = friends[index];
  
      let listaHTML = document.createElement("li");
      listaHTML.textContent = element;
      friendsList.appendChild(listaHTML);
    }
  }

  /**
 * Sortea y muestra un amigo de la lista de amigos de manera aleatoria.
 * Verifica que la lista no esté vacía antes de realizar el sorteo.
 */
function randomlyChooseFriend() {
    let countFriend = friends.length;
    if (countFriend === 0) {
      alert("Por favor, inserte un nombre antes de sortear");
    } else {
      let indice = Math.floor(Math.random() * countFriend);
      let resultHTML = document.querySelector("#result");
      resultHTML.innerHTML = `El amigo secreto sorteado es: ${friends[indice]}`;
    }
}