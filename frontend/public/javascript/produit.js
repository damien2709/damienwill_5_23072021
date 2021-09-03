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
const error = document.getElementsByClassName("error");
const selectQuantite = document.getElementById("selectQuantite");
const lienPanier = document.getElementById("lienPanier");
const confirmationCommande = document.getElementById("confirmationCommande");

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

// déclaration des fonctions
function affichageProduit(){
    titleProduct.innerHTML = (myProduct.name);
    imgProduct.src = (myProduct.imageUrl);
    descript.innerHTML = (myProduct.description);
    price.innerHTML = (priceAdjust) + " euros TTC";
};

function affichageValidation(){
    optionError.innerHTML = ``;
    quantiteError.innerHTML = ``;
    confirmationCommande.innerHTML= `Votre produit a été ajouté au panier !`;
    confirmationCommande.style.color = "green";
};

function calculPrix(a){
    return (a/1000).toFixed(2);
};
// Vérif : console.log(calculPrix(49900));

//je traduis le prix brut à 6 chiffres en euros avec deux décimales
let priceAdjust = calculPrix(myProduct.price);

//J'affiche les informations du produit grâce à la fonction suivante
affichageProduit();

//Affichage des choix d'optiques avec création des éléments "option" dans la liste <select>
for(let i in myProduct.lenses){
    selectOption.innerHTML += `
    <option value="${myProduct.lenses[i]}" id="choixOption">${myProduct.lenses[i]}</option>
    `
};

//paramétrage de l'évenement click : si les options et la quantité ne sont pas à 0, alors je crée un nouvel objet "article" de la classe "article", qui sera stocké dans le tableau "panier", ce tableau sera envoyé dans le local storage. 
lienPanier.addEventListener("click", function(event) {
    // Si aucune option n'est sélectionnée, message d'erreur et desactivation du bouton d'envoi
    if(selectOption.selectedIndex == 0){
        optionError.innerHTML = `Merci de choisir une option !`;
        optionError.style.color = `red`;
        event.preventDefault;  
    }
    // Si l'option est sélectionnée, on enlève le mesage d'erreur
    if(selectOption.selectedIndex != 0){
        optionError.innerHTML = ``;
        optionError.style.color = `initial`;
        event.preventDefault;
    }
   // Si aucune quantité n'est sélectionnée, message d'erreur et desactivation du bouton d'envoi
    if(selectQuantite.selectedIndex == 0){
        quantiteError.innerHTML = `Merci de choisir une quantité !`;
        quantiteError.style.color = `red`;
        event.preventDefault;
    }
    // Si l'option est sélectionnée, on enlève le mesage d'erreur
    if(selectQuantite.selectedIndex != 0){
        quantiteError.innerHTML = ``;
        quantiteError.style.color = `initial`;
        event.preventDefault;
    }
    if(selectOption.selectedIndex != 0 && selectQuantite.selectedIndex != 0){
        const article = new camera(myProduct.name, myProduct.imageUrl, selectOption.value, myProduct.price, myProduct._id, selectQuantite.value);
        affichageValidation();
        ajoutPanier(article);
          
        }
    

})
