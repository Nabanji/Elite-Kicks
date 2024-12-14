// Navbar btn
const sidebarBtn = document.querySelector('.sidebar');

// Open sidebar
const sideBar = document.querySelector('.nav-links');

// Close sidebar
const closeSidebar = document.querySelector('.fa-times');


const cartContainer = document.getElementById('cart-container');
const cart = JSON.parse(localStorage.getItem('cart')) || [];

document.addEventListener('DOMContentLoaded', () => {

    sidebarBtn.addEventListener('click', () => {
        console.log('You clicked');
        sideBar.style.marginRight = '0px';
        sideBar.style.transition = '.4s all ease';
    })

    closeSidebar.addEventListener('click', () => {
        sideBar.style.marginRight = '-200px';
    })


    // cartContainer.style.border = '1px solid black';
    cartContainer.style.display = 'flex';

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    cart.forEach((item, index) => {
        const card = document.createElement('div');
        card.classList.add('card', 'mb-3');
        card.style.width = '18rem';

        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.name;
        img.classList.add('card-img-top');

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const title = document.createElement('h5');
        title.classList.add('card-title');
        title.textContent = item.name;

        const description = document.createElement('p');
        description.classList.add('card-text');
        description.textContent = item.description;

        const price = document.createElement('p');
        price.classList.add('card-text', 'text-muted');
        price.textContent = `Price: ${item.price}`;

        const removeBtn = document.createElement('button');
        removeBtn.classList.add('btn', 'btn-danger');
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', () => {
            cart.splice(index, 1); // Remove item from array
            localStorage.setItem('cart', JSON.stringify(cart));
            location.reload(); // Refresh the page
        });

        cardBody.appendChild(title);
        cardBody.appendChild(description);
        cardBody.appendChild(price);
        cardBody.appendChild(removeBtn);
        card.appendChild(img);
        card.appendChild(cardBody);

        card.style.margin = '6px';

        cartContainer.appendChild(card);

    });
});
