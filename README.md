# Media Query

Antes de iniciarmos o aprendizado sobre **Media Queries**, precisamos entender o que são **Media Types**.

O HTML foi criado para ser portável, ou seja, ele deve ser lido e interpretado por qualquer tipo de dispositivo. Cada dispositivo exibe HTML de uma determinada maneira. Logo, a forma com que você formata o layout precisa ser diferente para cada dispositivo. Por exemplo, se você visita um site por um desktop, a experiência será totalmente diferente caso você visite o mesmo site por um dispositivo móvel. São dispositivos diferentes, com formas totalmente diferentes de navegação e uso.

**O que são Media Types?**

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


# O que são Media Queries?

