function clicar(){
    let inputUsuario = document.querySelector('#usuario');
    let texto = document.createTextNode(`Seja bem vindo (a), ${inputUsuario.value}! Nessa aba você confere as curiosidades
    e histórias por trás de Naruto! Mas preste bastante atenção, pois nem todas são verdadeiras! Ao final do texto, você 
    poderá descobrir se é um verdadeiro detetive e descobriu a verdade por trás dos fatos, ou não. Se divirta e dattebane!`);
    let h1 = document.querySelector('#meuh1');
    h1.innerHTML = "";
    h1.appendChild(texto);

    let section = document.querySelector('#secao').value;
    let p = document.querySelector('.p').value;

    secao.value.innerHTML = "";
    secao.appendChild(p);

    var x = document.getElementById("minhadiv");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function verdade1(){
    let botao1 = document.getElementById('verdade1');
    document.getElementById('verdade1').style.background = 'rgb(11, 223, 36)';

    let sec1 = document.getElementById('sec1');
    let p = document.createElement('p');
    let texto = document.createTextNode("Tanto na versão original (em japonês) como na brasileira, Naruto Uzumaki é dublado por uma mulher. No Brasil, Úrsula Bezerra é quem dá voz ao ninja que dá nome a série. Já na dublagem original do anime, Naruto teve a voz de Junko Takeuchi.")
    let img1 = document.createElement('img');
    let imagem1 = document.createAttribute('src');
    imagem1.value = "../imagens/dubladoras.jpg";
    img1.setAttributeNode(imagem1);

    p.classList.add("meusps");
    img1.classList.add("center");

    sec1.appendChild(p);
    p.appendChild(texto);
    sec1.appendChild(img1);
    botao1.disabled = true;
}

function falso1(){
    let botao1 = document.getElementById('falso1');
    document.getElementById('falso1').style.background = 'rgb(224, 11, 11, 1)';

    let sec1 = document.getElementById('sec1');
    let p = document.createElement('p');
    let texto = document.createTextNode("Tanto na versão original (em japonês) como na brasileira, Naruto Uzumaki é dublado por uma mulher. No Brasil, Úrsula Bezerra é quem dá voz ao ninja que dá nome a série. Já na dublagem original do anime, Naruto teve a voz de Junko Takeuchi.")
    let img1 = document.createElement('img');
    let imagem1 = document.createAttribute('src');
    imagem1.value = "../imagens/dubladoras.jpg";
    img1.setAttributeNode(imagem1);

    p.classList.add("meusps");
    img1.classList.add("center");

    sec1.appendChild(p);
    p.appendChild(texto);
    sec1.appendChild(img1);
    botao1.disabled = true;
}

function verdade2(){
    let botao2 = document.getElementById('verdade2');
    document.getElementById('verdade2').style.background = 'rgb(11, 223, 36)';

    let sec1 = document.getElementById('sec2');
    let p = document.createElement('p');
    let texto = document.createTextNode("Durante uma entrevista em 2012, Kishimoto revelou que Naruto era para ter sido um mangá de culinária! Para quem não sabe, naruto é o nome dado para um dos ingredientes típicos do lámen japonês, consistindo numa espécie de massa cozida com peixe, formando uma espiral no centro, quando cortada em fatias. O palco de toda a trama da série, ainda segundo o seu criador, seria num dos locais favoritos do nosso herói ninja: o restaurante Ichiraku! Aliás, este restaurante existe na vida real e foi bastante frequentado pelo mangaká enquanto estava na universidade.")
    let img1 = document.createElement('img');
    let imagem1 = document.createAttribute('src');
    imagem1.value = "../imagens/ichiraku.jpeg";
    img1.setAttributeNode(imagem1);

    p.classList.add("meusps");
    img1.classList.add("center");

    sec1.appendChild(p);
    p.appendChild(texto);
    sec1.appendChild(img1);
    botao2.disabled = true;
}

function falso2(){
    let botao2 = document.getElementById('falso2');
    document.getElementById('falso2').style.background = 'rgb(224, 11, 11, 1)';

    let sec1 = document.getElementById('sec2');
    let p = document.createElement('p');
    let texto = document.createTextNode("Durante uma entrevista em 2012, Kishimoto revelou que Naruto era para ter sido um mangá de culinária! Para quem não sabe, naruto é o nome dado para um dos ingredientes típicos do lámen japonês, consistindo numa espécie de massa cozida com peixe, formando uma espiral no centro, quando cortada em fatias. O palco de toda a trama da série, ainda segundo o seu criador, seria num dos locais favoritos do nosso herói ninja: o restaurante Ichiraku! Aliás, este restaurante existe na vida real e foi bastante frequentado pelo mangaká enquanto estava na universidade.")
    let img1 = document.createElement('img');
    let imagem1 = document.createAttribute('src');
    imagem1.value = "../imagens/ichiraku.jpeg";
    img1.setAttributeNode(imagem1);

    p.classList.add("meusps");
    img1.classList.add("center");

    sec1.appendChild(p);
    p.appendChild(texto);
    sec1.appendChild(img1);
    botao2.disabled = true;
}

function verdade3(){
    let botao3 = document.getElementById('verdade3');
    document.getElementById('verdade3').style.background = 'rgb(224, 11, 11, 1)';

    let sec1 = document.getElementById('sec3');
    let p = document.createElement('p');
    let texto = document.createTextNode("Em 1997, o piloto de Naruto foi publicado na antologia Akamaru Jump, e embora tivesse algumas coisas em comum com a obra que conhecemos, tudo era muito diferente. O personagem, por exemplo, é a própria raposa demoníaca, ao invés de um humano que serve como seu hospedeiro.")
    let img1 = document.createElement('img');
    let imagem1 = document.createAttribute('src');
    imagem1.value = "../imagens/raposa.jpeg";
    img1.setAttributeNode(imagem1);

    p.classList.add("meusps");
    img1.classList.add("center");

    sec1.appendChild(p);
    p.appendChild(texto);
    sec1.appendChild(img1);
    botao3.disabled = true;
}


function falso3(){
    let botao3 = document.getElementById('falso3');
    document.getElementById('falso3').style.background = 'rgb(11, 223, 36)';

    let sec1 = document.getElementById('sec3');
    let p = document.createElement('p');
    let texto = document.createTextNode("Em 1997, o piloto de Naruto foi publicado na antologia Akamaru Jump, e embora tivesse algumas coisas em comum com a obra que conhecemos, tudo era muito diferente. O personagem, por exemplo, é a própria raposa demoníaca, ao invés de um humano que serve como seu hospedeiro.")
    let img1 = document.createElement('img');
    let imagem1 = document.createAttribute('src');
    imagem1.value = "../imagens/raposa.jpeg";
    img1.setAttributeNode(imagem1);

    p.classList.add("meusps");
    img1.classList.add("center");

    sec1.appendChild(p);
    p.appendChild(texto);
    sec1.appendChild(img1);
    botao3.disabled = true;
}

function verdade4(){
    let botao4 = document.getElementById('verdade4');
    document.getElementById('verdade4').style.background = 'rgb(11, 223, 36)';

    let sec1 = document.getElementById('sec4');
    let p = document.createElement('p');
    let texto = document.createTextNode("Em uma entrevista, Masashi Kishimoto disse que daria muito trabalho desenhar os óculos que Naruto usava em sua testa em todo capítulo, então ele criou a bandana, que seria bem mais fácil de ilustrar. Deu certo e este é um item campeão de vendas em eventos de anime até hoje.")
    let img1 = document.createElement('img');
    let imagem1 = document.createAttribute('src');
    imagem1.value = "../imagens/bandana.jpeg";
    img1.setAttributeNode(imagem1);

    p.classList.add("meusps");
    img1.classList.add("center");

    sec1.appendChild(p);
    p.appendChild(texto);
    sec1.appendChild(img1);
    botao4.disabled = true;
}

function falso4(){
    let botao4 = document.getElementById('falso4');
    document.getElementById('falso4').style.background = 'rgb(224, 11, 11, 1)';

    let sec1 = document.getElementById('sec4');
    let p = document.createElement('p');
    let texto = document.createTextNode("Em uma entrevista, Masashi Kishimoto disse que daria muito trabalho desenhar os óculos que Naruto usava em sua testa em todo capítulo, então ele criou a bandana, que seria bem mais fácil de ilustrar. Deu certo e este é um item campeão de vendas em eventos de anime até hoje.")
    let img1 = document.createElement('img');
    let imagem1 = document.createAttribute('src');
    imagem1.value = "../imagens/bandana.jpeg";
    img1.setAttributeNode(imagem1);

    p.classList.add("meusps");
    img1.classList.add("center");

    sec1.appendChild(p);
    p.appendChild(texto);
    sec1.appendChild(img1);
    botao4.disabled = true;
}

function verdade5(){
    let botao5 = document.getElementById('verdade5');
    document.getElementById('verdade5').style.background = 'rgb(11, 223, 36)';

    let sec1 = document.getElementById('sec5');
    let p = document.createElement('p');
    let texto = document.createTextNode("Realmente existe uma cidade chamada Naruto, localizada no Japão com um território de 135.45 Km e uma população de 64.257 habitantes, ela é bem famosa por suas banheiras de hidromassagem, e outra curiosidade interessante é que hidromassagem em japonês é “uzamaki”.")
    let img1 = document.createElement('img');
    let imagem1 = document.createAttribute('src');
    imagem1.value = "../imagens/trem.jpg";
    img1.setAttributeNode(imagem1);

    p.classList.add("meusps");
    img1.classList.add("center");

    sec1.appendChild(p);
    p.appendChild(texto);
    sec1.appendChild(img1);
    botao5.disabled = true;
}

function falso5(){
    let botao5 = document.getElementById('falso5');
    document.getElementById('falso5').style.background = 'rgb(224, 11, 11, 1)';

    let sec1 = document.getElementById('sec5');
    let p = document.createElement('p');
    let texto = document.createTextNode("Realmente existe uma cidade chamada Naruto, localizada no Japão com um território de 135.45 Km e uma população de 64.257 habitantes, ela é bem famosa por suas banheiras de hidromassagem, e outra curiosidade interessante é que hidromassagem em japonês é “uzamaki”.")
    let img1 = document.createElement('img');
    let imagem1 = document.createAttribute('src');
    imagem1.value = "../imagens/trem.jpg";
    img1.setAttributeNode(imagem1);

    p.classList.add("meusps");
    img1.classList.add("center");

    sec1.appendChild(p);
    p.appendChild(texto);
    sec1.appendChild(img1);
    botao5.disabled = true;
}

function verdade6(){
    let botao6 = document.getElementById('verdade6');
    document.getElementById('verdade6').style.background = 'rgb(11, 223, 36)';

    let sec1 = document.getElementById('sec6');
    let p = document.createElement('p');
    let texto = document.createTextNode("Shikamaru tem o QI superior a 200 (Para podermos comparar, Albert Einstein tinha um QI de 160).")
    let img1 = document.createElement('img');
    let imagem1 = document.createAttribute('src');
    imagem1.value = "../imagens/Shikamaru-.jpg";
    img1.setAttributeNode(imagem1);

    p.classList.add("meusps");
    img1.classList.add("center");

    sec1.appendChild(p);
    p.appendChild(texto);
    sec1.appendChild(img1);
    botao6.disabled = true;
}

function falso6(){
    let botao6 = document.getElementById('falso6');
    document.getElementById('falso6').style.background = 'rgb(224, 11, 11, 1)';

    let sec1 = document.getElementById('sec6');
    let p = document.createElement('p');
    let texto = document.createTextNode("Shikamaru tem o QI superior a 200 (Para podermos comparar, Albert Einstein tinha um QI de 160).")
    let img1 = document.createElement('img');
    let imagem1 = document.createAttribute('src');
    imagem1.value = "../imagens/Shikamaru-.jpg";
    img1.setAttributeNode(imagem1);

    p.classList.add("meusps");
    img1.classList.add("center");

    sec1.appendChild(p);
    p.appendChild(texto);
    sec1.appendChild(img1);
    botao6.disabled = true;
}

function verdade7(){
    let botao7 = document.getElementById('verdade7');
    document.getElementById('verdade7').style.background = 'rgb(224, 11, 11, 1)';

    let sec1 = document.getElementById('sec7');
    let p = document.createElement('p');
    let texto = document.createTextNode("A tatuagem acima do olho esquerdo de Gaara significa amor.")
    let img1 = document.createElement('img');
    let imagem1 = document.createAttribute('src');
    imagem1.value = "../imagens/gaara.jpg";
    img1.setAttributeNode(imagem1);

    p.classList.add("meusps");
    img1.classList.add("center");

    sec1.appendChild(p);
    p.appendChild(texto);
    sec1.appendChild(img1);
    botao7.disabled = true;
}

function falso7(){
    let botao7 = document.getElementById('falso7');
    document.getElementById('falso7').style.background = 'rgb(11, 223, 36)';

    let sec1 = document.getElementById('sec7');
    let p = document.createElement('p');
    let texto = document.createTextNode("A tatuagem acima do olho esquerdo de Gaara significa amor.")
    let img1 = document.createElement('img');
    let imagem1 = document.createAttribute('src');
    imagem1.value = "../imagens/gaara.jpg";
    img1.setAttributeNode(imagem1);

    p.classList.add("meusps");
    img1.classList.add("center");

    sec1.appendChild(p);
    p.appendChild(texto);
    sec1.appendChild(img1);
    botao7.disabled = true;
}

function verdade8(){
    let botao8 = document.getElementById('verdade8');
    document.getElementById('verdade8').style.background = 'rgb(224, 11, 11, 1)';

    let sec1 = document.getElementById('sec8');
    let p = document.createElement('p');
    let texto = document.createTextNode("Naruto possui uma quantidade enorme de chakra próprio, sendo o que possui a maior quantidade dentre o time 7.")
    let img1 = document.createElement('img');
    let imagem1 = document.createAttribute('src');
    imagem1.value = "../imagens/chakra.png";
    img1.setAttributeNode(imagem1);

    p.classList.add("meusps");
    img1.classList.add("center");

    sec1.appendChild(p);
    p.appendChild(texto);
    sec1.appendChild(img1);
    botao8.disabled = true;
}

function falso8(){
    let botao8 = document.getElementById('falso8');
    document.getElementById('falso8').style.background = 'rgb(11, 223, 36)';

    let sec1 = document.getElementById('sec8');
    let p = document.createElement('p');
    let texto = document.createTextNode("Naruto possui uma quantidade enorme de chakra próprio, sendo o que possui a maior quantidade dentre o time 7.")
    let img1 = document.createElement('img');
    let imagem1 = document.createAttribute('src');
    imagem1.value = "../imagens/chakra.png";
    img1.setAttributeNode(imagem1);

    p.classList.add("meusps");
    img1.classList.add("center");

    sec1.appendChild(p);
    p.appendChild(texto);
    sec1.appendChild(img1);
    botao8.disabled = true;
}
