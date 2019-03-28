// -- Déclarer un tableau numérique
const Prenoms = ["Hugo", "David", "Farid", "Justine", "khalid"];

// -- Aperçu dans la console
console.log(Prenoms);

// -- Si je veux connaitre le nombre d'éléments (Prénoms) de mon tableau ?
let nombreElementsDansMonTableau = Prenoms.length;
console.log(nombreElementsDansMonTableau);

// -- pour récupérer une valeur dans le tableau numérique j'utilise son indice (index)
console.log( Prenoms[1]); //David
console.log( Prenoms[3]); // Justine

let i = 2;
console.log( Prenoms[i] ); // Farid

for(let i = 0 ; i < nombreElementsDansMonTableau ; i++ /* let i = nombreElementsDansMonTableau ; i--
    Pour faire une boucle plus rapide on fait en sens inverse, notamment pour les grands tableaux*/){

    // Tout ca qui est à l'intérieur des accolades, sera dans la boucle

    console.log( 'Ici, i = ' + i );
    console.log( Prenoms[i] );
    console.log( '---' );

} // Fin de la boucle

// voyons comment proceder avec objet.

const Contact = {
    //INDICE : VALEUR
    prenom    : "Jean-luc",
    nom       : "X",
    telephone : "01702358866"
}
//appercu console
console.log( Contact );

//Pour récuperer les valeur d'un objet j'utilise le "." suivi de l'INDICE
console.log( "Prénom :" + Contact.prenom );
console.log( "Nom :" + Contact.nom );

const contacts = [
    "Zita",
    "Hogo",
    {
        //INDICE : VALEUR
        prenom    : "Jean-luc",
        nom       : "X",
        telephone : "01702358866"
    },

    {
        //INDICE : VALEUR
        prenom    : "Bruno",
        nom       : "X",
        telephone : "01702358866"
    }
];

console.clear();
console.log( contacts );

// -- comment acceder aux valeurs de mon objet ds le tableau numerique.
// - d'abord je recupére mon objet

console.log(contacts[2]);

// - pour acceder aux valeurs de mon objet

console.log("Prénom:" + contacts[2].prenom);
console.log("Nom :" + contacts[2].nom);
console.log("Age :" + contacts[2].telephone);

//En résumé j'accede à la valeur de l'indice"prenom" de l'objet situé à l'index 2.

// -- Comment parcourir un tableau avec des objets:

const etudiants = [
    {prenom: "Hugo", nom:"LIEGARD", competence:"Fullstack"},
    {prenom: "David", nom:"GUERRA", competence:"Front"},
    {prenom: "Rachid", nom:"KAMAN", competence:"Back"},
    {prenom: "Zita", nom:"NGUYEN", competence:"Fullstack"},
    {prenom: "Thomas", nom:"CHEYLAS", competence:"Front"},
    {prenom: "Asam", nom:"AHMAD", competence:"Front"},
];

// -- regardons ds la console.

console.log(etudiants);

//const nbEtudiants = etudiants.lenght;
//console.log("Nombre d'etudiants = " + nbetudiants);





/* ------------------------------------------------------
    |       ~ ~ ~ ~    💀  EXERCICE 😜     ~ ~ ~ ~          |
    |                                                        |  
    |                                                        |  
    |  Affichez dans la page HTML à l'aide de jQuery la      | 
    |  liste (ul>li) des Etudiants et leur classe.           | 
    |                                                        | 
    |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _  */


    /*$(document).ready(function(){
        for (i = 0; i < etudiants.length, i++; ){
           $student.appendTo('li'  );
        }

      });*/

      $(function() {
           //console.log('');
           //creation balise <ul></ul>
           const ul = $('<ul>');

           for (let i = 0; i < etudiants.length; i++) {
            //Je recupere l'etudiant en cours ds ma boucle
            let etudiant = etudiants[i];

            $(`
                 <li>
                 <strong>${etudiant.prenom} ${etudiant.nom}</strong>
                 - ${etudiant.competence}
                 </li>
            `).appendTo( ul );

           }// - fin boucle for

           ul.appendTo ( $('body'));
      });
