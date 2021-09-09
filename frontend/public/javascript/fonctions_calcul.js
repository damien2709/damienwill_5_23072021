//fonction de traduction du prix en euros avec 2 nombres derrière la virgule
function calculPrix(a){
    return (a/1000).toFixed(2);
}; 

 //fonction calcul du cout d'une commande d'1 article
 function totalProduit(a,b){
    return a*b;
}

// FONCTION de calcul du montant total de la commande, de son stockage sur le web storage et de son affichage
function calculMontantCommande(){
    let totalCommande = 0;
    for(let i = 0; i<totalMontants.length; i++){
        totalCommande += Number(totalMontants[i]);
    }
    let sum = (totalCommande).toFixed(2);
     // Je garde en mémoire le montant total pour ma page de confirmation
    localStorage.setItem("montantTotal", JSON.stringify(sum)); 
    // introduction du montant total de la commande dans le html
    montantTotalCommande.innerHTML = `Total de la commande : <strong>${sum} euros TTC</strong>`
};