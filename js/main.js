/**
 *
 * Ce qui ne vas pas :
 *
 * - pas de modèle de données coté JS
 * - tout le code applicatif est contenu dans une fonction anonyme de callback
 * - la manipulation du DOM (l'interface) est complètement mélangée au code applicatif
 *
 * Conséquences :
 *
 * - Difficile de faire évoluer l'application au fur et à mesure
 * - Maintenabilité réduite (la base de code va grossire "salement")
 * - Difficile de tester notre application correctement
 * - Grande dépendance à la librairie utilisée pour le DOM
 *
 *
 * Que proposez vous pour rémedier aux problèmes constatés plus haut ?
 * Par quoi commenceriez vous ?
 * Vous avez 2h :)
 *
 */

$(document).ready(function(){

    $("#create-task").on("change",function(){

        var task = $("<li class='task-list__item'></li>");

        var content = $("<div class='item-content'>"+$(this).val()+"</div>");
        var chkbx = $("<input type='checkbox' class='done-chkbx'>");
        var button = $("<button class='suppress-btn'>⤬</button>");

        task.append(content);

        chkbx.on("change",function(){
            $(this).parent("li").toggleClass("task-list__item--done");
        });
        task.prepend(chkbx);

        button.on("click",function(){
            $(this).parent("li").remove();
        });
        task.append(button);

        $("#todo-app ul").append(task);

        $("#create-task").val("");
    });

});

