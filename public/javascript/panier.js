// Je traduit l'objet JSON du localStorage en javascript
let ProductsPanier= JSON.parse(localStorage.getItem("registeredProducts"));

//création des éléments de la page 
for(let i in ProductsPanier){
const newDivRow= document.createElement("div");
    main.appendChild(newDivRow);
    newDivRow.setAttribute("class", "row");
    newDivRow.style.border = ("1px solid black");
    newDivRow.style.margin = ("10px");
    newDivRow.style.padding = ("10px 0");

    // Création de la col 1 avec image et nom de l'article
const newDivCol1= document.createElement("div");
    newDivRow.appendChild(newDivCol1);
    newDivCol1.setAttribute("class", "col");
    const newDivColImg= document.createElement("div");
        newDivCol1.appendChild(newDivColImg);
        newDivColImg.setAttribute("class", "col");
    const newImg= document.createElement("img");
        newDivColImg.appendChild(newImg);
        newImg.setAttribute("class", "imgProduct");
        newImg.setAttribute("src", ProductsPanier[i].imageUrl);
    const newDivColName= document.createElement("div");
        newDivCol1.appendChild(newDivColName);
        newDivColName.setAttribute("class", "col");

    //Création de la col 2 avec le prix et l'option choisie
const newDivCol2= document.createElement("div");
    newDivRow.appendChild(newDivCol2);
    newDivCol2.setAttribute("class", "col");
    const newDivColPrice= document.createElement("div");
        newDivCol2.appendChild(newDivColPrice);
        newDivColPrice.setAttribute("class", "col");
    const newDivColOption= document.createElement("div");
        newDivCol2.appendChild(newDivColOption);
        newDivColOption.setAttribute("class", "col");

//Affichage des informations des articles du panier
newDivColName.innerHTML = (ProductsPanier[i].name);
newDivColPrice.innerHTML = "Prix : " + (ProductsPanier[i].price) + " euros TTC";
newDivColOption.innerHTML = "Option choisie : " + (ProductsPanier[i].option) ;

}
