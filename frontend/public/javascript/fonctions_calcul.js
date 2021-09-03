//fonction de traduction du prix en euros avec 2 nombres derrière la virgule
function calculPrix(a){
    return (a/1000).toFixed(2);
}; // Vérif : console.log(calculPrix(49900));

 //fonction calcul du cout d'une commande d'1 article
 function totalProduit(a,b){
    return a*b;
}
/* test fonction totalProduit :
let result1 = totalProduit(4,5);
if (result1 ===20){
    console.log("fonction TotalProduit OK")
}
else {console.log("fonction TotalProduit NOT")} */

// FONCTION de calcul du montant total de la commande, de son stockage sur le web storage et de son affichage
function calculMontantCommande(){
    let totalCommande = 0;
    for(let i = 0; i<totalMontants.length; i++){
        totalCommande += Number(totalMontants[i]);
    }
    let sum = (totalCommande).toFixed(2);
    //verif: console.log(sum);
     // Je garde en mémoire le montant total pour ma page de confirmation
    localStorage.setItem("montantTotal", JSON.stringify(sum)); 
    // introduction du montant total de la commande dans le html
    montantTotalCommande.innerHTML = `Total de la commande : <strong>${sum} euros TTC</strong>`
};