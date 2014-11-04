# Exo de refactoring de code basé sur jQuery

Contexte : Une application minimale (le code tient en un gros paragraphe) de gestion de tâches, "todolist" (quelle idée originale). Le chef est enthousiasmé par le prototype, et a de grands projet pour le développement...

L'objectif est de préparer notre petite application de todolist, à grossir et accueillir d'avantage de fonctionnalités.

* Le projet fourni au départ n'utilisait aucun outillage. Sa structure est némanmoins basé sur [HTML5Boilerplate](http://html5boilerplate.com/)
* Nous avons mis en place un workflow — utilisant nodeJS comme runtime — de rechargement automatique et de vérification de code JS à l'aide du "task-runner" [Grunt](http://gruntjs.com/).
* Nous avons également utilisé bower pour gérer la dépendance à librairie d'assistance au DOM (et nous sommes ici passés de jQuery à [Zepto](http://zeptojs.com/)).

Il s'agit maintenant de refactoriser notre début d'application en une base plus saine, capable d'évoluer plus facilement et rapidement.

Vous trouverez une introduction plus détaillée en entête du fichier `js/main.js`.

La démarche globale est de démontrer les bénéfices et l'importance du refactoring itératif (et léger).


