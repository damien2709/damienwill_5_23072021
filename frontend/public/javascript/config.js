async function loadConfig() {
	let result = await fetch("../../config.json") ; // le fetch peut aussi charger des fichiers en local ! Grace à await, il va attendre que result soit terminé avant d’effectuer la ligne suivante (c’est la même chose que le .then )
	return result.json() ; //Fetch renvoie une promesse qui se résout avec le résultat de l’analyse du corps de la requête en tant que json. 
}
