// la fonction initPanier sert à récupérer les données du panier actuel du localStorage ou de créer un tableau vide au cas où panier n’existe pas encore dans le localStorage
function initPanier(){
    var panier = localStorage.getItem("panier");
    // on teste s’il y a un panier dans le local Storage. Si oui alors retourne moi l’objet panier (désérialisé), sinon retourne-moi un tableau vide. 
    if(panier != null){
        return JSON.parse(panier);
        }
    else {
        return [] ;
        }
        //verif :
        console.log(panier);
    }

    
    // la fonction savePanier permet d’enregistrer le panier dans le localStorage
    function savePanier(panier){
    localStorage.setItem("panier", JSON.stringify(panier)) ;
    }

    // la fonction ajoutPanier sert à ajouter un produit dans le panier puis à enregistrer le panier dans le localStorage
    function ajoutPanier(article){
    var panier = initPanier() ; // dans un 1er temps on récupère le panier ou on le crée (ce sera un tableau)
    panier.push(article) ; // ici on ajoute le produit passé en paramètre au panier
    savePanier(panier);
    }
    