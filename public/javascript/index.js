
const main = document.getElementById("main");
const newUl= document.createElement("ul");

// 1. AFFICHAGE DES ARTICLES DANS UNE LISTE 

  //1.1. communication avec l'API : requête GET
fetch("http://localhost:3000/api/cameras")

  //1.2. transformation de la réponse (objet de type "response" de l'API fetch) de la requête en objet JSON (grace àla méthode de l'objet response : "json") et gestion erreur serveur (ok est une propriété de l'objet response : si requête entre 200 et 299 = true). La réponse créant l'bjet JSON est une promesse, on utilise donc les 2 méthodes "then" et "catch" pour ajouter des fonctions en cas de résolution ou d'échec de la promesse.
.then(response => {
  if(response.ok){
    return response.json()
}
  else {
    // "status" est une propriété de l'objet response et renvoie la valeur de la requête
    console.log("erreur : " + response.status);
  }
})

    //1.1.3 Exploitation de l'objet JSON retourné (avec fonction fléchée) pour Affichage des produits dans une liste avec création des éléments d'affichage grace à une boucle. Stylage des éléments. L'objet "data" n'existe que dans cette portée. 
.then(data => {
    main.appendChild(newUl);
    newUl.setAttribute("class", "list-group")
  for (let i in data){
    newUl.innerHTML += `
            <li class="list-group-item">
                <img src="${data[i].imageUrl}" style="
                    max-width: 100px;
                    margin-right= 20px;">
                <h2 class="list-group-item-action" style="
                    display: inline-block;
                    width: 120px;
                    font-size: 15px;"
                    >${data[i].name}</h2>
                <a href="produit.html" id="${data[i].name}" class="btn btn-primary" style="
                    display: inline-block;
                    text-align: center;
                    width: 50px;">Voir</a>
            </li>
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
 //.catch : gère les erreurs au global dans la portée du 2ème then
.catch(function(err) {
  alert("une erreur est survenue")
});




