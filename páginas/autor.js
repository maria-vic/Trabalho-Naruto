
let resposta = prompt("O que você acha de uma perguntinha, ein? Você está pronto? Responda sim ou não.");

switch (resposta){
    case 'sim':
        alert("Muito bem. Clique em OK ou aperte a tecla ENTER para receber a pergunta.");
        let autor = prompt("Agora responda: Quem é o autor de Naruto?");
        switch(autor){
            case 'Masashi':
                alert("Meus Parabéns!!! O nome do autor de Naruto é Masashi Kishimoto! Confira agora a sua bibliografia.");
                break;  
            case 'Kishimoto':
                alert("Meus Parabéns!!! O nome do autor de Naruto é Masashi Kishimoto! Confira agora a sua bibliografia.");
                break;
            case 'Masashi Kishimoto':
                alert("Meus Parabéns!!! O nome do autor de Naruto é Masashi Kishimoto! Você Acertou em Cheio! Confira agora a sua bibliografia.");
                break;
            default :
                alert("Você errrou!!! Mas relaxa. A seguir você vai poder aprender muito sobre Masashi Kishimoto, autor de Naruto. Confira!");      
        }   
        break;     
    case 'não':
        alert("Poxa, que pena. Espero que você saiba que Naruto Uzumaki não desistiria assim. Acho que será bom para você aprender sobre ele. Somente por isso te deixarei ler o artigo.");
        break;
    }


