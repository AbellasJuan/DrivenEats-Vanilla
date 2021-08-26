let contadorItems = 0;

let prato;
let bebida;
let sobremesa;

let precoPrato;
let precoBebida;
let precoSobremesa;
let precoTotal = 0;

function selecionarPrato (elemento, nomePrato, preco) {
    
    const selecionado = document.querySelector(".prato .selecionado");

    if (selecionado !== null) {
        selecionado.classList.remove("selecionado");
    } else {
        contadorItems = contadorItems + 1;
    }

    precoPrato = preco;
    prato = nomePrato;
    elemento.classList.add("selecionado");
    verificarPedido();
}

function selecionarBebida (elemento, nomeBebida, preco) {
    
    const selecionado = document.querySelector(".bebida .selecionado");

    if (selecionado !== null) {
        selecionado.classList.remove("selecionado");
    } else {
        contadorItems = contadorItems + 1;
        
    }
    precoBebida = preco;
    bebida = nomeBebida;
    elemento.classList.add("selecionado");
    verificarPedido();
}

function selecionarSobremesa (elemento, nomeSobremesa, preco) {
    
    const selecionado = document.querySelector(".sobremesa .selecionado");

    if (selecionado !== null) {
        selecionado.classList.remove("selecionado");
    } else {
        contadorItems = contadorItems + 1;
        
    }
    precoSobremesa = preco;
    sobremesa = nomeSobremesa;

    elemento.classList.add("selecionado");
    verificarPedido();
}

function confirmarPedido () {

    const modal = document.querySelector(".overlay");
    modal.classList.remove("escondido");


    precoTotal = precoPrato + precoBebida + precoSobremesa;

    document.querySelector(".confirmar-pedido .prato .nome").innerHTML = prato;

    document.querySelector(".confirmar-pedido .prato .preco").innerHTML = precoPrato.toFixed(2);

    document.querySelector(".confirmar-pedido .bebida .nome").innerHTML = bebida;

    document.querySelector(".confirmar-pedido .bebida .preco").innerHTML = precoBebida.toFixed(2);

    document.querySelector(".confirmar-pedido .sobremesa .nome").innerHTML = sobremesa;

    document.querySelector(".confirmar-pedido .sobremesa .preco").innerHTML = precoSobremesa.toFixed(2);

    document.querySelector(".confirmar-pedido .total .preco").innerHTML = precoTotal.toFixed(2);

}


function cancelarPedido () {
    const modal = document.querySelector(".overlay");
    modal.classList.add("escondido");
}

function enviarZap () {
    const telefoneRestaurante = 553299999999;
    const encodedText = encodeURIComponent(`Olá, gostaria de fazer o pedido: \n- Prato: ${prato} \n- Bebida: ${bebida} \n- Sobremesa: ${sobremesa} \nTotal: R$ ${precoTotal.toFixed(2)}`);

    const urlWhatsapp = `https://wa.me/${telefoneRestaurante}?text=${encodedText}`;
    window.open(urlWhatsapp);    
}

function verificarPedido () {
    if (contadorItems === 3) {
        const botao = document.querySelector(".fazer-pedido");
        botao.classList.add("ativo");
        botao.innerHTML = "Fazer pedido";
    }
}