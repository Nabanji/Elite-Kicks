const products = [
    {name: 'Nike Airforce', description: 'Exclusive Kicks for comfort and luxury',src: 'assets/airforce-blue-removebg-preview.png', price: '$10.00'},
    {name: 'Nike dunks Red', description: 'Exclusive Kicks for comfort and luxury',src: 'assets/red-nike-lows-removebg-preview.png', price: '$10.00'},
    {name: 'Vans', description: 'Exclusive Kicks for comfort and luxury',src: 'assets/vans-removebg-preview.png', price: '$10.00'},
    {name: 'Nike dunks colorway', description: 'Exclusive Kicks for comfort and luxury',src: 'assets/nike-mixed-colors-removebg-preview.png', price: '$10.00'},
    {name: 'Jordan 1', description: 'Exclusive Kicks for comfort and luxury',src: 'assets/jordans-removebg-preview.png', price: '$10.00'},
    {name: 'loafer', description: 'Exclusive Kicks for comfort and luxury',src: 'assets/loafer-removebg-preview.png', price: '$10.00'},
    {name: 'Sply 350', description: 'Exclusive Kicks for comfort and luxury',src: 'assets/sply-removebg-preview.png', price: '$10.00'},
    {name: 'Nike dunks Red', description: 'Exclusive Kicks for comfort and luxury',src: 'assets/red-nike-lows-removebg-preview.png', price: '$10.00'},
    {name: 'Nike Airforce', description: 'Exclusive Kicks for comfort and luxury',src: 'assets/airforce-blue-removebg-preview.png', price: '$10.00'},
    {name: 'Nike dunks colorway', description: 'Exclusive Kicks for comfort and luxury',src: 'assets/nike-mixed-colors-removebg-preview.png', price: '$10.00'},
    {name: 'Jordan 1', description: 'Exclusive Kicks for comfort and luxury',src: 'assets/jordans-removebg-preview.png', price: '$10.00'},
    {name: 'Vans', description: 'Exclusive Kicks for comfort and luxury',src: 'assets/vans-removebg-preview.png', price: '$10.00'}
];

// Global cart array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add items to the cart
function addToCart(product) {
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart)); // Save to localStorage
    alert(`${product.name} has been added to the cart.`);
}

let parent = document.querySelector('.products-container');

document.addEventListener('DOMContentLoaded', (e) => {
    // e.preventDefault();

    const sidebar = document.querySelector(".sidebar");
    const navLinks = document.querySelector('.nav-links');
    const close = document.querySelector('.close');

    sidebar.addEventListener('click', (e) => {
        console.log('Navbar showing');
        // navbar.style.display ='none';
        navLinks.style.marginRight = '0px';
        navLinks.style.transition = '.4s all ease-in-out';
    });

    close.addEventListener('click', () => {
        // console.log('You closed');
        navLinks.style.marginRight = '-200px';
        // navLinks.style.transition = '.4s all ease-in-out';
    })

    for (let i = 0; i < products.length; i++) {
        // Create a new div element for the card
        let newCard = document.createElement('div');
        newCard.classList.add('card');
        newCard.style.width = '18rem';

        // Create an image element
        let img = document.createElement('img');
        img.src = products[i].src; // Replace with your image path
        img.alt = products[i].name;
        img.classList.add('card-img-top');
        img.style.maxWidth = '100%';
        img.style.height =  'auto';
        img.style.margin = '0px auto';

        // Create a card body div
        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        // Add a title to the card body
        let title = document.createElement('h5');
        title.classList.add('card-title');
        title.textContent = products[i].name;

        // Add a paragraph to the card body
        let description = document.createElement('p');
        description.classList.add('card-text');
        description.textContent = products[i].description;

        // Add a button to the card body
        let button = document.createElement('button');
        button.classList.add('btn', 'btn-outline-warning');
        button.textContent = 'Add to Cart';

        // Add event listener to button
        button.addEventListener('click', () => addToCart(products[i]));

        cardBody.appendChild(button);

        // Append elements to their respective parents
        cardBody.appendChild(title);
        cardBody.appendChild(description);
        cardBody.appendChild(button);
        newCard.appendChild(img);
        newCard.appendChild(cardBody);
        parent.appendChild(newCard);
    }
})
