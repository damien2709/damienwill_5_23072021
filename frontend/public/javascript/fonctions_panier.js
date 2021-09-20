// ENREGISTREMENT DES PRODUITS DANS LE PANIER ET DU PANIER DANS LE WEB STORAGE (page produit.js) : Afin de conserver plusieurs articles dans le panier, je crée des conditions: si il n'y a pas de panier dans le localstorage, j'en crée un en initialisant ma variable dans le code, s'il y a déjà un panier dans le local storage, je créé ma variable panier à partir du localstorage. 
function ajoutPanier(produit) {
    if(localStorage.getItem("panier")){
        let listProduitsPanier = JSON.parse(localStorage.getItem("panier"));
        listProduitsPanier.push(produit);
        localStorage.setItem("panier", JSON.stringify(listProduitsPanier));
    }
    else{
        let listProduitsPanier = [];
        listProduitsPanier.push(produit);
        localStorage.setItem("panier", JSON.stringify(listProduitsPanier));
    } 
};   
 
//FONCTION de suppression d'un produit dans le panier : paramétrage du bouton "supprimer l'article" avec 2 paramètres : l'article et le tableau représentant le panier
function supprimArticle (indexArticle, panier) {
    productsPanier.splice(indexArticle, 1);
    localStorage.setItem("panier", JSON.stringify(panier));
    window.location.reload();
    }

// FONCTION d'alerte panier vide : j'affiche un avertissement de panier vide et je désactive le bouton de formulaire si le panier est vide
function panierVide() {
        document.getElementById("produitsPanier").innerHTML += `
        <div class="row" style=" margin: 10px; padding: 10px 0">
            <div class="col" style="color: red;">Votre panier est vide</div>
        </div>`;
        montantTotalCommande.style.display = "none";
        form.style.display = "none";
    };