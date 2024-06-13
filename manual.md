<div>
    <h1 style="text-align: center;">Manual para os fronts-ends</h1>
</div>

Esse arquivo vai guiar os fronts-ends para aonde devo criar e modificar os arquivos que estão relacionados a parte visual do site Tech Tales.

O servidor do Tach Tales está na pasta "ttserver" por sua vez está dentro dela deve ir a pasta "app". As parte da estrutura dos Documentos HTML e dos arquivos .js, .jsx, .css e mídias estão separadas, os .html estão em "templates" que vai conter uma HTML base e pasta onde deve colocar os .html, já partes estáticas como scripts, multimedia e estilos estão na pasta "static".

## HTML Base

O html base vai ser base de todas as paginas do site, ou seja, se esse arquivo for alterado, vai afetar todos que estão usando a sua estrutura. Para que os documentos sejam renderizados normalmente, é preciso colocar algumas coisas no arquivo da pagina e a rota da mesma.

Vou mostrar os comandos e passos para renderizar a página no objetivo de não precisarem de mim ou estiver dormido (vai saber né).

Clica [aqui](./ttserver/app/templates/base.html) para ver o html base.

### Comandos
- ```{% extends <caminho para o html base> %}``` - Simplesmente importa o html base para o .html que quer usa-lo, você não precisa colocar o caminho inteiro para a pasta templates, o django já considera que você esteja nessa pasta.

index.html

```html
    {% extends 'base.html' %}
```


- ```{% block <nome> %}{% endblock <nome> %}``` - Essa expressão define um bloco no html base, ele serve para colocar informações no html que está usando a base, essas informações vão depender aonde esse bloco foi definido no HTML base.

Por exemplo, você quiser colocar tags no ```<body>```, então crie um bloco que esteja dentro no ```<body>``` no html base:


base.html

```html
    <body>
        {% block body %}{% endblock body %}
    </body>
```

index.html

```
    {% extends 'base.html' %}

    {% block body %}
       // coisas para o body 
    {% endblock body %}

```

- ```{% load static %}``` - Indica para django carregar os arquivos que estão listados como pastas que contem arquivos estáticos, isso serve tanto para html base como o .html que usa ele.
- ```{% static '<arquivo que está na pasta static>' %}``` - Essa está relacionada com a anterior, pois ela indica qual arquivo estático vai ser carregado.

index.html

```html
{% block head %}
    <link rel="stylesheet" href="{% static 'style.css' %}">
{% endblock head %}

{% block body %}
    <img src="{% static 'universo.png' %}">
    <audio src="{% static 'audio/audio.mp3' %}" autostart loop>
    <video src="{% static 'video/mp3/sla.mp4' %}" autostart loop>
    <script src="{% static 'js/index/script.js' %}"></script>
{% endblock body %}

```

- ```{{ <variavel_em_python> }}``` - É para colocar um valor do python aplicar.

__Observação importante__ - essas expressões só funcionam no django templates, qualquer outra como react.js não vai funcionar.


Os passos da definir a rota vão sair em breve...