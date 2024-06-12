function executarExercicio2() {
    alert("Crie uma array de planetas que inclua Terra, Marte, Plutão, Vênus, Júpiter, Saturno  e, em seguida, peça ao usuário para digitar o nome de um planeta. Verifique se o planeta que o usuário informou está na array e informe ao usuário.")

    let planetas = ["Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno"];
    let planetaUsuario = prompt("Digite o nome de um planeta:");

    if (planetas.includes(planetaUsuario)) {
        alert(planetaUsuario + " está na lista de planetas.");
    } else {
        alert(planetaUsuario + " não está na lista de planetas.");
    }

}