function executarExercicio1() {
    alert("Crie um programa onde o usuário possa cadastrar estudantes sem limites, e, em seguida, Se o usuário digitar PARE o programa deve exibir a quantidade de estudantes cadastrados e a lista com cada um deles.")

    let estudantes = [];
    let nome;
    while ((nome = prompt("Digite o nome do estudante ou 'PARE' para parar:")) !== "PARE") {
        estudantes.push(nome);
    }

    alert(`Total de estudantes cadastrados: ${estudantes.length}\n${estudantes.join("\n")}`);
}