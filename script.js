// App State
let items = [];
let storeMode = false;

// DOM Elements
const itemNameInput = document.getElementById('itemName');
const expiryDateInput = document.getElementById('expiryDate');
const priceInput = document.getElementById('price');
const addBtn = document.getElementById('addBtn');
const shoppingListEl = document.getElementById('shoppingList');
const emptyStateEl = document.getElementById('emptyState');
const itemCountSpan = document.getElementById('itemCount');
const urgentCountSpan = document.getElementById('urgentCount');
const totalCostSpan = document.getElementById('totalCost');
const clearBoughtBtn = document.getElementById('clearBoughtBtn');
const clearAllBtn = document.getElementById('clearAllBtn');
const storeModeBtn = document.getElementById('storeModeBtn');
const fridgeModeBtn = document.getElementById('fridgeModeBtn');

// Initialize
function init() {
    loadFromLocalStorage();
    setDefaultExpiryDate();
    render();
    setupEventListeners();
}

function setDefaultExpiryDate() {
    const today = new Date();
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + 5);
    expiryDateInput.value = futureDate.toISOString().split('T')[0];
}

function loadFromLocalStorage() {
    const saved = localStorage.getItem('smartFridgeList');
    if (saved) {
        items = JSON.parse(saved);
    } else {
        // Add sample items for demonstration
        items = [];
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);
        const nextWeek = new Date(today);
        nextWeek.setDate(today.getDate() + 7);
        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);
        
        items.push({
            id: Date.now() + 1,
            name: 'Fresh Milk',
            expiry: tomorrow.toISOString().split('T')[0],
            price: 3.99,
            bought: false
        });
        items.push({
            id: Date.now() + 2,
            name: 'Organic Eggs',
            expiry: nextWeek.toISOString().split('T')[0],
            price: 5.49,
            bought: false
        });
        items.push({
            id: Date.now() + 3,
            name: 'Chicken Breast',
            expiry: yesterday.toISOString().split('T')[0],
            price: 8.99,
            bought: false
        });
    }
}

function saveToLocalStorage() {
    localStorage.setItem('smartFridgeList', JSON.stringify(items));
}

function getExpiryStatus(expiryDateStr) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const expiry = new Date(expiryDateStr);
    expiry.setHours(0, 0, 0, 0);
    const daysLeft = Math.ceil((expiry - today) / (1000 * 3600 * 24));
    
    if (daysLeft < 0) return 'expired';
    if (daysLeft <= 2) return 'urgent';
    return 'fresh';
}

function formatExpiryDisplay(expiryDateStr) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const expiry = new Date(expiryDateStr);
    expiry.setHours(0, 0, 0, 0);
    const daysLeft = Math.ceil((expiry - today) / (1000 * 3600 * 24));
    
    if (daysLeft < 0) return `Expired ${Math.abs(daysLeft)} days ago`;
    if (daysLeft === 0) return 'Expires today';
    if (daysLeft === 1) return 'Expires tomorrow';
    return `${daysLeft} days left`;
}

function sortItems() {
    items.sort((a, b) => {
        // Bought items go to bottom
        if (a.bought !== b.bought) return a.bought - b.bought;
        
        const statusA = getExpiryStatus(a.expiry);
        const statusB = getExpiryStatus(b.expiry);
        
        // Urgent items come first
        if (statusA === 'urgent' && statusB !== 'urgent') return -1;
        if (statusB === 'urgent' && statusA !== 'urgent') return 1;
        
        // Expired items next
        if (statusA === 'expired' && statusB !== 'expired') return -1;
        if (statusB === 'expired' && statusA !== 'expired') return 1;
        
        // Then sort by expiry date (soonest first)
        return new Date(a.expiry) - new Date(b.expiry);
    });
}

function updateStats() {
    const totalItems = items.length;
    const urgentItems = items.filter(item => !item.bought && getExpiryStatus(item.expiry) === 'urgent').length;
    const totalPrice = items.reduce((sum, item) => sum + (item.price || 0), 0);
    
    itemCountSpan.textContent = totalItems;
    urgentCountSpan.textContent = urgentItems;
    totalCostSpan.textContent = `$${totalPrice.toFixed(2)}`;
}

