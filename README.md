# Media Query

* Um resumo sobre o que é e para que serve o Media Query

### Introdução

Antes de iniciarmos o aprendizado sobre Media Queries, precisamos entender o que são Media Types

**O que são Media Types?**

São tipos de **CSS** que pode ser usado para especificar como o documento será exibido em diferentes tipos de mídias como *celulares*, *desktop* e *impressos*.

Existem dez tipos de media types definidas em Css 2.1, são elas:

* **All** - Para todos os dispositivos;
* **Braille** - Para dispositivos táteis;
* **Embossed** - Para dispositivos que "imprimem" em braile;
* **handheld** - Para dispositivo de mão. Normalmente com telas pequenas e banda limitada;
* **Projection** - Para aplicações, como PowerPoint;
* **Screen** - Para dispositivos ou monitores com telas coloridas e com resolução adequada;
* **Speech** - Para sintetizadores de voz;
* **Tty** - Para dispositivos que utilizam uma grade fixa para exibição de caracteres, como por exemplo teletypes, terminais, dispositivos portáteis com display limitado;

**Abaixo mostra com exemplo os alguns métodos que podem ser usados para especificar as medias types:**

1. Dentro do HTML: <link rel="stylesheet" href="estilo.css" type="text/css" **media="screen"** />
