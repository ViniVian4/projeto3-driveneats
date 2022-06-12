let itemsSelecionados = 0;

function togglePratoSelecionado(itemEscolhido){ 
    const pratoSelecionado = document.querySelector(".prato-selecionado");
    if (pratoSelecionado!= null)
        pratoSelecionado.classList.remove("prato-selecionado");
    
    const item = itemEscolhido;
    item.classList.toggle("prato-selecionado");
    atualizaItemsSelecionados();
}

function toggleBebidaSelecionada(itemEscolhido){ 
    const bebidaSelecionada = document.querySelector(".bebida-selecionada");
    if (bebidaSelecionada != null)
        bebidaSelecionada.classList.remove("bebida-selecionada");
    
    const item = itemEscolhido;
    item.classList.toggle("bebida-selecionada");
    atualizaItemsSelecionados();
}

function toggleSobremesaSelecionada(itemEscolhido){ 
    const sobremesaSelecionada = document.querySelector(".sobremesa-selecionada");
    if (sobremesaSelecionada != null)
        sobremesaSelecionada.classList.remove("sobremesa-selecionada");
    
    const item = itemEscolhido;
    item.classList.toggle("sobremesa-selecionada");
    atualizaItemsSelecionados();
}

function atualizaItemsSelecionados(){
    itemsSelecionados++;

    if (itemsSelecionados == 3){
        const botao = document.querySelector("button")
        botao.style.backgroundColor = "green";
        botao.disabled = false;
        document.querySelector("button > p").innerHTML = "Fechar pedido";
    }
}