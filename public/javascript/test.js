// 1. CA marche mais j'arrive pas à afficher les données de l'objet réponse)
fetch("http://localhost:3000/api/cameras")
.then(function(reponse) {      //1er objet promise de ma requête appelé : "reponse". Il a été créé par la requête et correspond à sa réponse. il a la propriété (ou la fonction) "ok" qui cherche si dans la réponse de la requête (donc de mon objet reponse) il y a un ok.  Il a une propriété "json" qui transforme la réponse en objet json. Il a une propriété "status" qui indique le numéro de reponse de la requête (200, 404, ...)

    if (reponse.ok) {
      return reponse.json();
    }
    else {
      alert("erreur :" +  reponse.status)
    }
  })

  // ce 2ème objet que l'on a créé avec la fonction "réponse" et qui correspond à un objet json, on va l'appeler avec la fonction "then" et on va le nommer "json" dans la fonction qui va le manipuler. 
  .then(function(json) {
    document.write(json[0].name); //ici je choisi l'objet n°0 de la liste de "json" et je demande d'écrire dans le document la valeur de sa clé "name"
    document.write(Object.values(json[1])); // ici grace à la fonction "Object.values", j'affiche toutes les valeurs de l'objet 1 de la liste de l'objet "json". 
    for(let property in json[2]){document.write(property+ ":  "+json[2][property])};
    }) // ici l'objet json renvoie une liste d'objets, donc il faut préciser l'id de l'objet dans la boucle for pour que ca marche. Ensuite, pour afficher : les clés (property) associées à leurs valeurs(json[2][property]). 
  })
  .catch(function(err) {
    // Une erreur est survenue
  }); // a quoi sert catch si j'ai déjà le else ?

// 2. ca marche, version ES6 avec les fonctions flechées : 
fetch("http://localhost:3000/api/cameras")
  .then(response => response.json())
  .then(json => document.write(json[0].name)) // mais avec console.log ca n'affiche rien. Et comment je fais pour afficher l'ensemble des name ?


//3. ajout d'éléments dans le DOM, Ca ne marche pas. 
const main = document.getElementById("main");
const div = document.createElement("div");
  main.appenChild(div);
  div.textContent = "coucou c'est moi !";

//4. requete fetch GET + recupération objet réponse + gestion erreur + affichage des données objet
var main = document.getElementById("main");

fetch("http://localhost:3000/api/cameras")
.then(response => {
  if(response.ok){
    response.json()
    .then(data => {main.innerHTML= (data[0].name) + "</br>" +(data[0].description)})
  }
          
  else
    {
      console.log("erreur : " + response.status);
      main.innerHTML= "erreur : " + response.status
    }
})

//5. créer une div dans le main, la styler et ajouter un h1 avec du contenu
let main = document.getElementById("main");
const newDiv= document.createElement("div");

main.style.background = "red";
main.style.height = "180px";

main.appendChild(newDiv);
newDiv.innerHTML = "<h1>coucou c'est moi !</h1>";