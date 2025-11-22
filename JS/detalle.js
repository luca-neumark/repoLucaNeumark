const queryString = location.search;
const stringObj = new URLSearchParams(queryString);
const id = stringObj.get("id");


const title = document.querySelector("#prod-title");
const image = document.querySelector("#prod-img");
const price = document.querySelector("#prod-price");
const buyBtn = document.querySelector("#buy-btn");
const prodSize = document.querySelector("#prod-size");
const prodLongDesc = document.querySelector("#prod-longdesc");
const reviewsBOx = document.querySelector("#reviews");


fetch(`https://dummyjson.com/products/${id}`)

.then((response)=> response.json())

.then((data)=> {
    title.textContent = data.title;
    image.src = data.thumbnail;
    price.textContent = `$${data.price}`
    buyBtn.href = `./carrito.html?id=${data.id}`;  
    
    prodSize.textContent = `${data.dimensions.width} x ${data.dimensions.height} x ${data.dimensions.depth} cm`
    
    prodLongDesc.textContent = data.description;

    let reviewsHTML = "";
    data.reviews.forEach(review => {
        reviewsHTML += 
           `
            <div class="reseña">
               <h4>${review.reviewerName}</h4>
               <p>${review.comment}</p>
               <h5>Fecha: ${new Date(review.date).toLocaleDateString()}</h5>
            </div>

           `  
    });

    reviewsBOx.innerHTML = reviewsHTML;

})

.catch((error)=> console.log(error))




