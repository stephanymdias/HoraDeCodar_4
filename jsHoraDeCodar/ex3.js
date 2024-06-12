function executarExercicio3() {
    alert("Vamos criar uma lista de compras. Crie uma array de frutas, exiba-a ao usuário e, em seguida, peça ao usuário para digitar o nome de uma das frutas. Caso a fruta esteja no array, remova-a e exiba a mensagem Fruta foi retirada da lista. Peça novamente para o usuário digitar o nome de uma fruta para ser removida. Sempre que o usuário procurar por uma fruta que não está no array exiba a mensagem Fruta indisponível no nosso mercado. Quando o array não possuir mais itens dentro de si, escreva Lista de compras finalizada.")

    alert("Vamos criar sua lista de compras!");

    let frutas = ["kiwi", "banana", "maracuja", "manga", "abacaxi"];
    alert("Sua lista de frutas atual é: " + frutas.join(", "));

    while (frutas.length > 0) {
        let frutaEscolhida = prompt("Digite o nome de uma das frutas para retirar da lista:");

        if (frutas.includes(frutaEscolhida)) {
            frutas = frutas.filter(fruta => fruta !== frutaEscolhida);
            alert("Fruta foi retirada da lista");

            if (frutas.length > 0) {
                alert("Sua lista de frutas agora é: " + frutas.join(", "));
            }
        } else {
            alert("Fruta indisponível no nosso mercado!");
        }
    }

    alert("Lista de compras finalizada!");
}