// Je traduit l'objet JSON du localStorage en javascript
let myProduct= JSON.parse(localStorage.getItem("product"));
//variables et constantes représentant les éléments html qui ont été créés dans le HTML, pour les remplir et les styler
const main = document.getElementById("main");
const titleProduct = document.getElementById("titleProduct");
const imgProduct = document.getElementById("imgProduct");
const descript = document.getElementById("descript");
const price = document.getElementById("price");
const selectOption = document.getElementById("selectOption");
const optionError = document.getElementById("optionError");
const selectQuantite = document.getElementById("selectQuantite");
const quantiteError = document.getElementById("quantiteError");
const lienPanier = document.getElementById("lienPanier");
const confirmationCommande = document.getElementById("confirmationCommande");

// Déclaration du tableau qui comprendra les articles sélectionnées pour le panier + le contact (formulaire)
let tableauCommande = [];

//Je crée une classe d'articles qui va créer des objets contenant :  my product + le choix de l'option + le choix de la quantité. 
class produitPanier {
    constructor(name, image, optionChoisie, price, quantite)
    {
        this.name= name;
        this.image= image;
        this.optionChoisie= optionChoisie;
        this.price= price;
        this.quantite= quantite;
    }
}

//je traduis le prix brut à 6 chiffres en euros avec deux décimales
let priceAdjust = (myProduct.price/1000).toFixed(2);

//Affichage des informations du produit
titleProduct.innerHTML = (myProduct.name);
imgProduct.src = (myProduct.imageUrl);
descript.innerHTML = (myProduct.description);
price.innerHTML = (priceAdjust) + " euros TTC";

//Affichage des choix d'optiques avec création des éléments "option" dans la liste <select>
for(let i in myProduct.lenses){
    selectOption.innerHTML += `
    <option value="${myProduct.lenses[i]}" id="choixOption">${myProduct.lenses[i]}</option>
    `
};

//paramétrage de l'évenement click : si les options et la quantité ne sont pas à 0, alors je crée un nouvel objet "article" de la classe "produitPanier", qui sera stocké dans le tableau "panier", ce tableau sera envoyé dans le local storage. 
lienPanier.addEventListener("click", function(event) {

    if(selectOption.selectedIndex != 0 && selectQuantite.selectedIndex != 0){
        optionError.innerHTML = ``;
        quantiteError.innerHTML = ``;
        confirmationCommande.innerHTML= `Votre produit a été ajouté au panier !`;
        confirmationCommande.style.color = "green";
        const article = new produitPanier(myProduct.name, myProduct.imageUrl, selectOption.value, myProduct.price, selectQuantite.value);
        // Afin de conserver les articles du panier, je crée des conditions, si il n'y a pas de panier dans le localstorage, j'en crée un en initialisant ma variable dans le code, s'il y a déjà un panier dans le local storage, je créé ma variable panier à partir du localstorage. 
        if(localStorage.getItem("panier")){
            let panier= JSON.parse(localStorage.getItem("panier"));
            panier.push(article);
            localStorage.setItem("panier", JSON.stringify(panier));
        }
        else{
            let panier = [];
            panier.push(article);
            localStorage.setItem("panier", JSON.stringify(panier));
        }   
        }
    // Si aucune option n'est sélectionnée, message d'erreur et desactivation du bouton d'envoi
    if(selectOption.selectedIndex == 0){
        optionError.innerHTML = `! Merci de choisir une option`;
        optionError.style.color = `red`;
        event.preventDefault;  
    }
   // Si aucune quantité n'est sélectionnée, message d'erreur et desactivation du bouton d'envoi
    if(selectQuantite.selectedIndex == 0){
        quantiteError.innerHTML = `! Merci de choisir une quantité`;
        quantiteError.style.color = `red`;
        event.preventDefault;
    }

})

