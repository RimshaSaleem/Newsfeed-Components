// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/

function menuMaker(array) {
  div1 = document.createElement('div');
  list = document.createElement('ul');
  li1 = document.createElement('li');
  li2 = document.createElement('li');
  li3 = document.createElement('li');
  li4 = document.createElement('li');
  li5 = document.createElement('li');
  li6 = document.createElement('li');
  // append child
  div1.appendChild(list);
  list.appendChild(li1);
  list.appendChild(li2);
  list.appendChild(li3);
  list.appendChild(li4);
  list.appendChild(li5);
  list.appendChild(li6);
// add class
  div1.classList.add('menu');
  li1.textContent = array[0];
  li2.textContent = array[1];
  li3.textContent = array[2];
  li4.textContent = array[3];
  li5.textContent = array[4];
  li6.textContent = array[5];

  menuButton = document.querySelector('.menu-button');
  menuButton.addEventListener('click', (event) => {
  div1.classList.toggle('menu--open');
})

  return div1;
}


const menuList = document.querySelector('.header');
const result = menuMaker(menuItems);
menuList.appendChild(result);

function buttonCreator(buttonText){
  const button = document.createElement('button');
  button.textContent = buttonText;
  button.classList.add('custom');
  button.addEventListener('click', (e) => {
      console.log('click!');
  });
  return button;
}



let firstButton = buttonCreator('click bait');















