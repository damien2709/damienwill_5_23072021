// Je traduit l'objet JSON du localStorage en javascript
let productsPanier= JSON.parse(localStorage.getItem("panier"));

//Déclaration des variables pour introduction de contenu
const montantTotal = document.getElementById("montantTotal"); 
const montantTotalCommande = document.getElementById("montantTotalCommande");
const produitsPanier = document.getElementById("produitsPanier");
const form = document.getElementById("form");

//Variables pour le calcul du montant total
const totalMontants = []; //déclaration du tableau qui contiendra les différents montants de commande

    //variables pour validation du questionnaire
let firstName = document.getElementById("prenom");
let lastName = document.getElementById("nom");
let address = document.getElementById("address");
let city = document.getElementById("city");
let email = document.getElementById("email");
let errorPrenom = document.getElementById("errorPrenom");
let errorNom = document.getElementById("errorNom");
let errorAddress = document.getElementById("errorAddress");
let errorCity = document.getElementById("errorCity");
let errorEmail = document.getElementById("errorEmail");

// AFFICHAGE DES ARTICLES DANS PANIER ET COMPORTEMENT PANIER
    // si panier vide, alors affichage alerte + désactivation bouton forumlaire, sinon pour chaque article je calcule les coûts et j'affiche les produits et les informations de prix sur la page
if(productsPanier == null || productsPanier.length == 0){
     panierVide();
}
    //pour afficher les articles du panier et leurs montants
else{
    for(let i in productsPanier){
        let priceAdjust = calculPrix(productsPanier[i].price); // je remets dans le bon format le prix du produit
        var total = (totalProduit(priceAdjust, productsPanier[i].quantite)).toFixed(2); //je calcule le montant total d'une catégorie d'article
        totalMontants.push(total).toFixed(2); // je pousse les totaux de chaque catégorie dans un tableau de calcul de commande, dans leur version nombre
        //j'affiche mes information et je créé un bouton "supprimer l'article" auquel j'attribue un id qui correspond à l'ID de l'article
        produitsPanier.innerHTML += `
            <div class="col-12 col-md-6 col-lg-4 card">
                <div class="card-body">
                    <h2 class="card-title">${productsPanier[i].name}</h2>
                </div>
                <div class="card-img">
                        <img src="${productsPanier[i].image}" alt="Appareil photo Orinico" class="imgProduct">
                </div>
                <div class="card-body">
                    <p class="card-text">Prix article : <strong>${priceAdjust} euros TTC</strong></p>
                    <p class="card-text">Option : <strong>${productsPanier[i].optionChoisie}</strong></p>
                    <p class="card-text">Quantité : <strong>${productsPanier[i].quantite}</strong></p>
                    <p class="card-text">Total : <strong>${total} euros TTC</strong></p>
                    <button class="btn btn-danger supprim" id="${productsPanier[i].id}" data-id="${productsPanier[i].id}">Supprimer l'article</button>
                </div>
            </div>
            `; 
        } 
};

// PARAMETRAGE DU BOUTON SUPPRIMER : je sélectionne tous les boutons qui ont la classe "supprim". J'obtient une Nodelist. Je la traite avec la méthode forEach(). Pour chaque élément de ma liste (name), j'écoute l'événement "click" : pour chaque élément du panier, si la data-id du bouton itéré est égale à l'id de l'article itéré, alors j'appelle la fonction "supprimArticle" qui va splicer l'élément du panier grace à 2 arguments : l'index de l'élément/article, le tableau conteneur.  
let boutonProduit = document.querySelectorAll('button.supprim');
    //verif : console.table(boutonProduit);
    boutonProduit.forEach(function(name, index){
        //verif : console.table(name.dataset.id);
        name.addEventListener("click", function() {
            for(i in productsPanier){
                if(name.dataset.id === productsPanier[i].id){
                    supprimArticle(productsPanier.indexOf(productsPanier[i]), productsPanier);
            }}
        })
});

    // je calcule, j'enregistre le  montant total dans le web storage et j'affiche le montant total de la commande 
calculMontantCommande();

//Validation du formulaire. Chaque fois que l'utilisateur tente d'envoyer les données, on vérifie que le champ de l'input est non vide et valide. 
form.addEventListener("submit", function (event) {
    validationFormulaire();      
})




