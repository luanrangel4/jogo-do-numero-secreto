let listaSorteados  = [];
let numeroMax = 10;
let numeroSecreto = gerarNumeroAleatorio ();
let tentativas = 1;

function verificarChute () {
    let chute = document.querySelector('input').value;

 if(chute == numeroSecreto){
    exibirtexto('h1' ,'Acertou'
    )
    let palavra = tentativas > 1 ? 'tentativas' : 'tentativa'
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavra}`
    exibirtexto ('p', mensagemTentativas)
    document.getElementById('reiniciar').removeAttribute('disabled')

 }
 else {
    if (chute > numeroSecreto){

        exibirtexto('h1', 'O número secreto é menor')
    } else{
        exibirtexto('h1', 'o numero secreto é maior')
        
    }
    tentativas ++
    limparCampo()
 }


}
function exibirtexto(tag,texto){
    let campo = document.querySelector(tag)
campo.innerHTML = texto
}


function exibirMensagemInicial(){
    exibirtexto('h1' ,'Jogo do número secreto'
    )
    
    exibirtexto('p', 'Escolha um número de 1 a 10')
}
exibirMensagemInicial();

function gerarNumeroAleatorio (){
    
  let numeroEscolhido = parseInt(Math.random()* numeroMax +1)
  let quantidade = listaSorteados.length
  if(quantidade == numeroMax){
    listaSorteados = []
  }
  if(listaSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();

  }
  else{
    listaSorteados.push(numeroEscolhido)
    console.log(listaSorteados)
    return numeroEscolhido;
  }
  
}

function limparCampo(){
    chute = document.querySelector('input')
    chute.value = ''
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true)

}