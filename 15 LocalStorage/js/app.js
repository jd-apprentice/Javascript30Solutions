// Variables
const addItems = document.querySelector('.add-items');
const itemValue = document.querySelector('#item-value');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('Platos')) || [];

// When the page loads, check if there are any items in localStorage
window.onload = () => {
    tapasList(items, itemsList);
}

// Add items to the list
addItems.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = itemValue.value;
    const item = {
        text,
        done: false
    }
    items.push(item);
    tapasList(items, itemsList);
    localStorage.setItem('Platos', JSON.stringify(items)); // Save the items to localStorage
    addItems.reset();
});

// Persist the checked items
itemsList.addEventListener('click', (e) => {
    if (!e.target.matches('input')) return;
    const itemIndex = e.target.dataset.index;
    items[itemIndex].done = !items[itemIndex].done;
    localStorage.setItem('Platos', JSON.stringify(items));
    tapasList(items, itemsList); // Update the list
});

// Render the list of items
const tapasList = (plates = [], platesList) => {
    platesList.innerHTML = plates.map((plate, index) => {
        return `<li>
        <input type="checkbox" data-index=${index} id="item${index}" ${plate.done ? 'checked' : ''}>
        <label for="item${index}">${plate.text}</label>
        </li>`;
    }
    ).join(''); // Join the array of strings into a single string
}

