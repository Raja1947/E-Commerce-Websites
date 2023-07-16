const bar=document.getElementById('bar');
const nav=document.getElementById('navbar');
const closeBtn=document.getElementById('close');
var list=document.querySelector('.pro-container')
var list1=document.querySelector('.prod-container');
var list2=document.querySelector('.produ-container');
let quantity = document.querySelector('.quantity');
let total = document.querySelector('.total');
let cart=document.getElementById('cart');



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

// let listCard=[];
// function initApp(){
//     product1.map((value, key)=>{
       
//         let newDiv=document.createElement('div');
//         newDiv.classList.add('product');
//         newDiv.innerHTML=`
//         <img src=images/${value.image} alt="product" />
//           <div class="des">
//             <span>${value.brand}</span>
//             <h5>${value.name}</h5>
//             <div class="star">
//               <i class="fa-solid fa-star"></i>
//               <i class="fa-solid fa-star"></i>
//               <i class="fa-solid fa-star"></i>
//               <i class="fa-solid fa-star"></i>
//               <i class="fa-solid fa-star"></i>
//             </div>
//             <h4>Rs ${value.price}</h4>
//           </div>
//           <a href="#"><i class="fa fa-shopping-cart"></i></a>
//         `;
        
//         list2.append(newDiv);
//     })
// }
// initApp();


// let listCard1=[];
// function initApp1(){
//     product2.map((value, key)=>{
       
//         let newDiv1=document.createElement('div');
//         newDiv1.classList.add('product');
//         newDiv1.innerHTML=`
//         <img src=images/${value.image} alt="product" />
//           <div class="des">
//             <span>${value.brand}</span>
//             <h5>${value.name}</h5>
//             <div class="star">
//               <i class="fa-solid fa-star"></i>
//               <i class="fa-solid fa-star"></i>
//               <i class="fa-solid fa-star"></i>
//               <i class="fa-solid fa-star"></i>
//               <i class="fa-solid fa-star"></i>
//             </div>
//             <h4>Rs ${value.price}</h4>
//           </div>
//           <a href="#"><i class="fa fa-shopping-cart"></i></a>
//         `;
        
//         list1.append(newDiv1);
//     })
// }
// initApp1();


let listCard2=[];
function initApp2(){
    products.map((value, key)=>{
       
        let newDiv2=document.createElement('div');
        newDiv2.classList.add('product');
        newDiv2.innerHTML=`
        <img src=images/${value.image} alt="product" />
          <div class="des">
            <span>${value.brand}</span>
            <h5>${value.name}</h5>
            <div class="star">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <h4>Rs ${value.price}</h4>
          </div>
          <a href="#"><i class="fa fa-shopping-cart" onclick="addToCard(${key})"></i></a>
        `;
        
        list.append(newDiv2);
    })
}
initApp2();


function addToCard(key){
    if(listCard2[key]==null){
        listCard2[key]=JSON.parse(JSON.stringify(products[key]));
        listCard2[key].quantity=1;
    }
    reloadCard();

}
function reloadCard(){
    listCard2.innerHTML='';
    let count=0;
    let totalPrice=0;
    listCard2.map((value,key)=>{
        totalPrice=totalPrice+value.price;
        count=count+value.quantity;
        if(value !=null){
            let newDiv3=document.createElement('table')
            console.log('raja')
            newDiv3.innerHTML=`
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
                <td><a href="#"><i class="far fa-times-circle"></i></a></td>
                <td><img src="images/${value.image}"></td>
                <td>${value.name}</td>
                <td>${value.price}</td>
                <td><input type="number" value="1"></td>
                <td>Rs.${value.price.toLocaleString()}</td>
            </tr>
           
        </tbody>
            `;
            cart.append(newDiv3)
           
        }
    })
    total.innerHTML=totalPrice.toLocaleString();
    quantity.innerText=count
}


reloadCard()