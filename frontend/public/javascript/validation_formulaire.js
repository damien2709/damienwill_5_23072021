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

function validationFormulaire() {
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
                event.preventDefault();
                const contact = {
                    firstName: firstName.value, 
                    lastName: lastName.value,
                    address: address.value,
                    city: city.value,
                    email: email.value
                };
                //verif : alert(contact.lastName);
                // je crée un tableau qui comprend uniquement les ID des produits du panier
                const products = [];
                    for (let i in productsPanier){
                        let subProduct = productsPanier[i].id;
                        products.push(subProduct.toString());  
                    };
                //déclaration de l'objet panierFinal comprenant le contact et le tableau des produits pour requête POST API
                const panierFinal = {
                    contact: contact,
                    products: products
                };
                //verif : localStorage.setItem("order", JSON.stringify(panierFinal));
                //envoi de la requête POST avec expoitation réponse de l'API externe pour afficher la confirmation de commande
                requetePost(panierFinal);
            }
}       