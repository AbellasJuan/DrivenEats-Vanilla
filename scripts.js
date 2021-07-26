


function verificaPedido(){
    const comidas = document.querySelector(".borda-verde-P");
    
    const bebidas = document.querySelector(".borda-verde-B");
    
    const sobremesas = document.querySelector (".borda-verde-S");
    
    if(comidas !== null && bebidas !==null && sobremesas !== null) {

        const SelecionarCaixaVerde = document.querySelector(".caixa-verde-final");
        SelecionarCaixaVerde.classList.remove("escondido");

        const SelecionarCaixaCinza = document.querySelector(".caixa-cinza-final");
        SelecionarCaixaCinza.classList.add("escondido");
    }
}

function selecionadoOuNaoPrato(qualPrato) {
    
    const botaoMarcado = document.querySelector(".borda-verde-P");
    if(botaoMarcado !== null) {
        const iconeMarcado = botaoMarcado.querySelector(".icone-check")  
        iconeMarcado.classList.add("escondido");

        botaoMarcado.classList.remove("borda-verde-P");
    }
    
    const selecionarItem = document.querySelector("." + qualPrato);
    selecionarItem.classList.add("borda-verde-P");
    const icone = selecionarItem.querySelector(".icone-check");
    icone.classList.remove("escondido");

    verificaPedido();
}

function selecionadoOuNaoBebida(qualBebida) {
    
    const botaoMarcado = document.querySelector(".borda-verde-B");
    if(botaoMarcado !== null) {
        const iconeMarcado = botaoMarcado.querySelector(".icone-check")  
        iconeMarcado.classList.add("escondido");

        botaoMarcado.classList.remove("borda-verde-B");
    }
    
    const selecionarItem = document.querySelector("." + qualBebida);
    selecionarItem.classList.add("borda-verde-B");
    const icone = selecionarItem.querySelector(".icone-check");
    icone.classList.remove("escondido");

    verificaPedido();
}

function selecionadoOuNaoSobremesa(qualSobremesa) {
    
    const botaoMarcado = document.querySelector(".borda-verde-S");
    if(botaoMarcado !== null) {
        const iconeMarcado = botaoMarcado.querySelector(".icone-check")  
        iconeMarcado.classList.add("escondido");

        botaoMarcado.classList.remove("borda-verde-S");
    }
    
    const selecionarItem = document.querySelector("." + qualSobremesa);
    selecionarItem.classList.add("borda-verde-S");
    const icone = selecionarItem.querySelector(".icone-check");
    icone.classList.remove("escondido");

    verificaPedido();
}

