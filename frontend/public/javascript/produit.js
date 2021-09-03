// Je traduit l'objet JSON du localStorage en javascript
let myProduct= JSON.parse(localStorage.getItem("product"));
// Vérif : console.table(myProduct);//vérification du produit

//variables et constantes représentant les éléments html qui ont été créés dans le HTML, pour les remplir et les styler
const main = document.getElementById("main");
const titleProduct = document.getElementById("titleProduct");
const imgProduct = document.getElementById("imgProduct");
const descript = document.getElementById("descript");
const price = document.getElementById("price");
const selectOption = document.getElementById("selectOption");
const selectQuantite = document.getElementById("selectQuantite");
const error = document.getElementById("error");
const error1 = document.getElementById("error1");
const lienPanier = document.getElementById("lienPanier");
const confirmationCommande = document.getElementById("confirmationCommande");
const supprimBtn = document.getElementById("supprimBtn");

//Je crée une classe d'articles qui va créer des objets contenant :  my product + le choix de l'option + le choix de la quantité. 
class camera {
    constructor(name, image, optionChoisie, price, id, quantite)
    {
        this.name= name;
        this.image= image;
        this.optionChoisie= optionChoisie;
        this.price= price;
        this.id= id;
        this.quantite= quantite;
    }
};

//je traduis le prix brut à 6 chiffres en euros avec deux décimales grace à la fonction calculPrix
let priceAdjust = calculPrix(myProduct.price);

//J'affiche les informations du produit sur la page
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

//paramétrage de l'évenement click du bouton d'ajout au panier
lienPanier.addEventListener("click", function(event) {
    validationAjoutArticlePanier(selectOption.selectedIndex, selectQuantite.selectedIndex);
})
