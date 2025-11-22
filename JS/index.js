const productosContainer = document.querySelector(".seccion-productos");
const reseñasContainer = document.querySelector(".seccion-reseñas");

//Sección productos
fetch("https://dummyjson.com/products")

.then((response)=> response.json())

.then((data)=> {
    const products = data.products.slice(0, 8)

    let productosHTML = "";
    for (let i = 0; i < products.length; i++) {
        const prod = products[i];

        productosHTML += 
            `
            <article class="producto">
                <img src="${prod.thumbnail}" alt="${prod.tittle}">
                <h3>${prod.title}</h3>
                <p>${prod.price}</p>
                <a href="./detalle.html" class="info">Más info</a>
                <a href="./carrito.html" class="compra">Agregar al carrito</a>
            </article>
            
            `    
    }

    productosContainer.innerHTML = productosHTML;


//Sección reseñas
let reviews = [];
for (let i = 0; i < products.length; i++) {
    const prod = products[i];

    if(prod.reviews){
        reviews = reviews.concat(prod.reviews);
    }
}


reviews = reviews.slice(0, 10);

let reviewsHTML = "";
for (let i = 0; i < reviews.length; i++) {
    const review = reviews[i];
    
    reviewsHTML += 
        `
        <div class="reseña">
           <h4>${review.reviewerName}</h4>
           <p>${review.comment}</p>
           <h5>Fecha: ${new Date(review.date).toLocaleDateString()}</h5>
        </div>

        `   
}

reseñasContainer.innerHTML = reviewsHTML;

})

.catch((error)=> console.log(error))






























/*
<article class="producto">
    <img src="./img/river.webp" alt="Camiseta titular River Plate 2025">
    <h3>Camiseta titular River Plate 2025</h3>
    <p>$119.999</p>
    <a href="./detalle.html" class="info">Más info</a>
    <a href="./carrito.html" class="compra">Agregar al carrito</a>
</article>

<div class="reseña">
    <h4>Martín Roldán</h4>
    <p>Excelente calidad, la tela es muy cómoda y el envío llegó antes de lo esperado.</p>
    <h5>Fecha: 09/10/2025</h5>
</div>
*/



