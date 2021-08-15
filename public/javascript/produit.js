// Je traduit l'objet JSON du localStorage en javascript
let myProduct= JSON.parse(localStorage.getItem("product"));

//variables et constantes représentant les éléments html qui ont été créés dans le HTML, pour les remplir et les styler
const main = document.getElementById("main");
const titleProduct = document.getElementById("titleProduct");
const imgProduct = document.getElementById("imgProduct");
const descript = document.getElementById("descript");
const price = document.getElementById("price");
let selectOption = document.getElementById("selectOption");
let selectQuantite = document.getElementById("selectQuantite");
const lienPanier = document.getElementById("lienPanier");

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

//Je crée un tableau qui va contenir my product + le choix de l'option + le choix de la quantité

let produitFinal = [];
lienPanier.addEventListener("click", function() {
    produitFinal.push(myProduct);
    if(selectOption.selectedIndex == 0){
        alert("Merci de choisir une option")
    }
    else {
        produitFinal.push(selectOption.value);
    };
    if(selectQuantite.selectedIndex == 0){
        alert("Merci de choisir une quantité")
    }
    else {
        produitFinal.push(selectQuantite.value);
    }
    localStorage.setItem("registeredProducts", JSON.stringify(produitFinal));

})

/*
//Je crée un tableau qui contiendra les articles enregistrés dans le panier
productListPanier = [];



//paramétrage du bouton "ajouter au panier"  



/*lienPanier.addEventListener("click", function(){
    // S'il y a déjà des articles enregistrés dans le localStorage
        productListPanier.push(myProduct);
        localStorage.setItem("registered", JSON.stringify(productListPanier));
    }) ;

        //Si il y a déjà des produits enregistrés dans le panier , donc si "productListPanier" est "true"
    /*if(productListPanierString){
        productListPanier.push(myProduct);
    }
            //Si il n'y a pas déjà des produits enregistrés dans le panier , donc si "productListPanier" est "false"
    else {
        productListPanier.push(myProduct);
        localStorage.setItem("registeredProducts", productListPanierString);
    }
})*/
