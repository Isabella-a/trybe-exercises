// 1- O que é um código que é executado de modo assíncrono? Qual é a diferença disso para um código que é executado de modo síncrono?
// R: Um código quando executado de modo assíncrono ele sai da linha de execução padrão e é executado separadamente de forma que não trave a execução dos processos síncronos. A grande diferença do assíncrono é que ele não tem uma ordem, depende do tempo de execução.

// 2- Quando você tem que enfileirar várias callbacks , que problema surge?
// R: Surge o callback hell que é difícil de administrar e deixa o código confuso.

// 3- Por que as Promises são uma forma de se resolver esse problema?
// R: Pois elas possuem funções extras que facilitam o fluxo assíncrono.

// 4- Quando você vai se comunicar com uma API , tal comunicação deve ser síncrona ou assíncrona? Lembre-se de que o serviço ao qual você está se conectando pode demorar muito ou pouco para dar retorno, pode estar fora do ar etc.
// R: A comunicação com APIs deve ser sempre feita de forma assíncrona.

// 5- Dada a resposta anterior, o que é fetch e para que ele serve?
// R: O fech é funão assíncrona utilizada para fazer requisiões APIs.