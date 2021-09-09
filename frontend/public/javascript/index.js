//Variables d'éléments html
const main = document.getElementById("main");
const listAppareils = document.getElementById("listAppareils");

//AFFICHAGE DES ARTICLES DANS UNE LISTE 

  //communication avec l'API : requête GET, avec la fonction "loadConfig" du config.js qui permet de charger l'url principal du chemin à l'application coté serveur. 
loadConfig()
  .then(data => {
    config = data;
    fetch(config.host + "/api/cameras")
  //transformation de la réponse de la requête en objet JSON  et gestion erreur serveur 
  .then(response => {
      if(response.ok){
        return response.json();
      }
      else {
        // identification de l'erreur si elle existe
        console.log("erreur : " + response.status);
      } 
    })

    //Exploitation de l'objet JSON retourné pour Affichage des produits dans une liste avec création des éléments d'affichage grace à une boucle. Stylage des éléments. Paramétrage des boutons/liens "voir" avec passage de paramètres par URL. 
  .then(data => {
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
                <a href="produit.html?id=${data[i]._id}" class="btn btn-primary" style="
                    display: inline-block;
                    text-align: center;
                    width: 100px;">Voir</a>
              </div>
            </div>
        `
      }  
    })
  .catch(function(err) {
    console.log("err")
    });

  })


