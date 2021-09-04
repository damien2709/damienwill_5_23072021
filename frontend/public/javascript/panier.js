// Je traduit l'objet JSON du localStorage en javascript
let productsPanier= JSON.parse(localStorage.getItem("panier"));
//verif : console.table(productsPanier); 

//Déclaration des variables pour introduction de contenu
const montantTotal = document.getElementById("montantTotal"); 
const montantTotalCommande = document.getElementById("montantTotalCommande");
const produitsPanier = document.getElementById("produitsPanier");
const form = document.getElementById("form");

//Variables pour le calcul du montant total
const totalMontants = []; //déclaration du tableau qui contiendra les différents montants de commande

    //variables pour validation du questionnaire
let firstName = document.getElementById("prenom");
let lastName = document.getElementById("nom");
let address = document.getElementById("address");
let city = document.getElementById("city");
let email = document.getElementById("email");
let errorPrenom = document.getElementById("errorPrenom");
let errorNom = document.getElementById("errorNom");
let errorAddress = document.getElementById("errorAddress");
let errorCity = document.getElementById("errorCity");
let errorEmail = document.getElementById("errorEmail");

        //variables regex : une regex débute avec "/^" et finit avec "$/". La regex fonctionne pour 1 caractère, il faut ajouter le + pour filtrer une suite de caractères. 
let regexLettres = /^[a-zA-Z-\s]+$/;
//test  : if (regexLettres.test("dam27") == false){console.log("regexLettres = OK");}
//else {console.log("regexLettres = NOT");}
let regexLettresChiffres = /^[a-zA-Z-\s0-9]+$/;
//test regex : if (regexLettresChiffres.test("123 dam") == true){console.log("regexLettresChiffres = OK");}
//else {console.log("regexLettresChiffres = NOT");}
let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//test regex : if (regexEmail.test("dam27@com" && "dam27.com") == false){console.log("regexEmail = OK");}
//else {console.log("regexEmail = NOT");}


    // si panier vide, alors affichage alerte + désactivation bouton forumlaire, sinon pour chaque article je calcule les coûts et j'affiche les produits et les informations de prix sur la page
if(productsPanier == null || productsPanier.length == 0){
     panierVide();
}
//pour afficher les articles du panier et leurs montants
else{
    for(let i in productsPanier){
        let priceAdjust = calculPrix(productsPanier[i].price);
        var total = (totalProduit(priceAdjust, productsPanier[i].quantite)).toFixed(2);
        totalMontants.push(total).toFixed(2); // je pousse les totaux de chaque produit dans un tableau de calcul de commande, dans leur version nombre (sinon ça va devenir des strings)
        produitsPanier.innerHTML += `
    <div class="col-12 col-md-6 col-lg-4 card">
        <div class="card-body">
            <h2 class="card-title">${productsPanier[i].name}</h2>
        </div>
        <div class="card-img">
                <img src="${productsPanier[i].image}" alt="Appareil photo Orinico" class="imgProduct">
        </div>
        <div class="card-body">
            <p class="card-text">Prix article : <strong>${priceAdjust} euros TTC</strong></p>
            <p class="card-text">Option : <strong>${productsPanier[i].optionChoisie}</strong></p>
            <p class="card-text">Quantité : <strong>${productsPanier[i].quantite}</strong></p>
            <p class="card-text">Total : <strong>${total} euros TTC</strong></p>
            <button class="btn btn-danger" id="supprimBtn">Supprimer l'article</button>
        </div>
    </div>
    `;  
        // je paramètre le bouton "supprimer" pour chaque article 
        document.getElementById("supprimBtn").addEventListener("click", function(){
        supprimArticle(productsPanier[i], productsPanier);
        })
}};

    // je calcule, j'enregistre le  montant total dans le web storage et j'affiche le montant total de la commande 
calculMontantCommande();

