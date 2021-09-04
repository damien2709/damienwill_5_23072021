// ENREGISTREMENT DES PRODUITS DANS LE PANIER ET DU PANIER DANS LE WEB STORAGE (page produit.js) : Afin de conserver plusieurs articles dans le panier, je crée des conditions: si il n'y a pas de panier dans le localstorage, j'en crée un en initialisant ma variable dans le code, s'il y a déjà un panier dans le local storage, je créé ma variable panier à partir du localstorage. 
function ajoutPanier(article) {
    if(localStorage.getItem("panier")){
        let listProduitsPanier = JSON.parse(localStorage.getItem("panier"));
        listProduitsPanier.push(article);
        localStorage.setItem("panier", JSON.stringify(listProduitsPanier));
    }
    else{
        let listProduitsPanier = [];
        listProduitsPanier.push(article);
        localStorage.setItem("panier", JSON.stringify(listProduitsPanier));
    } 
};   

    //FONCTION de validation de l'ajout d'article au panier, la fonction sera appelée avec un évenement(click, function(event))
function validationAjoutArticlePanier(a, b){
    // Si aucune option n'est sélectionnée, message d'erreur et desactivation du bouton d'envoi
    if(a == 0){
       error.innerHTML = `Merci de choisir une option !`;
       error.style.color = `red`;
       confirmationCommande.innerHTML= ``;
       event.preventDefault;  
   }
   // Si l'option est sélectionnée, on enlève le mesage d'erreur mais on garde la désactivation du bouton
    if(a != 0){
       error.innerHTML = ``;
       error.style.color = `initial`;
       event.preventDefault;
   }
    if(b == 0){
       error1.innerHTML = `Merci de choisir une quantité !`;
       error1.style.color = `red`;
       confirmationCommande.innerHTML= ``;
       event.preventDefault;  
   }

    if(b != 0){
       error1.innerHTML = ``;
       error1.style.color = `initial`;
       event.preventDefault;
   }
   //si a (les options) et b (la quantité) ne sont pas à 0, alors je crée un nouvel objet "article" de la classe "camera", j'appelle la fonction ajoutPanier avec argument "article". L'article sera ensuite stocké dans le tableau "panier", ce tableau sera créé ou mis à jour puis envoyé dans le local storage. ensuite j'afficherais un message de confirmation de commande.
    if(a != 0 && b != 0){
       const article = new camera(myProduct.name, myProduct.imageUrl, selectOption.value, myProduct.price, myProduct._id, selectQuantite.value);
       ajoutPanier(article);
       confirmationCommande.innerHTML= `Votre produit a été ajouté au panier !`;
       confirmationCommande.style.color = "green";  
   }
       
};
 
//FONCTION de suppression d'un produit dans le panier : paramétrage du bouton "supprimer l'article" avec 2 paramètres : l'article et le tableau représentant le panier
function supprimArticle (article, panier) {
    productsPanier.splice(article, 1);
    localStorage.setItem("panier", JSON.stringify(panier));
    window.location.reload();
    }

// FONCTION d'alerte panier vide : ja'ffiche un avertissement de panier vide et je désactive le bouton de formulaire si le panier est vide
function panierVide() {
        document.getElementById("produitsPanier").innerHTML += `
        <div class="row" style=" margin: 10px; padding: 10px 0">
            <div class="col" style="color: red;">Votre panier est vide</div>
        </div>`;
        montantTotalCommande.style.display = "none";
        form.style.display = "none";
    };