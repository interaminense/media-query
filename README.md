# Media Query

Antes de iniciarmos o aprendizado sobre **Media Queries**, precisamos entender o que são **Media Types**.

O HTML foi criado para ser portável, ou seja, ele deve ser lido e interpretado por qualquer tipo de dispositivo. Cada dispositivo exibe HTML de uma determinada maneira. Logo, a forma com que você formata o layout precisa ser diferente para cada dispositivo. Por exemplo, se você visita um site por um desktop, a experiência será totalmente diferente caso você visite o mesmo site por um dispositivo móvel. São dispositivos diferentes, com formas totalmente diferentes de navegação e uso.

### O que são Media Types?

Existem outras outros cenários que precisamos prever para controlar a formatação do site, como por exemplo, quando o usuário imprimir sua página. Quando alguém imprimi a página de um artigo no site do UOL, Terra ou qualquer site de conteúdo, vários elementos não precisam ser impressos, começando pelo menu, barra lateral, rodapé e etc. O texto poderia ser melhor formatado para que a leitura em papel fosse mais confortável. Essa diferença entre dispositivos é controlada pelas **media types**. Existem dez tipos de media types definidas em CSS, são elas:

* **All** - Para todos os dispositivos;
* **Braille** - Para dispositivos táteis;
* **Embossed** - Para dispositivos que "imprimem" em braile;
* **handheld** - Para dispositivo de mão. Normalmente com telas pequenas e banda limitada;
* **print** - Para impressão em papel;
* **Projection** - Para aplicações, como PowerPoint;
* **Screen** - Para dispositivos ou monitores com telas coloridas e com resolução adequada;
* **Speech** - Para sintetizadores de voz;
* **Tty** - Para dispositivos que utilizam uma grade fixa para exibição de caracteres, como por exemplo teletypes, terminais, dispositivos portáteis com display limitado;
* **tv** - Para dispositivos como televisores, ou seja, com baixa resolução, com boa quantidade de cores e scroll limitado.

**Abaixo mostra com exemplo os alguns métodos que podem ser usados para especificar as medias types:**

A aplicação é muito simples: basta adicionar a linha comum de **link** para seu CSS, inserindo um atributo **media** e adicionando o valor desejado:
```html
<link rel="stylesheet" href="estilo.css" type="text/css" media="screen" />
```

Abaixo a funcionalidade é a mesma, mas o import é feito pelo CSS:
```css
@import url("estilo.css").screen;
```

Sabendo disso, vamos entender o que são Media Queries.

### O problema

todo dia surgem novos dispositivos, com diversos tamanhos e hardwares parecidos com os desktops. Com isso surge a necessidade de se usar LAYOUTS e um CSS diferente para cada tipo de telas. Um IPhone não se encaixa na categoria **media type handheld** nem tão pouco na categoria **media type screen** onde a especificação é clara quando diz que é para desktops e computadores.

### A solução: Media Queries

As Media Queries definem condições para que o CSS seja utilizado em cenários específicos. Se essas condições forem aprovadas, ou seja, se o dispositivo se adequar a todas as condições estabelecidas na sua Media Querie, o CSS será aplicado.

```html
<link rel="stylesheet" href="estilo.css" media="screen and (max-width: 480px)">
```
Acima especificamos que o arquivo **estilo.css**, será aplicado em dispositivos que se enquadram na condição de **screen** (ou seja, que tem uma tela com alta capacidade de cores) e com uma largura máxima de 480px.

Geralmente usamos as Media Queries dentro código CSS, que é bem mais organizado. Você linka seu CSS normalmente no HEAD do seu documento:
```html
<link rel="stylesheet" href="estilo.css">
```

E dentro do código CSS, vamos separar por condições de largura, as telas dos dispositivos, que definem quando cada bloco de CSS será utilizado. Veja o código abaixo:

```css
/* Código geral, que será herdado por qualquer dispositivos.
   nesse caso, seria o código usado no desktop, na maioria das vezes.
*/
a {color: blue;}

/* 
 Pra dispositivos que tem uma largura mínima de 768 pixels. Tablets, por exemplo.
*/
@media screen and (min-width: 768px) {
  a {color: yellow;}
}
 
/* 
 Com uma largura mínima de 992 pixels. Monitores por exemplo.
*/
@media screen and (min-width: 992px) {
  a {color: green;}
}
 
/* 
 Dispositivos com largura mínima de 1200 pixels. Por exemplo TVs.
*/
@media screen and (min-width: 1200px) {
  a {color: black;}
}
```

E assim você vai escrevendo seu CSS e manipulando a formatação do layout de acordo com dispositivo desejado.

### Exemplos utilizando media queries

[Veja a 1ª demostração aqui](http://interaminense.github.io/media-query/demo/demo-1.html)

![alt tag](https://raw.githubusercontent.com/interaminense/media-query/gh-pages/demo/img/demo-1.gif)