function render() {
    sortItems();
    
    if (items.length === 0) {
        shoppingListEl.innerHTML = '';
        emptyStateEl.classList.remove('hidden');
    } else {
        emptyStateEl.classList.add('hidden');
        shoppingListEl.innerHTML = items.map(item => createItemHTML(item)).join('');
    }
    
    updateStats();
    attachDeleteEvents();
    attachCheckboxEvents();
}

function createItemHTML(item) {
    const status = getExpiryStatus(item.expiry);
    const expiryDisplay = formatExpiryDisplay(item.expiry);
    const boughtClass = item.bought ? 'bought' : '';
    
    let statusIcon = '';
    if (status === 'fresh') statusIcon = '<i class="fas fa-leaf"></i>';
    if (status === 'urgent') statusIcon = '<i class="fas fa-exclamation-triangle"></i>';
    if (status === 'expired') statusIcon = '<i class="fas fa-skull-crossbones"></i>';
    
    return `
        <li class="item ${status} ${boughtClass}" data-id="${item.id}">
            <input type="checkbox" class="item-checkbox" ${item.bought ? 'checked' : ''}>
            <div class="item-content">
                <div class="item-info">
                    <span class="item-name">${escapeHtml(item.name)}</span>
                    <span class="expiry-badge">
                        ${statusIcon}
                        ${expiryDisplay}
                    </span>
                </div>
                <div class="item-price">
                    $${(item.price || 0).toFixed(2)}
                </div>
            </div>
            <button class="delete-item" data-id="${item.id}">
                <i class="fas fa-trash-alt"></i>
            </button>
        </li>
    `;
}

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

function attachDeleteEvents() {
    document.querySelectorAll('.delete-item').forEach(btn => {
        btn.removeEventListener('click', handleDelete);
        btn.addEventListener('click', handleDelete);
    });
}

function handleDelete(e) {
    const btn = e.currentTarget;
    const id = parseInt(btn.getAttribute('data-id'));
    items = items.filter(item => item.id !== id);
    saveToLocalStorage();
    render();
}

function attachCheckboxEvents() {
    document.querySelectorAll('.item-checkbox').forEach(checkbox => {
        checkbox.removeEventListener('change', handleCheckboxChange);
        checkbox.addEventListener('change', handleCheckboxChange);
    });
}

function handleCheckboxChange(e) {
    const checkbox = e.currentTarget;
    const itemEl = checkbox.closest('.item');
    const id = parseInt(itemEl.getAttribute('data-id'));
    const item = items.find(i => i.id === id);
    if (item) {
        item.bought = checkbox.checked;
        saveToLocalStorage();
        render();
    }
}

function addNewItem() {
    const name = itemNameInput.value.trim();
    const expiry = expiryDateInput.value;
    const price = parseFloat(priceInput.value) || 0;
    
    if (!name) {
        alert('Please enter an item name');
        return;
    }
    
    if (!expiry) {
        alert('Please select an expiry date');
        return;
    }
    
    const newItem = {
        id: Date.now(),
        name: name,
        expiry: expiry,
        price: price,
        bought: false
    };
    
    items.push(newItem);
    saveToLocalStorage();
    
    // Clear inputs
    itemNameInput.value = '';
    priceInput.value = '';
    setDefaultExpiryDate();
    
    render();
    itemNameInput.focus();
}

function clearBoughtItems() {
    const beforeCount = items.length;
    items = items.filter(item => !item.bought);
    if (beforeCount !== items.length) {
        saveToLocalStorage();
        render();
    }
}

function clearAllItems() {
    if (confirm('Are you sure you want to delete all items? This cannot be undone.')) {
        items = [];
        saveToLocalStorage();
        render();
    }
}

function toggleStoreMode() {
    storeMode = true;
    document.body.classList.add('store-mode');
    storeModeBtn.classList.add('active');
    fridgeModeBtn.classList.remove('active');
}

function toggleFridgeMode() {
    storeMode = false;
    document.body.classList.remove('store-mode');
    fridgeModeBtn.classList.add('active');
    storeModeBtn.classList.remove('active');
}

function setupEventListeners() {
    addBtn.addEventListener('click', addNewItem);
    clearBoughtBtn.addEventListener('click', clearBoughtItems);
    clearAllBtn.addEventListener('click', clearAllItems);
    storeModeBtn.addEventListener('click', toggleStoreMode);
    fridgeModeBtn.addEventListener('click', toggleFridgeMode);
    
    itemNameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addNewItem();
    });
}

// Start the app
init();