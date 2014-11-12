//une variable globale qui sera la racine du namespace de notre application
var app = {};

/**
 * le modèle de données de l'appli
 * Nous nous baserons pour l'instant sur une structure de ce type :
 * {
 *     name:"nom de la liste",
 *     tasks:[
 *         {
 *             content:"Finir le TP",
 *             done:false
 *         },
 *         {
 *             content:"Nourrir le poisson rouge",
 *             done:false
 *         }
 *     ]
 * }
 */

app.model = {};
app.model.name = "";
app.model.tasks = [];

/**
 * Ajoute une tâche à la liste
 */
app._addTask = function addTask(text) {
    app.model.tasks.push({
        content: text,
        done: false
    });
};

/**
 * Passe une tâche à "terminé"
 */
app._taskStateSwitch = function taskStateSwitch(index) {
    if (index > -1) {
        app.model.tasks[index].done = !app.model.tasks[index].done;
    }
};

app._taskDone = function taskDone(index) {
    if (index > -1) {
        app.model.tasks[index].done = true;
    }
};

/**
 * Passe une tâche à "non terminé"
 */
app._taskNotDone = function taskNotDone(index) {
    if (index > -1) {
        app.model.tasks[index].done = false;
    }
};

/**
 * Supprime une tâche
 */
app._deleteTask = function deleteTask(index) {
    if (index > -1) {
        app.model.tasks.splice(index, 1);
    }
};

app.addTask = function(text) {

    //Model
    app._addTask(text);

    console.dir(app.model.tasks);

    //DOM
    var task = $("<li class='task-list__item'></li>");

    var content = $("<div class='item-content'>" + text + "</div>");
    var chkbx = $("<input type='checkbox' class='done-chkbx'>");
    var button = $("<button class='suppress-btn'>⤬</button>");

    task.append(content);
    task.prepend(chkbx);
    task.append(button);

    $("#todo-app ul").append(task);

    $("#create-task").val("");
};

app.init = function() {
    //mode strict : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions_et_portee_des_fonctions/Strict_mode
    "use strict";

    // Delegation d'évènements : 1 event handler sur .task-list, pour gérer les clicks sur le bouton de suppression
    $(".task-list").on("click", ".suppress-btn", function() {
        var task = $(this).parent("li");

        app._deleteTask(task.index());

        task.remove();
        console.dir(app.model.tasks);
    });

    // Delegation d'évènements : 1 event handler sur .task-list, pour gérer le changement d'état sur les tâches
    $(".task-list").on("change", ".done-chkbx", function() {

        var task = $(this).parent("li");
        var index = task.index();

        app._taskStateSwitch(index);
        task.toggleClass("task-list__item--done");

        console.dir(app.model.tasks);
    });

    $("#create-task").on("change", function() {
        var text = $(this).val();

        app.addTask(text);

    });
};

$(document).ready(function() {

    app.init();

});
