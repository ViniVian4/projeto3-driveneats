let itemsSelecionados = 0;
let prato;
let bebida;
let sobremesa;
let preco = 0;
let msg;

function atualizaItemsSelecionados(){
    itemsSelecionados++;

    if (itemsSelecionados == 3){
        const botao = document.querySelector("button");
        botao.style.backgroundColor = "green";
        botao.disabled = false;
        document.querySelector("button > p").innerHTML = "Fechar pedido";
    }
}

function transformaPreco (str){
    let r = str;
    r = r.slice(3, (str.length));
    r = r.replace("," , ".");
    r = Number(r);

    return r;
}

function togglePratoSelecionado(itemEscolhido){ 
    const pratoSelecionado = document.querySelector(".prato-selecionado");
    if (pratoSelecionado!= null)
        pratoSelecionado.classList.remove("prato-selecionado");
    
    const item = itemEscolhido;
    item.classList.toggle("prato-selecionado");

    prato = String(item.querySelector("p").innerHTML);
    const precodoitem = transformaPreco(String(item.querySelector(".preco").innerHTML));
    preco = preco + precodoitem;

    atualizaItemsSelecionados();
}

function toggleBebidaSelecionada(itemEscolhido){ 
    const bebidaSelecionada = document.querySelector(".bebida-selecionada");
    if (bebidaSelecionada != null)
        bebidaSelecionada.classList.remove("bebida-selecionada");
    
    const item = itemEscolhido;
    item.classList.toggle("bebida-selecionada");

    bebida = String(item.querySelector("p").innerHTML);
    const precodoitem = transformaPreco(String(item.querySelector(".preco").innerHTML));
    preco = preco + precodoitem;

    atualizaItemsSelecionados();
}

function toggleSobremesaSelecionada(itemEscolhido){ 
    const sobremesaSelecionada = document.querySelector(".sobremesa-selecionada");
    if (sobremesaSelecionada != null)
        sobremesaSelecionada.classList.remove("sobremesa-selecionada");
    
    const item = itemEscolhido;
    item.classList.toggle("sobremesa-selecionada");

    sobremesa = String(item.querySelector("p").innerHTML);
    const precodoitem = transformaPreco(String(item.querySelector(".preco").innerHTML));
    preco = preco + precodoitem;

    atualizaItemsSelecionados();
}

function enviamsg() {
    msg = "Olá, gostaria de fazer o pedido:\n - Prato: " 
    + prato + "\n - Bebida: " + bebida + "\n - Sobremesa: " 
    + sobremesa + "\n Total: R$ " + preco.toFixed(2);

    const msgCodificada = encodeURIComponent(msg);
    const linkwp = "https://wa.me/5531997975054?text=" + msgCodificada;
    
    return linkwp;
}