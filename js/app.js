'use strict'

//---------------------------------------Global Variables-----------------------------------------//

const productSelectElem = document.getElementsByTagName('IMG');
const leftImgElem = document.getElementById('left_product_img');
const centerImgElem = document.getElementById('center_product_img');
const rightImgElem = document.getElementById('right_product_img');
const leftH2Elem = document.getElementById('left_product_h2');
const centerH2Elem = document.getElementById('center_product_h2');
const rightH2Elem = document.getElementById('right_product_h2');
const productUlElem = document.getElementById('product-clicks');

let voteCounter = 0;
Products.allProducts = [];
let leftProduct = null;
let rightProduct = null;
let centerProduct = null;


// ----------------------------------- Constructor Functions -------------------------------------//

function Products(name, image) {
  this.name = name;
  this.image = image;
  this.timeshown = 0;
  this.votes= 0;

  Products.allProducts.push(this);

}

// ----------------------------------- Prototype Methods --------------------------------//

Products.prototype.renderSingleProduct = function(imgPosition, h2Position){
  imgPosition.addEventListener('click', handleClick);
  imgPosition.src = this.image;
  imgPosition.alt = `this is an image of a ${this.name}`;
  h2Position.textContent = this.name;
  this.timeshown++;

}


//---------------------------------- Global Functions -----------------------------------------//

function whichThreeProducts() {
  let leftProductIndex = Math.floor(Math.random() * Products.allProducts.length);
  leftProduct = Products.allProducts[leftProductIndex]

  let centerProductIndex = Math.floor(Math.random() * Products.allProducts.length);
  centerProduct = Products.allProducts[centerProductIndex]
    
    while(centerProduct === null || centerProduct === leftProduct || centerProduct === rightProduct){
      centerProductIndex = Math.floor(Math.random() * Products.allProducts.length);
      centerProduct = Products.allProducts[centerProductIndex]
    
    }

  let rightProductIndex = Math.floor(Math.random() * Products.allProducts.length)
  rightProduct = Products.allProducts[rightProductIndex]
    
    while(rightProduct === null || rightProduct === centerProduct || rightProduct === leftProduct){
      rightProductIndex = Math.floor(Math.random() * Products.allProducts.length);
      rightProduct = Products.allProducts[rightProductIndex];
    }

  leftProduct.renderSingleProduct(leftImgElem, leftH2Elem);
  centerProduct.renderSingleProduct(centerImgElem, centerH2Elem);
  rightProduct.renderSingleProduct(rightImgElem, rightH2Elem);
}

function renderProductResults(){
  productUlElem.innerHTML = '';

  for (let product of Products.allProducts){
    let liElem = document.createElement('li');
    liElem.textContent = `${product.name}: ${product.votes}`;
    productUlElem.appendChild(liElem)
  }
}


// --------------------------------------------- Event Creation -------------------------------//

function handleClick(event){
  let id = event.target.id;
  voteCounter++
  if (id === 'right_product_img' ||id === 'center_product_img' || id === 'left_product_img'){

    if (id === 'right_product_img'){
      rightProduct.votes++;
      } else if('center_product_img'){
      centerProduct.votes++;
      } else {
      leftProduct.votes++
      }
      whichThreeProducts();
  } else{
      alert("Please Choose A Product")
   
    }

  if (voteCounter === 25){
    renderProductResults();

    leftImgElem.removeEventListener('click', handleClick);
    rightImgElem.removeEventListener('click', handleClick);
    centerImgElem.removeEventListener('click', handleClick);
  }
}

//--------------------------- Call Functions-----------------------------------//
new Products('R2D2 Luggage', './img/bag.jpg');
new Products('Banana Slicer', './img/banana.jpg');
new Products('Tablet/Toilet Paper Roll Combo Stand', './img/bathroom.jpg');
new Products('Open Toed Rain Boots', './img/boots.jpg');
new Products('All in One Breakfast Warmer', './img/breakfast.jpg');
new Products('Meatball BubbleGum', './img/bubblegum.jpg');
new Products('Inverted Chair', './img/chair.jpg');
new Products('Cthulu Figurine', './img/cthulhu.jpg');
new Products('Ducky Doggy Muzzle', './img/dog-duck.jpg');
new Products('Can of Dragon Meat', './img/dragon.jpg');
new Products('Utensil Pens', './img/pen.jpg');
new Products('Pet Mop/Duster Boots', './img/pet-sweep.jpg');
new Products('Pizza Scissor Slicer', './img/scissors.jpg');
new Products('Shark Sleeping Bag', './img/shark.jpg');
new Products('Baby Onesie Sweeeper', './img/sweep.png');
new Products('Tuan Tuan Sleeping Bag', './img/tauntaun.jpg');
new Products('Can of Unicorn Meate', './img/unicorn.jpg');
new Products('Inverted Watering Can', './img/water-can.jpg');

//----------------------------------Event Listener------------------------------//

whichThreeProducts();


