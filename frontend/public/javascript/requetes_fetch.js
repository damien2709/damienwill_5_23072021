//envoi de la requête POST
function requetePost(panierFinal){
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