const main = document.getElementById("main");
const newUl= document.createElement("ul");

/* class cameralist {
  constructor(name, url)
  {
      this.name = name;
      this.url = url;

      affichageCameraList()
      {
          const newLi= document.createElement("li");
          newLi.setAttribute("class", "list-group-item");
          newUl.appendChild(newLi);
          const newImage= document.createElement("img");
          newLi.appendChild(newImage);
          newImage.setAttribute("src", data[i].imageUrl);
          newImage.style.maxWidth="100px";
          newImage.style.marginRight="20px";
          const newA= document.createElement("a");
          newA.setAttribute("class", "list-group-item-action")
          newA.setAttribute("href", "../../produit.html");
          newA.setAttribute("id", data[i].name);
          newLi.appendChild(newA);
          newA.innerHTML= (data[i].name);
      }

  }
}*/

// Affichage des produits appareil photo
fetch("http://localhost:3000/api/cameras")
.then(response => {
  if(response.ok){
    main.appendChild(newUl);
    newUl.setAttribute("class", "list-group") 
    return response.json()  
}
  else {
    console.log("erreur : " + response.status);
  }
})
.then(data => {
  for (let i in data){
    const newLi= document.createElement("li");
    newLi.setAttribute("class", "list-group-item");
    newUl.appendChild(newLi);
    const newImage= document.createElement("img");
    newImage.setAttribute("src", data[i].imageUrl);
    newImage.style.maxWidth="100px";
    newImage.style.marginRight="20px";
    newLi.appendChild(newImage);
    const newH= document.createElement("h2");
    newH.setAttribute("class", "list-group-item-action")
    newH.style.display = "inline-block";
    newH.style.width = "120px";
    newH.style.fontSize = "15px";
    newH.innerHTML= (data[i].name);
    newLi.appendChild(newH);
    const newA= document.createElement("a");
    newA.innerHTML= "voir";
    newA.setAttribute("href", "../../produit.html");
    newA.setAttribute("id", data[i].name);
    newA.style.display= "inline-block";
    newA.style.textAlign= "center";
    newA.style.width = "50px";
    newA.style.border = "1px solid black";
    newA.style.cursor= "pointer";
    newLi.appendChild(newA);
      }
      // paramétrage du bouton/lien "voir" avec localStorage du produit et lien vers la page "produit.html"
      let buttonZurss = document.getElementById("Zurss 50S");
      let dataZurss= JSON.stringify(data[0]);
      buttonZurss.addEventListener("click", function()
      {
        localStorage.setItem("product", dataZurss);

      }
      );
      let buttonHirsch = document.getElementById("Hirsch 400DTS");
      let dataHirsch= JSON.stringify(data[1]);
      buttonHirsch.addEventListener("click", function()
      {
        localStorage.setItem("product", dataHirsch);

      }
      );
      let buttonFranck = document.getElementById("Franck JS 105");
      let dataFranck= JSON.stringify(data[2]);
      buttonFranck.addEventListener("click", function()
      {
        localStorage.setItem("product", dataFranck);

      }
      );
      let buttonKuros = document.getElementById("Kuros TTS");
      let dataKuros= JSON.stringify(data[3]);
      buttonKuros.addEventListener("click", function()
      {
        localStorage.setItem("product", dataKuros);

      }
      );
      let buttonKatatone = document.getElementById("Katatone");
      let dataKatatone= JSON.stringify(data[4]);
      buttonKatatone.addEventListener("click", function()
      {
        localStorage.setItem("product", dataKatatone);

      }
      );
    })
    //.catch : gère les erreurs au global dans la portée.
.catch(function(err) {
  alert("une erreur est survenue")
})

// localstorage de l'objet au click sur bouton


    /* A FAIRE
    
Utiliser les promesses (c’est un objet existant en JS qu’on utilise pour stocker des besoins) : il faut que je crée une classe et des promesses (pour éviter d’appeler l’api tout le temps, on va créer des promesses pour stocker des objets et ne pas avoir besoin de rappeler l’API. Je paramètre le temps de rafraichissement des promesses. Les API ont des limites en termes d’appel (5fois en 10 secondes). */

