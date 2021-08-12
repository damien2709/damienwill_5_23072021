// Je traduit l'objet JSON du localStorage en javascript
let myProduct= JSON.parse(localStorage.getItem("product"));

//variables et constantes représentant les éléments html que je souhaite créer, remplir et styler
const main = document.getElementById("main");
const titleProduct = document.getElementById("titleProduct");
const imgProduct = document.getElementById("imgProduct");
const descript = document.getElementById("descript");
const price = document.getElementById("price");
const select = document.getElementById("select");
const lienPanier = document.getElementById("lienPanier");


//Affichage des informations du produit
titleProduct.innerHTML = (myProduct.name);
imgProduct.src = (myProduct.imageUrl);
descript.innerHTML = (myProduct.description);
price.innerHTML = (myProduct.price) + " euros TTC";

//Affichage des choix d'optiques avec création des éléments "option" dans la liste <select>
for(let i in myProduct.lenses){
    const newOpt= document.createElement("option");
    select.appendChild(newOpt);
    newOpt.innerHTML= (myProduct.lenses[i]);
}
//Je crée une variable dans laquelle je mets les keys et les values du localStorage
let productListPanier = JSON.parse(localStorage.getItem("registeredProduct"));

//paramétrage du bouton "ajouter au panier"
lienPanier.addEventListener("click", function(){
    // S'il y a déjà des articles enregistrés dans le localStorage
    if(productListPanier){
        productListPanier.push(myProduct);
        localStorage.setItem("registeredProducts", JSON.stringify(productListPanier));
    }  
    // S'il n'y a pas encore d'articles enregistrés dans le localStorage 
    else {
        productListPanier = [];
        productListPanier.push(myProduct);
        localStorage.setItem("registeredProducts", JSON.stringify(productListPanier));
    }
})
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





