// Generare una griglia 6x6 (36 boxes), ad ogni click parte una richiesta AJAX
// che prende un numero random da 1 a 9 (scegliere API opportuna).
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato.

$(document).ready(function(){

  //Creazione ed aggiunta dei 36 quadratini al DOM.
  for (var i = 0; i < 36; i++){
    $(".wrapper").append("<div class='square'></div>");
  };

  //Al click di un elemento con classe "square" salvo il this in una variabile.
  $(".square").click(function(){
    var numero = $(this);

    //Richiesta AJAX
    $.ajax(
      {
        url: "https://flynn.boolean.careers/exercises/api/random/int",
        method: "GET",
        success: function (risposta) {
          // numero.text(risposta.response); // Spostata all'interno del ciclo
          if (numero.hasClass("cliccato")){ // Se var numero ha classe "cliccato"..
            alert("Casella già cliccata"); // Parte l'alert.
          }else {
            numero.addClass("cliccato"); // Aggiungi la classe "cliccato".
            numero.text(risposta.response);
            if (risposta.response <=5){
              numero.addClass("yellow");
            } else {
              numero.addClass("green");
            }
          }
        },
        error: function (){
        alert("E' avvenuto un errore.");
       }
      }
    );
  });
});
