'use strict';

var wishlistArray = {}; // global dataset for storing wishlist items
// used object instead of array to simplify addition and deletion of item from the dataset

// setup function when the page is loaded and add event handlers to 
// all the buttons on the product page
function setup() {
  var buttons = document.querySelectorAll('button');
  
  for (var button of buttons) {
    button.addEventListener('click', (e) => addItem(e));
  }

  // add event listener to the wishlist section for removing item from wishlist [additional ]
  // instead of adding it for all of the remove buttons (Event bubbling)
  document.querySelector('#wishlist').addEventListener('click', (e) => removeItem(e));
}

window.onload = setup;

// this function adds item singly to wishlist
function addItem (e) {
  var itemId = `item-${e.target.id}`; // identifies which item was clicked 

  // check if item exists in the wishlist or not and won't duplicate the item in the list
  if (!wishlistArray[itemId]) {
    wishlistArray[itemId] = itemId;
    
    var wishlist = document.getElementById('wishlist');
    var item = document.getElementById(itemId);
    
    wishlist.innerHTML += `<tr id=${itemId}>${item.innerHTML}</tr>`;

    // change the content of the button to remove type
    document.querySelector('#wishlist').querySelector(`#${itemId}`).querySelector('button').innerHTML = 'Remove from list'
  }
}

// removes item from the wishlist based on the button clicked 
function removeItem (e) {
  var itemId = `item-${e.target.id}`,
    item = document.querySelector('#wishlist').querySelector(`#item-${e.target.id}`);

    item.remove();  // remove item from the DOM tree
    delete wishlistArray[itemId]; // remove item from the wishlist dataset
}


// Added additional functionality to remove item from the wishlist as this gives ability
// to the customer to remove products from the wishlist which are no more required. And this 
// also ensures that your wishlist won't get filled easily when you do some cleanup stuff on it