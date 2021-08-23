// Je traduit l'objet JSON du localStorage en javascript
let productsPanier= JSON.parse(localStorage.getItem("panier"));
//verif
console.table(productsPanier);
console.log(productsPanier[0].id);

//Déclaration des variables pour introduction de contenu
const produitsPanier = document.getElementById("produitsPanier");
const total = document.getElementById("montantTotal"); 
const montantTotalCommande = document.getElementById("montantTotalCommande"); 

//déclaration du tableau qui contiendra les différents montants de commande
const totalMontants = [];


    //variables pour validation du questionnaire
let firstName = document.getElementById("prenom");
let lastName = document.getElementById("nom");
let address = document.getElementById("address");
let city = document.getElementById("city");
let email = document.getElementById("email");
let form = document.getElementById("form");
let errorPrenom = document.getElementById("errorPrenom");
let errorNom = document.getElementById("errorNom");
let errorAddress = document.getElementById("errorAddress");
let errorCity = document.getElementById("errorCity");
let errorEmail = document.getElementById("errorEmail");

        //variables regex : une regex débute avec "/^" et finit avec "$/". La regex fonctionne pour 1 caractère, il faut ajouter le + pour filtrer une suite de caractères. 
let regexLettres = /^[a-zA-Z-\s]+$/;
let regexLettresChiffres = /^[a-zA-Z-\s0-9]+$/;
let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

//déclaration des fonctions
        //fonction calcul du cout d'une commande d'1 article
function totalProduit(a,b){
    return a*b;
}

//création des éléments de la page 
for(let i in productsPanier){
    let priceAdjust = (productsPanier[i].price/1000).toFixed(2);
    let total = (totalProduit(priceAdjust, productsPanier[i].quantite)).toFixed(2);
    // je pousse les totaux de chaque produit dans un tableau de calcul de commande, dans leur version nombre (sinon ça va devenir des strings)
    totalMontants.push(total).toFixed(2);
    produitsPanier.innerHTML += `
    <div class="row" style="border: 1px solid black; margin: 10px; padding: 10px 0">
        <div class="col">
            <div class="col">${productsPanier[i].name}</div>
            <div class="col">
                <img src="${productsPanier[i].image}" alt="" class="imgProduct">
            </div>
        </div>
        <div class="col">
            <div class="col"><p>Prix article : ${priceAdjust} euros TTC</p></div>
            <div class="col"><p>Option : ${productsPanier[i].optionChoisie}</p></div>
            <div class="col"><p>Quantité : ${productsPanier[i].quantite}</p></div>
            <div class="col total"><p>Total : ${total} euros TTC</p></div>
        </div>
    </div>
    `
}

//calcul du cout total de la commande
let totalCommande = 0;
for(let i = 0; i<totalMontants.length; i++)
    {
        totalCommande += Number(totalMontants[i]);
        
    }
let sum = (totalCommande).toFixed(2);    
//verif
console.log(sum);

// introduction du montant total de la commande dans le html
montantTotalCommande.innerHTML = `Montant total de la commande : ${sum} euros TTC`

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
              // S'il est invalide, on affiche un message d'erreur personnalisé
              
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
        
            // Champ Ville
             if (city.value.trim() == "") {
                errorCity.innerHTML = `Merci de remplir le champ "Adresse"`;
                city.style.border= "1px solid red";
                errorCity.style.color= "red";
                event.preventDefault();
            }
                    // je teste avec la méthode "test" de ma regex pour les lettres la valeur de l'élément (champ input) "prenom". La méthode renvoit "true" ou "false".
            else if (regexLettres.test(city.value) == false){
                errorCity.innerHTML = `Le champ "Ville" peut contenir uniquement des lettres et des tirets`;
                city.style.border= "1px solid red";
                errorCity.style.color= "red";
                event.preventDefault();
            }
        
            // Champ email
            if (email.value.trim() == "") {
                errorEmail.innerHTML = `Merci de remplir le champ "Email"`;
                email.style.border= "1px solid red";
                errorEmail.style.color= "red";
                event.preventDefault();
            }
                    // je teste avec la méthode "test" de ma regex pour les lettres la valeur de l'élément (champ input) "prenom". La méthode renvoit "true" ou "false".
            else if (regexEmail.test(email.value) == false){
                errorEmail.innerHTML = `L'email déclaré n'est pas valide`;
                email.style.border= "1px solid red";
                errorEmail.style.color= "red";
                event.preventDefault();
            }
            if (firstName.value.trim() != "" && regexLettres.test(firstName.value) != false && lastName.value.trim() != "" && regexLettres.test(lastName.value) != false && address.value.trim() != "" && regexLettresChiffres.test(address.value) != false && city.value.trim() != "" && regexLettres.test(city.value) != false && email.value.trim() != "" && regexEmail.test(email.value) != false){
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
                    alert("tout est OK !");
                    //verif : alert(products);

                            //déclaration de l'objet order comprenant le contact et le tableau des produits pour requête POST API
                let panierFinal = {
                    contact: contact,
                    products: products
                };
                    //verif : 
                localStorage.setItem("order", JSON.stringify(panierFinal));
                    
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

                    .then(responseServer => {
                        const newDiv= document.createElement("div");
                        main.appendChild(newDiv);
                        newDiv.innerHTML= `${responseServer.orderId}`
                    })

                    // Lance affiche l'erreur dans la console s'il y en a une
                    .catch(error => {
                        console.log(error)
                    }) 
                }      
            })

 // préparation objet de contact et tableau de produits pour Requête POST vers API
        
        //déclaration de l'objet contact pour requête POST API





