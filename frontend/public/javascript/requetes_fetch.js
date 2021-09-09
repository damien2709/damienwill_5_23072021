//envoi de la requête POST avec utilisation de la fonction "loadConfig" du config.js qui permet de charger l'url principal du chemin à l'application coté serveur
function requetePost(panierFinal){
    loadConfig().then(data => {
        config = data;
        fetch(config.host + "/api/cameras/order", 
        {
            method: 'POST',
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
    })
} 