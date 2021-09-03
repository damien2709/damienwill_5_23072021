function articleAjout(a){
     // Si aucune option n'est sélectionnée, message d'erreur et desactivation du bouton d'envoi
    if(a == 0){
        optionError.innerHTML = `Merci de choisir une option !`;
        optionError.style.color = `red`;
        event.preventDefault;  
    }
    // Si l'option est sélectionnée, on enlève le mesage d'erreur
    if(a != 0){
        optionError.innerHTML = ``;
        optionError.style.color = `initial`;
        event.preventDefault;
    }
}