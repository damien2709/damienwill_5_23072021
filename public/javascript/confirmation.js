// Je récupère les objet JSON "commande" et "montantTotal" du localStorage en javascript
const commande= JSON.parse(localStorage.getItem("commande"));
console.log(commande);
const montantTotal= JSON.parse(localStorage.getItem("montantTotal"));
console.log(montantTotal);

//je récupère l'élément main du html et j'y ajoute du contenu (remerciement, confirmation de commande, prix total, id de commande)
const main = document.getElementById("main");

main.innerHTML +=`
    <div class="row alert alert-success" role="alert" style="border: 1px solid black; margin: 10px; padding: 10px 0">
        <div class="col">
            <p>Merci <span>${commande.contact.firstName} ${commande.contact.lastName}</span> pour votre commande!</p>
            <p>Le montant total de votre commande est de <span>${montantTotal} euros TTC</span>.</p>
            <p>Votre numéro de commande est le <span>${commande.orderId}</span>.</p>
        </div>
    </div>
`
// après la confirmation de commande, j'efface le local storage pour revenir à l'état initial. 
localStorage.clear();