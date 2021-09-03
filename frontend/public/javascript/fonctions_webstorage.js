// FONCTION pour récupérer une clé du localStorage
function getMyItem(cle){
    JSON.parse(localStorage.getItem(cle));
};

//FONCTION pour enregistrer une clé et sa valeur dans le localStorage
function setMyItem(cle, valeur){
    localStorage.setItem(cle, JSON.stringify(valeur));
};