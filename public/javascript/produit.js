// Je traduit l'objet JSON du localStorage en javascript
let myProduct= JSON.parse(localStorage.getItem("product"));
const Panier= JSON.parse(localStorage.getItem("registeredProducts"));

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

//Je crée une classe d'article qui va créer des objets contenant :  my product + le choix de l'option + le choix de la quantité
class produitPanier {
    constructor(objet, optionChoisie, quantite)
    {
        this.objet= objet;
        this.optionChoisie= optionChoisie;
        this.quantite= quantite;
    }
}

//je crée un tableau qui va contenir tous mes articles au panier
const panier = [];

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
        const article = new produitPanier(myProduct, selectOption.value, selectQuantite.value);
        panier.push(article);
        localStorage.setItem("registeredProducts", JSON.stringify(panier));
        }
    
    if(selectOption.selectedIndex == 0){
        optionError.innerHTML = `! Merci de choisir une option`;
        optionError.style.color = `red`;
        event.preventDefault;
        
    }
   
    if(selectQuantite.selectedIndex == 0){
        quantiteError.innerHTML = `! Merci de choisir une quantité`;
        quantiteError.style.color = `red`;
        event.preventDefault;
    }

})

