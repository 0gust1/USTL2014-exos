# Exo de refactoring de code basé sur jQuery (étape 2)

Désormais, le code de notre application est plus structuré (le code est commenté).

Nous avons un objet raçine global hébergeant le modèle de données et les grandes fonctions de notre appli (ajout de tâche, suppression, passage à l'état "fait").

C'est encore perfectible, mais notre application peut déjà mieux grandir.

## Comment aller plus loin :

Notre application dépend encore de fçon importante de la librairie de manipulation du DOM. Le code métier (la manipulation du modèle de données) est encore "à coté"" de ce qui concerne la page en elle même.

Celà rend le code moins modulaire et moins facilement testable. Si on décide de faire évoluer le système (notamment la partie DOM), ce sera plus compliqué.

On peut également envisager d'utiliser un "framework" ou une librairie plus structurante (Angular, React, Backbone).

Enfin, "last but not least", peut-être pourrions nous améliorer la structure de données ? Notre liste de tâches et nos tâches n'ont pas d'identifiants uniques, ce qui pourra rendre certains besoins moins facilement réalisables (partage de tâches entre plusieurs utilisateurs, synchronisations cloud<->device).


