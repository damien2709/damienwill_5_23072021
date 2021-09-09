//fonction permettant de faire un fetch avec les informations URL du config.json
async function loadConfig() {
	let result = await fetch("../../config.json") ; 
	return result.json() ; 
}
