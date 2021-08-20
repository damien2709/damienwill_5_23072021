// Je traduit l'objet JSON du localStorage en javascript
let productsPanier= JSON.parse(localStorage.getItem("registeredProducts"));

//Déclaration des variables
const produitsPanier = document.getElementById("produitsPanier");
let priceAdjust = (productsPanier[0].price/1000).toFixed(2);
let quantite = productsPanier[2];

    //variables pour validation du questionnaire
let prenom = document.getElementById("prenom");
let nom = document.getElementById("nom");
let address = document.getElementById("address");
let city = document.getElementById("city");
let email = document.getElementById("email");
let form = document.getElementById("form");
let errorPrenom = document.getElementById("errorPrenom");
let errorNom = document.getElementById("errorNom");
let errorAddress = document.getElementById("errorAddress");
let errorCity = document.getElementById("errorCity");
let errorEmail = document.getElementById("errorEmail");
let tableauInput = [prenom, nom, address, city, email];


        //variables regex : une regex débute avec "/^" et finit avec "$/". La regex fonctionne pour 1 caractère, il faut ajouter le + pour filtrer une suite de caractères. 
let regexLettres = /^[a-zA-Z-\s]+$/;
let regexLettresChiffres = /^[a-zA-Z-\s0-9]+$/;
let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

//déclaration des fonctions
        //fonction calcul du cout total
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
    <div class="row container">
        <div class="col" style="margin: 10px; padding: 10px 0">
            Coût total : ${result} euros TTC
        </div>
    </div>
    `
//Validation du formulaire. Chaque fois que l'utilisateur tente d'envoyer les données, on vérifie que le champ de l'input est non vide et valide. 
form.addEventListener("submit", function (event) {
    // Je met en place l'invalidité de champs requis vides. La méthode trim() permet de retirer les blancs en début et fin de chaîne.
            // Champ Prénom
    if (prenom.value.trim() == "") {
        
        errorPrenom.innerHTML = `Merci de remplir le champ "Prénom"`;
        prenom.style.border= "1px solid red";
        errorPrenom.style.color= "red";
        event.preventDefault();
    }
        // je teste avec la méthode "test" de ma regex pour les lettres la valeur de l'élément (champ input) "prenom". La méthode renvoit "true" ou "false".
    else if (regexLettres.test(prenom.value) == false){
        errorPrenom.innerHTML = `Le champ "Prénom" peut contenir uniquement des lettres et des tirets`;
        prenom.style.border= "1px solid red";
        errorPrenom.style.color= "red";
        event.preventDefault();
      // S'il est invalide, on affiche un message d'erreur personnalisé
      
    }
            // Champ Nom
    if (nom.value.trim() == "") {
        errorNom.innerHTML = `Merci de remplir le champ "Nom"`;
        nom.style.border= "1px solid red";
        errorNom.style.color= "red";
        event.preventDefault();
    }

    else if (regexLettres.test(nom.value) == false){
        errorNom.innerHTML = `Le champ "Nom" peut contenir uniquement des lettres et des tirets`;
        nom.style.border= "1px solid red";
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
})

    // requête POST : envoi du formulaire
/*
    fetch("http://localhost:3000/api/cameras/order", 
{
    method: “POST”,
    headers: // ici on crée 2 entêtes (accept et content-type)qui vont prévenir le service web qu’il va recevoir du json. 
	{ 
	'Accept': 'application/json', 
	'Content-Type': 'application/json' 
	},
    body: JSON.stringify(jsonBody) // la fonction nous permet de transformer notre objet JavaScript en JSON
});

  })
*/


