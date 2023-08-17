const bar=document.getElementById('bar');
const nav=document.getElementById('navbar');
const closeBtn=document.getElementById('close');
var list=document.querySelector('.pro-container')
var list1=document.querySelector('.prod-container');
var list2=document.querySelector('.produ-container');
let quantity = document.querySelector('.quantity');
let total = document.querySelector('.total');
let carts=document.getElementById('cart');



bar.addEventListener('click', ()=>{
    nav.style.transform='translate(0)'
})
closeBtn.addEventListener('click', ()=>{
    nav.style.transform='translateX(100%)'  
})



let products=[
    {
        id:1,
        image:'f1.jpg',
        brand:'adidas',
        name:'Cartoon Astronaut T-shirts',
        price:499

    },
    {
        id:2,
        image:'f2.jpg',
        brand:'adidas',
        name:'Cartoon Astronaut T-shirts',
        price:499

    },
    {
        id:3,
        image:'f3.jpg',
        brand:'adidas',
        name:'Cartoon Astronaut T-shirts',
        price:499

    },
    {
        id:4,
        image:'f4.jpg',
        brand:'adidas',
        name:'Cartoon Astronaut T-shirts',
        price:499

    },
    {
        id:5,
        image:'f5.jpg',
        brand:'adidas',
        name:'Cartoon Astronaut T-shirts',
        price:499

    },
    {
        id:6,
        image:'f6.jpg',
        brand:'adidas',
        name:'Cartoon Astronaut T-shirts',
        price:499

    },
    {
        id:7,
        image:'f7.jpg',
        brand:'adidas',
        name:'Cartoon Astronaut T-shirts',
        price:499

    },
    {
        id:8,
        image:'f8.jpg',
        brand:'adidas',
        name:'Cartoon Astronaut T-shirts',
        price:499

    },
    {
        id:9,
        image:'n1.jpg',
        brand:'adidas',
        name:'Cartoon Astronaut T-shirts',
        price:499

    },
    {
        id:10,
        image:'n2.jpg',
        brand:'adidas',
        name:'Cartoon Astronaut T-shirts',
        price:499

    },
    {
        id:11,
        image:'n3.jpg',
        brand:'adidas',
        name:'Cartoon Astronaut T-shirts',
        price:499

    },
    {
        id:12,
        image:'n4.jpg',
        brand:'adidas',
        name:'Cartoon Astronaut T-shirts',
        price:499

    },
    {
        id:13,
        image:'n5.jpg',
        brand:'adidas',
        name:'Cartoon Astronaut T-shirts',
        price:499

    },
    {
        id:14,
        image:'n6.jpg',
        brand:'adidas',
        name:'Cartoon Astronaut T-shirts',
        price:499

    },
    {
        id:15,
        image:'n7.jpg',
        brand:'adidas',
        name:'Cartoon Astronaut T-shirts',
        price:499

    },
    {
        id:16,
        image:'n8.jpg',
        brand:'adidas',
        name:'Cartoon Astronaut T-shirts',
        price:499

    }
]
let product1=[
    {
        id:111,
        image:'f1.jpg',
        brand:'adidas',
        name:'Cartoon Astronaut T-shirts',
        price:499

    },
    {
        id:222,
        image:'f2.jpg',
        brand:'adidas',
        name:'Cartoon Astronaut T-shirts',
        price:499

    },
    {
        id:33,
        image:'f3.jpg',
        brand:'adidas',
        name:'Cartoon Astronaut T-shirts',
        price:499

    },
    {
        id:44,
        image:'f4.jpg',
        brand:'adidas',
        name:'Cartoon Astronaut T-shirts',
        price:499

    },
    {
        id:55,
        image:'f5.jpg',
        brand:'adidas',
        name:'Cartoon Astronaut T-shirts',
        price:499

    },
    {
        id:66,
        image:'f6.jpg',
        brand:'adidas',
        name:'Cartoon Astronaut T-shirts',
        price:499

    },
    {
        id:77,
        image:'f7.jpg',
        brand:'adidas',
        name:'Cartoon Astronaut T-shirts',
        price:499

    },
    {
        id:88,
        image:'f8.jpg',
        brand:'adidas',
        name:'Cartoon Astronaut T-shirts',
        price:499

    },

]
let product2=[
    {
        id:99,
        image:'n1.jpg',
        brand:'adidas',
        name:'Cartoon Astronaut T-shirts',
        price:499

    },
    {
        id:101,
        image:'n2.jpg',
        brand:'adidas',
        name:'Cartoon Astronaut T-shirts',
        price:499

    },
    {
        id:112,
        image:'n3.jpg',
        brand:'adidas',
        name:'Cartoon Astronaut T-shirts',
        price:499

    },
    {
        id:121,
        image:'n4.jpg',
        brand:'adidas',
        name:'Cartoon Astronaut T-shirts',
        price:499

    },
    {
        id:131,
        image:'n5.jpg',
        brand:'adidas',
        name:'Cartoon Astronaut T-shirts',
        price:499

    },
    {
        id:141,
        image:'n6.jpg',
        brand:'adidas',
        name:'Cartoon Astronaut T-shirts',
        price:499

    },
    {
        id:151,
        image:'n7.jpg',
        brand:'adidas',
        name:'Cartoon Astronaut T-shirts',
        price:499

    },
    {
        id:161,
        image:'n8.jpg',
        brand:'adidas',
        name:'Cartoon Astronaut T-shirts',
        price:499

    }

]



const categories=[...new Set(products.map((item)=>{
    return item
}))]
let i=0;
document.querySelector('.pro-container').innerHTML=categories.map((item)=>{
    var {image,name,brand,price}=item;
    return(
        `
        <div class="product" >
        <img src=images/${image} alt="product" onclick="window.location.href='sproduct.html';"/>
        <div class="des">
          <span>${brand}</span>
          <h5>${name}</h5>
          <div class="star">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <h4>Rs.${price}</h4>
        </div>
        <a href="#"><i class="fa fa-shopping-cart" onClick="addToCart("+(i++)+")"></i></a>
      </div>
        `
    )
}).join('')

var cart=[];
function addToCart(a){
    cart.push({...categories[a]})
    displayCart();

}
function delElement(a){
    cart.splice(a, 1);
    displayCart()
}

function displayCart(a){
    let j=0, total=0;
     document.getElementById('count').innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cart').innerHTML="your cart is empty";
    document.getElementById('total').innerHTML="$"+0+".00";
    }
    else{
        document.getElementById('cart').innerHTML=cart.map((item)=>{
            var{image,name,price}=items;
            total=total+price;
            document.getElementById('total').innerHTML="$ "+total+".00";
            return(
                ` <table>
                <thead>
                    <tr>
                        <td>Remove</td>
                        <td>Image</td>
                        <td>Product</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Sub Total</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><a href="#"><i class="far fa-times-circle" onClick="delElement"></i></a></td>
                        <td><img src=images/${image} alt=""></td>
                        <td>${name}</td>
                        <td>Rs. ${price}</td>
                        <td><input type="number" value="1"></td>
                        <td>Rs. ${price}</td>
                    </tr>
                   
                </tbody>
            </table> `  
            )

        }).join('')
    }
}

