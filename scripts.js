let itemsSelecionados = 0;
let prato;
let bebida;
let sobremesa;
let preco = [0, 0, 0, 0];
let msg;
let nome;
let endereco;

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
    if (pratoSelecionado!= null){
        let aux = transformaPreco(String(pratoSelecionado.querySelector(".preco").innerHTML));
        preco[3] = preco[3] - aux;
        pratoSelecionado.classList.remove("prato-selecionado");
    }
    
    const item = itemEscolhido;
    item.classList.toggle("prato-selecionado");

    prato = String(item.querySelector("p").innerHTML);
    const precodoitem = transformaPreco(String(item.querySelector(".preco").innerHTML));
    preco[0] = precodoitem;
    preco[3] = preco[3] + precodoitem;

    atualizaItemsSelecionados();
}

function toggleBebidaSelecionada(itemEscolhido){ 
    const pratoSelecionado = document.querySelector(".bebida-selecionada");
    if (pratoSelecionado!= null){
        let aux = transformaPreco(String(pratoSelecionado.querySelector(".preco").innerHTML));
        preco[3] = preco[3] - aux;
        pratoSelecionado.classList.remove("bebida-selecionada");
    }
    
    const item = itemEscolhido;
    item.classList.toggle("bebida-selecionada");

    bebida = String(item.querySelector("p").innerHTML);
    const precodoitem = transformaPreco(String(item.querySelector(".preco").innerHTML));
    preco[1] = precodoitem;
    preco[3] = preco[3] + precodoitem;

    atualizaItemsSelecionados();
}

function toggleSobremesaSelecionada(itemEscolhido){ 
    const pratoSelecionado = document.querySelector(".sobremesa-selecionada");
    if (pratoSelecionado!= null){
        let aux = transformaPreco(String(pratoSelecionado.querySelector(".preco").innerHTML));
        preco[3] = preco[3] - aux;
        pratoSelecionado.classList.remove("sobremesa-selecionada");
    }
    
    const item = itemEscolhido;
    item.classList.toggle("sobremesa-selecionada");

    sobremesa = String(item.querySelector("p").innerHTML);
    const precodoitem = transformaPreco(String(item.querySelector(".preco").innerHTML));
    preco[2] = precodoitem;
    preco[3] = preco[3] + precodoitem;

    atualizaItemsSelecionados();
}

function abreTelaConfirma() {    
    document.querySelector(".container").style.opacity=0.1;
    
    const tela = document.querySelector(".tela-confirma");
    tela.style.display="flex";

    tela.querySelector(".confirma-prato").innerHTML = prato;
    tela.querySelector(".confirma-bebida").innerHTML = bebida;
    tela.querySelector(".confirma-sobremesa").innerHTML = sobremesa;

    tela.querySelector(".preco-prato").innerHTML = preco[0].toFixed(2);
    tela.querySelector(".preco-bebida").innerHTML = preco[1].toFixed(2);
    tela.querySelector(".preco-sobremesa").innerHTML = preco[2].toFixed(2);
    tela.querySelector(".preco-total").innerHTML = "R$ " + preco[3].toFixed(2);
}

function fechaTelaConfirma() {
    document.querySelector(".container").style.opacity=1;
    
    const tela = document.querySelector(".tela-confirma");
    tela.style.display="none";
}

function enviamsg() {
    nome = prompt("Digite o seu nome");
    endereco = prompt("Digite o seu endereço");
    
    msg = "Olá, gostaria de fazer o pedido:\n - Prato: " 
    + prato + "\n - Bebida: " + bebida + "\n - Sobremesa: " 
    + sobremesa + "\n Total: R$ " + preco[3].toFixed(2) + "\n \n Nome: "
    + nome + "\n Endereço: " + endereco;

    const msgCodificada = encodeURIComponent(msg);
    const linkwp = "https://wa.me/5531997975054?text=" + msgCodificada;
    
    return linkwp;
}