//Validation du formulaire. Chaque fois que l'utilisateur tente d'envoyer les données, on vérifie que le champ de l'input est non vide et valide. 
form.addEventListener("submit", function (event) {

    // Je met en place l'invalidité de champs requis vides. La méthode trim() permet de retirer les blancs en début et fin de chaîne.
            // Champ Prénom
            if (firstName.value.trim() == "") {
                errorPrenom.innerHTML = `Merci de remplir le champ "Prénom"`;
                firstName.style.border= "1px solid red";
                errorPrenom.style.color= "red";
                event.preventDefault();
            }
                // je teste avec la méthode "test" de ma regex pour les lettres la valeur de l'élément (champ input) "prenom". La méthode renvoit "true" ou "false".
            else if (regexLettres.test(firstName.value) == false){
                errorPrenom.innerHTML = `Le champ "Prénom" peut contenir uniquement des lettres et des tirets`;
                firstName.style.border= "1px solid red";
                errorPrenom.style.color= "red";
                event.preventDefault();
            }
            // j'enlève les messages d'erreur si le champ est finalement correctement rempli
            if (firstName.value.trim() != "" && regexLettres.test(firstName.value) != false){
                errorPrenom.innerHTML = ``;
                firstName.style.border= "1px solid black";
            }
                    // Champ Nom
            if (lastName.value.trim() == "") {
                errorNom.innerHTML = `Merci de remplir le champ "Nom"`;
                lastName.style.border= "1px solid red";
                errorNom.style.color= "red";
                event.preventDefault();
            }
        
            else if (regexLettres.test(lastName.value) == false){
                errorNom.innerHTML = `Le champ "Nom" peut contenir uniquement des lettres et des tirets`;
                lastName.style.border= "1px solid red";
                errorNom.style.color= "red";
                event.preventDefault();
            }
            if (lastName.value.trim() != "" && regexLettres.test(lastName.value) != false){
                errorNom.innerHTML = ``;
                lastName.style.border= "1px solid black";
            }
                
                    // Champ Adresse
            if (address.value.trim() == "") {
                errorAddress.innerHTML = `Merci de remplir le champ "Adresse"`;
                address.style.border= "1px solid red";
                errorAddress.style.color= "red";
                event.preventDefault();
            }
                    // je teste avec la méthode "test" de ma regex pour les lettres la valeur de l'élément (champ input) "prenom". La méthode renvoit "true" ou "false".
            else if (regexLettresChiffres.test(address.value) == false){
                errorAddress.innerHTML = `Le champ "Adresse" peut contenir uniquement des lettres, des chiffres et des tirets`;
                address.style.border= "1px solid red";
                errorAddress.style.color= "red";
                event.preventDefault();
            }
            if (address.value.trim() != "" && regexLettresChiffres.test(address.value) != false){
                errorAddress.innerHTML = ``;
                address.style.border= "1px solid black";
            }
        
            // Champ Ville
             if (city.value.trim() == "") {
                errorCity.innerHTML = `Merci de remplir le champ "Ville"`;
                city.style.border= "1px solid red";
                errorCity.style.color= "red";
                event.preventDefault();
            }
                    
            else if (regexLettres.test(city.value) == false){
                errorCity.innerHTML = `Le champ "Ville" peut contenir uniquement des lettres et des tirets`;
                city.style.border= "1px solid red";
                errorCity.style.color= "red";
                event.preventDefault();
            }
            if (city.value.trim() != "" && regexLettres.test(city.value) != false){
                errorCity.innerHTML = ``;
                city.style.border= "1px solid black";
            }
        
            // Champ email
            if (email.value.trim() == "") {
                errorEmail.innerHTML = `Merci de remplir le champ "Email"`;
                email.style.border= "1px solid red";
                errorEmail.style.color= "red";
                event.preventDefault();
            }

            else if (regexEmail.test(email.value) == false){
                errorEmail.innerHTML = `L'email déclaré n'est pas valide`;
                email.style.border= "1px solid red";
                errorEmail.style.color= "red";
                event.preventDefault();
            }
            if (email.value.trim() != "" && regexEmail.test(email.value) != false){
                errorEmail.innerHTML = ``;
                email.style.border= "1px solid black";
            }

            //maintenant, si tous mes champs sont valides et vérifiés, je désactive la fonction initiale d'envoi du bouton de formulaire (il servira à déclencher la requête POST). je crée mon objet "contact", mon tableau des produits, j'insère les 2 dans un tableau "panierFinal" qui sera inséré dans le body de la requête. 
            if (firstName.value.trim() != "" && regexLettres.test(firstName.value) != false && lastName.value.trim() != "" && regexLettres.test(lastName.value) != false && address.value.trim() != "" && regexLettresChiffres.test(address.value) != false && city.value.trim() != "" && regexLettres.test(city.value) != false && email.value.trim() != "" && regexEmail.test(email.value) != false){
                // verif : console.log("validation du formulaire = OK"); //Utiliser point d'arrêt du débogeur
                    event.preventDefault();
                    let contact = {
                        firstName: firstName.value, 
                        lastName: lastName.value,
                        address: address.value,
                        city: city.value,
                        email: email.value
                        };
                    //verif : alert(contact.lastName);
                                // je crée un tableau qui comprend uniquement les ID des produits du panier
                    let products = [];
                    for (let i in productsPanier){
                        let subProduct = productsPanier[i].id;
                        products.push(subProduct.toString());
                        
                    };
                                        //verif : alert("tout est OK !");

                            //déclaration de l'objet panierFinal comprenant le contact et le tableau des produits pour requête POST API
                let panierFinal = {
                    contact: contact,
                    products: products
                };
                    //verif : localStorage.setItem("order", JSON.stringify(panierFinal));
                    
                    //envoi de la requête POST
                    fetch("http://localhost:3000/api/cameras/order", 
                    {
                        method: 'POST',
                        // ici on crée 2 entêtes (accept et content-type)qui vont prévenir le service web qu’il va recevoir du json
                        headers: {
                            'Accept': 'application/json', 
                            'Content-Type': 'application/json' 
                        },
                        body: JSON.stringify(panierFinal)
                    })
                    // Réception réponse et vérification
                    .then(requete =>{
                            if (requete.ok) {
                                console.log("requete = OK");
                                return requete.json();
                            } else {
                                console.log('Mauvaise réponse du serveur !')
                            }
                        })
                    //enregistrement de la réponse de l'API dans localStorage
                    .then(responseServer => {
                        localStorage.setItem("commande", JSON.stringify(responseServer));
                        
                         //ouvrir la page de confirmation de commande
                        window.location.href="../../confirmation.html";
                    })

                    // Lance affiche l'erreur dans la console s'il y en a une
                    .catch(error => {
                        console.log(error)
                    }) 
                }      
            })




