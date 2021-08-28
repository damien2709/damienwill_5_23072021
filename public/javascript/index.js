//Variables d'éléments html
const main = document.getElementById("main");
const listAppareils = document.getElementById("listAppareils");

// 1. AFFICHAGE DES ARTICLES DANS UNE LISTE 

  //1.1. communication avec l'API : requête GET
fetch("http://localhost:3000/api/cameras")

  //1.2. transformation de la réponse (objet de type "response" de l'API fetch) de la requête en objet JSON (grace àla méthode de l'objet response : "json") et gestion erreur serveur (ok est une propriété de l'objet response : si requête entre 200 et 299 = true). La réponse créant l'objet JSON est une promesse, on utilise donc les 2 méthodes "then" et "catch" pour ajouter des fonctions en cas de résolution ou d'échec de la promesse.
.then(response => {
  if(response.ok){
    // vérif : console.log("Réponse de l'API = OK"); //vérification de la bonne communication avec API
    return response.json();
}
  else {
    // identification de l'erreur si elle existe."status" est une propriété de l'objet response et renvoie la valeur de la requête
    console.log("erreur : " + response.status);
  } 
})

    //1.1.3 Exploitation de l'objet JSON retourné (avec fonction fléchée) pour Affichage des produits dans une liste avec création des éléments d'affichage grace à une boucle. Stylage des éléments. L'objet "data" n'existe que dans cette portée. 
.then(data => {
  //vérif : console.log(data);
  for (let i in data){
    listAppareils.innerHTML += `
            <div class="col-12 col-md-6 col-lg-4 card">
              <div class="card-body">
                <h2 class="card-title" style="
                      font-size: 26px; text-align: center;"
                      >${data[i].name}</h2>
              </div>
              <div class="card-body" style="padding-top:0;">
                <img class="card-img" src="${data[i].imageUrl}">
              </div> 
              <div class="card-body" style="text-align: center;">
                <a href="produit.html" id="${data[i].name}" class="btn btn-primary" style="
                    display: inline-block;
                    text-align: center;
                    width: 100px;">Voir</a>
              </div>
            </div>
        `
  }
    //1.4. paramétrage des boutons/liens "voir" avec localStorage du produit au clic 
    for (let i in data){
    let button = document.getElementById(data[i].name);
    // je convertis l'objet javascript en JSON pour pouvoir le stocker et je l'envoie dans le localStorage au clic
    button.addEventListener("click", function()
    {
      localStorage.setItem("product", JSON.stringify(data[i]));
    }
    )};
    
})
 //.catch : gère les erreurs au global dans la portée des then
.catch(function(err) {
  console.log("err")
});




