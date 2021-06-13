// Indrodução ao DOM

é uma interface (API) para documentos HTML e XML. Quando o navegador lê (analisa)
nosso documento HTML pela primeira vez, ele cria um objeto grande,
um objeto realmente grande com base no documento HTML que é o DOM.

É uma estrutura de árvore que é modelada a partir do documento HTML.
O DOM é usado para interagir e modificar a estrutura do DOM
ou elementos ou nós específicos.
DOM é o modelo de padrão e interface que define propriedades, métodos e eventos de elementos

Com o modelo de objeto, o JavaScript obtém todo o poder necessário para criar um HTML dinâmico:

JavaScript pode mudar todos os elementos HTML da página
JavaScript pode alterar todos os atributos HTML na página
JavaScript pode mudar todos os estilos CSS na página
JavaScript pode remover elementos e atributos HTML existentes
JavaScript pode adicionar novos elementos e atributos HTML
JavaScript pode reagir a todos os eventos HTML existentes na página
JavaScript pode criar novos eventos HTML na página

> > > > > > O que é o DOM?<<<<<<<<

> > > > > > O DOM é um padrão do W3C (World Wide Web Consortium).

O DOM define um padrão para acessar documentos:

"O Modelo de Objeto de Documento (DOM) do W3C é uma plataforma
e interface de linguagem neutra que permite que programas
e scripts acessem e atualizem dinamicamente o conteúdo,
a estrutura e o estilo de um documento."

O padrão DOM do W3C é separado em 3 partes diferentes:

DOM principal - modelo padrão para todos os tipos de documentos

XML DOM - modelo padrão para documentos XML
HTML DOM - modelo padrão para documentos HTML

O que é o HTML DOM?
O HTML DOM é um modelo de objeto padrão e uma interface de programação para HTML. Define:

Os elementos HTML como objetos
As propriedades de todos os elementos HTML
Os métodos para acessar todos os elementos HTML
Os eventos para todos os elementos HTML
Em outras palavras: O HTML DOM é um padrão para obter, alterar, adicionar ou excluir elementos HTML.
DOM é o modelo de padrão e interface que define propriedades, métodos e eventos de elementos.


//Teste-Query-Selector







DOMHTML

O equivalente DOM seria assim.

DOMSchema

O documentobjeto em JavaScript representa o DOM. Ele nos fornece muitos métodos que podemos
usar para selecionar elementos para atualizar o conteúdo dos elementos e muito mais.

exemplo 1

function alterarTexto() {
const textoAAlterar = document.getElementById("mudanca-texto").innerHTML = "Hello mundo";
return textoAAlterar;
}

---

HTML

<div>
<input type="text" id="textImput" class="text-input" />
</div>

Javascript
let getImput = document.getElementId('textInput');

---

------------>>>> getElementByTagName() <---------------

// metodo não recomendado para utilizar

Esse método retorna uma coleção de todos os elementos que
contenham o nome da tag informada.



------------>>>> getElementById <---------------

//utilizar document.id para referenciar o primeiro elemento da arvore do DOM

## getElementById ---> 
tem função no caso do Id, para alterar o texto 
//Ele modifica apenas o que for indicado com ID

Ele retorna o conteúdo do elemento html que estiver com nome informado.

Como, em principio, os "ids"
devem ser nomes únicos, ele é muito utilizado para pegar apenas o método desejado

// No html
 
// <div>
//<imput type="text" id"textImput" class="text-imput"/>
</div>



## A diferença entre querySelector  Vs querySelector
//## ID //Ele modifica ou manipula elementos do html o que for indicado com ID
// ## Selector // Eleretorna qualquer elemento do Dom, é preciso deixar explicito
 que vc está chamando uma "class" um "ID" ou uma "tag", 



---------------------------------------------------------------

## querySelector()
Esse método retorna elementos DOM, como classes, tags e ID´s.
É preciso apenas deixar explicito se está chamando uma classe, um ID ou uma tag.

>>Exemplo / Html/
<div>
<imput type="text" id="textInput" class="text-input"/>
</div>

>> Exemplo /java Script/

let getImputId = querySelector('#textInput'); //#indentificação do ID
let getImputClass = document.querySelector('.text-input'); // .
let getImputTag = document.querySelector('input'); // 




no caso acima  o InnerHtml
pode usar = ou +=
ele adiciona


>>Inner html

>>InneText

>>InnerContent

eles são usados para setar, inserir, alterar o conteúdo de um nó determinado
do html, e todos seus nós filhos.

Retorna o conteúdo de um texto dentro de um nó e dentro dos seus filhos


>>IMPORTANTE - Atenção
//Lembrar que o <script src=".js"><script> sempre ficará dentro do body do html, pois ele serve para alterar o corpo do seu html //deixando ele no final no body//

//O que significa os dois pontos(..) ?
consegue sair da pasta atual e selecionar para outras pastas.




//é possivel mudar itens de estilização do html, por ex cor.
manipulação do Dom serve para inserir, alterar, excluir texto, mas tb manipular elementos de estilização.

>> pode ser utilizado para estilizar uma ação do usuário,
como por ex. um jogo, onde a resposta correta fica verde ao ser acionada.

<!-- "O java script precisa trazer os dois parenteses() para ele entender como uma função"-->


## getElementByClass()
Esse método permite selecionar elementos 
do documento incluídos dentro do atributo class.

Recebe um único argumento de string, que 
pode conter vários identificadores separados por espaços.

>>utilizar para personalizar ação do usuário
>>evitar pois não especifico

## getElementByTagName()

esse método retorna uma coleção de todos os elementos que contenham o nome da tag informada.
>>ATENÇÃo<< melhor evitar pois para se manipular vc não consegue selecionar apenas um dado, não é especifico o suficiente. 

----------------------------------------------------------------------------
Eventos no javascript
conjunto de ações, tanto o browser ou o usuário faz.
>>botão clicado
>finalização de carregamento de uma pág. html
>um campo input que foi preenchido pelo usuário.

os principais eventos são atrelados a carregamentos de pag e click.


>>InneText

>>Events Listener

É um manipulador e rastreador de eventos, onde é possivel
 adicionar ou remover um evento sobre qualquer elemento.
O Listener disponibiliza duas funções principais, são elas:

>>addEventListener:
Adiciona uma função que será disparada quando ocorrer
 determinado evento no objeto.


>>remove pesquisar

## 1| onClick()
evento que realiza alguma coisa quando o usuário 
clica em um elemento html
>> Exemplo - link que direciona, ou destaca.


## 2 | onSubmit()
Evento que define uma ação no momento em que um formulário é enviado.

>>Arquivar dados
>> Exibir dados em outros elementos html


Eventos


## preventDefault:
 O método que cancela o comportamento 
default/padronizado de um determinado item, ou seja, 
cancela o comportamento que os elementos geralmente tem na página.

-pode evitar que o formulário seja enviado
- ao clicar em um link, impeça o link de seguir o URL

Obs: nem todos os eventos são canceláveis.

>> Pesquisar se pode ser utilizado em por exemplo:
>>Inscrições encerradas, utilizando um formulário.

## value:
define ou retorna o valor do atribuido value de um campo texto.

A propriedade value contém o valor padrão
 OU o valor em que um usuário digital

>> serve para especificar o valor desejado.







