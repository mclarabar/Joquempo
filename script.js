let resposta, valor, sorteio;
const lista = ['pedra', 'papel', 'tesoura'];

function sortear(){
    valor = Math.floor(Math.random() * lista.length);
    sorteio = lista[valor];
    return sorteio;
}

alert('Seja bem-vindo ao Joquempô!');
do{
    resposta = prompt('Digite pedra, papel ou tesoura para jogar! (Obs.: Caso deseje sair, digite parar)').toLowerCase();

    if(resposta != 'parar'){
        let resultado = sortear();
        if(resposta == resultado){
            alert('Jogador(a): '+ resposta +' X Computador: '+ resultado);
            alert('Deu empate, tente novamente!');
        }else if((resposta == 'pedra' && resultado == 'tesoura') || (resposta == 'tesoura' && resultado == 'papel') || (resposta == 'papel' && resultado == 'pedra')){
            alert('Jogador(a): '+ resposta +' X Computador: '+ resultado);
            alert('Você ganhou, parabéns!!!');
        } else if((resultado == 'pedra' && resposta == 'tesoura') || (resultado == 'tesoura' && resposta == 'papel') || (resultado == 'papel' && resposta == 'pedra')){
            alert('Jogador(a): '+ resposta +' X Computador: '+ resultado);
            alert('Você perdeu, tente novamente!');
        } else{
            alert('Digite corretamente!');
        }

    }else{
        alert('Obrigada por participar, volte sempre!')
    }

} while (resposta != 'parar')

