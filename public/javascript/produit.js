let myProduct= JSON.parse(localStorage.getItem("product"));
const main = document.getElementById("main");
const titleProduct = document.getElementById("titleProduct");
const imgProduct = document.getElementById("imgProduct");
const descript = document.getElementById("descript");
const price = document.getElementById("price");

titleProduct.innerHTML = (myProduct.name);
imgProduct.src = (myProduct.imageUrl);
descript.innerHTML = "Description : </br>" + (myProduct.description);
price.innerHTML = "Prix : </br>" + (myProduct.price);


