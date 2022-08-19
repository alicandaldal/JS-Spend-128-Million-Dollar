const remaining = document.querySelector(".money");
const productsContainer = document.querySelector(".products-container");

let balance = 128000000;
let products = [
    {name:'umutun kalemi',image:'b1.png',price:40,quentity:0},
    {name:'ali kalemi',image:'b1.png',price:70,quentity:0},
    {name:'veli kalemi',image:'b1.png',price:90,quentity:0},
]
reloadProducts();

function reloadProducts(){
    document.getElementsByClassName('products-container')[0].innerHTML = '';
    products.forEach((product,index) =>{
        document.getElementsByClassName('products-container')[0].innerHTML = document.getElementsByClassName('products-container')[0].innerHTML + `
        <div class="product">
                    <div class="product-image">
                        <img src="`+product.image+`" alt="">
                    </div>
                    <div class="product-content">
                        <p>`+product.name+`</p><br>
                        <p>USD <span class="product-price">`+product.price+`</span></p>
                    </div>
                    <div class="product-buy">
                        <button onclick="sell(`+index+`)" class="btn-sell">Sell</button>
                        <p class="product-quantity">`+product.quentity+`</p>
                        <button onclick="buy(`+index+`)" class="btn-buy">Buy</button>
                    </div>
                </div>
        `;
        });
}

function buy(id){
    const product = products[id];
    if(balance >= Number(product.price)){
    product.quentity = product.quentity +1;
    balance -= Number(product.price);
    reloadProducts();
    document.getElementsByClassName('money')[0].innerHTML = balance; //quantitiy span arttırma
    }
}
function sell(id){
    const product = products[id];
    if(Number(product.quentity) > 0){
    product.quentity = product.quentity -1;
    balance += Number(product.price);
    reloadProducts();
    document.getElementsByClassName('money')[0].innerHTML = balance; //quantitiy span arttırma
    }
}

