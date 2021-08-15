// Je traduit l'objet JSON du localStorage en javascript
let productsPanier= JSON.parse(localStorage.getItem("registeredProducts"));

const produitsPanier = document.getElementById("produitsPanier");
let priceAdjust = (productsPanier[0].price/1000).toFixed(2);
let quantite = productsPanier[2];
function coutTotal(a,b){
    return a*b;
}
let result = coutTotal(priceAdjust, quantite).toFixed(2);


//création des éléments de la page 

produitsPanier.innerHTML += `
    <div class="row" style="border: 1px solid black; margin: 10px; padding: 10px 0">
        <div class="col">
            <div class="col">
                <img src="${productsPanier[0].imageUrl}" alt="" class="imgProduct">
            </div>
            <div class="col">${productsPanier[0].name}</div>
        </div>
        <div class="col">
            <div class="col"><p>Prix : ${priceAdjust} euros TTC</p></div>
            <div class="col"><p>Option choisie : ${productsPanier[1]}</p></div>
            <div class="col">Quantité : ${quantite}</div>
        </div>
    </div>
    <div class="row">
        <div class="col">
            Coût total : ${result} euros TTC
        </div>
    </div>
    `
