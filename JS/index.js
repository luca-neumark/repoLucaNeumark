const productosContainer = document.querySelector(".seccion-productos");
const reseñasContainer = document.querySelector(".seccion-reseñas");

//Sección productos
fetch("https://dummyjson.com/products")

.then((response)=> response.json())

.then((data)=> {
    const products = data.products.slice(0, 10)

    let productosHTML = "";
    for (let i = 0; i < products.length; i++) {
        const prod = products[i];

        productosHTML += 
            `
            <article class="producto">
                <img src="${prod.thumbnail}" alt="${prod.tittle}">
                <h3>${prod.title}</h3>
                <p>${prod.price}</p>
                <a href="./detalle.html?id=${prod.id}" class="info">Más info</a>
                <a href="./carrito.html?id=${prod.id}" class="compra">Agregar al carrito</a>
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

