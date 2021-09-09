//variables et constantes représentant les éléments html qui ont été créés dans le HTML, pour les remplir et les styler
const main = document.getElementById("main");
const titleProduct = document.getElementById("titleProduct");
const imgProduct = document.getElementById("imgProduct");
const descript = document.getElementById("descript");
const price = document.getElementById("price");
const selectOption = document.getElementById("selectOption");
const selectQuantite = document.getElementById("selectQuantite");
const error = document.getElementById("error");
const error1 = document.getElementById("error1");
const lienPanier = document.getElementById("lienPanier");
const confirmationCommande = document.getElementById("confirmationCommande");
const supprimBtn = document.getElementById("supprimBtn");

//Je crée une classe d'articles qui va créer des objets contenant :  my product + le choix de l'option + le choix de la quantité. 
class camera {
    constructor(name, image, optionChoisie, price, id, quantite)
    {
        this.name= name;
        this.image= image;
        this.optionChoisie= optionChoisie;
        this.price= price;
        this.id= id;
        this.quantite= quantite;
    }
};

//je récupère l'article qui a été sélectionné pour l'afficher sur la page grace à la récupération des paramètres enregistrés dans l'URL
const url = new URL(location.href) ;
const articleId = url.searchParams.get("id");
console.log(articleId.value);

loadConfig()
    .then(data => {
        config = data;
        fetch(config.host + "/api/cameras/" + articleId)
        .then(response => {
            if(response.ok){
              // vérif : console.log("Réponse de l'API = OK"); //vérification de la bonne communication avec API
              return response.json();
            }
            else {
              // identification de l'erreur si elle existe."status" est une propriété de l'objet response et renvoie la valeur de la requête
              console.log("erreur : " + response.status);
            } 
        })
        .then(article => {
            //verif : console.table(article);
            //je traduis le prix brut à 6 chiffres en euros avec deux décimales grace à la fonction calculPrix
            let priceAdjust = calculPrix(article.price);
            //J'affiche les informations du produit sur la page
            titleProduct.innerHTML = (article.name);
            imgProduct.src = (article.imageUrl);
            descript.innerHTML = (article.description);
            price.innerHTML = (priceAdjust) + " euros TTC";
            //Affichage des choix d'optiques avec création des éléments "option" dans la liste <select>
            for(let i in article.lenses){
                selectOption.innerHTML += `<option value="${article.lenses[i]}" id="choixOption">${article.lenses[i]}</option>`
            };
            //paramétrage de l'évenement click du bouton d'ajout au panier
            lienPanier.addEventListener("click", function(event) {
                // Si aucune option n'est sélectionnée, message d'erreur et desactivation du bouton d'envoi
                if(selectOption.selectedIndex == 0){
                    error.innerHTML = `Merci de choisir une option !`;
                    error.style.color = `red`;
                    confirmationCommande.innerHTML= ``;
                    event.preventDefault;  
                }
                // Si l'option est sélectionnée, on enlève le mesage d'erreur mais on garde la désactivation du bouton
                if(selectOption.selectedIndex != 0){
                    error.innerHTML = ``;
                    error.style.color = `initial`;
                    event.preventDefault;
                }
                if(selectQuantite.selectedIndex == 0){
                    error1.innerHTML = `Merci de choisir une quantité !`;
                    error1.style.color = `red`;
                    confirmationCommande.innerHTML= ``;
                    event.preventDefault;  
                }
            
                if(selectQuantite.selectedIndex != 0){
                    error1.innerHTML = ``;
                    error1.style.color = `initial`;
                    event.preventDefault;
                }
                //si a (les options) et b (la quantité) ne sont pas à 0, alors je crée un nouvel objet "articleEnregistre" de la classe "camera", j'appelle la fonction ajoutPanier avec argument "articleEnregistre". L'article sera ensuite stocké dans le tableau "panier", ce tableau sera créé ou mis à jour puis envoyé dans le local storage. Ensuite j'afficherais un message de confirmation de commande.
                if(selectOption.selectedIndex != 0 && selectQuantite.selectedIndex != 0){
                    const articleEnregistre = new camera(article.name, article.imageUrl, selectOption.value, article.price, article._id, selectQuantite.value);
                    ajoutPanier(articleEnregistre);
                    confirmationCommande.innerHTML= `Votre produit a été ajouté au panier !`;
                    confirmationCommande.style.color = "green";  
                }
                        })
                    })
    })
    .catch(function(err) {
        console.log("err")
        });


