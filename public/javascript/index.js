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

//transformation de la réponse de la requête en objet JSON et gestion erreur serveur
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

//Affichage des produits dans une liste avec création des éléments d'affichage grace à une boucle. Stylage des éléments.
.then(data => {
  for (let i in data){
    const newLi= document.createElement("li");
    newUl.appendChild(newLi);
    newLi.setAttribute("class", "list-group-item");
    const newImage= document.createElement("img");
    newLi.appendChild(newImage);
    newImage.setAttribute("src", data[i].imageUrl);
    newImage.style.maxWidth="100px";
    newImage.style.marginRight="20px";
    const newH= document.createElement("h2");
    newLi.appendChild(newH);
    newH.setAttribute("class", "list-group-item-action")
    newH.style.display = "inline-block";
    newH.style.width = "120px";
    newH.style.fontSize = "15px";
    newH.innerHTML= (data[i].name);
    const newA= document.createElement("a");
    newLi.appendChild(newA);
    newA.innerHTML= "voir";
    newA.setAttribute("href", "../../produit.html");
    newA.setAttribute("id", data[i].name);
    newA.setAttribute("class", "btn btn-primary");
    newA.style.display= "inline-block";
    newA.style.textAlign= "center";
    newA.style.width = "50px";
      }
      // paramétrage du bouton/lien "voir" avec localStorage du produit au clic et lien vers la page "produit.html"
      let buttonZurss = document.getElementById("Zurss 50S");
      let dataZurss= JSON.stringify(data[0]); // je convertis l'objet javascript en JSON pour pouvoir le stocker
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
    //.catch : gère les erreurs au global dans la portée du 2ème then
.catch(function(err) {
  alert("une erreur est survenue")
})


