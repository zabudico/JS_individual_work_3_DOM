/**
 * Represents a transaction.
 * @typedef {Object} Transaction
 * @property {string} id - The unique identifier of the transaction.
 * @property {string} date - The date and time when the transaction occurred.
 * @property {number} amount - The amount of the transaction. Positive for income, negative for expense.
 * @property {string} category - The category of the transaction.
 * @property {string} description - The description of the transaction.
 */

/**
 * Array to store transactions.
 * @type {Transaction[]}
 */
let transactions = [];

/**
 * Adds a transaction to the transactions array.
 * @param {Event} event - The submit event triggering the transaction addition.
 */
function addTransaction(event) {
    event.preventDefault(); // Prevent form submission and page reload

    // Get form input values
    const amount = parseFloat(document.getElementById('amount').value);
    const category = document.getElementById('category').value;
    const description = document.getElementById('description').value;
    const date = new Date().toLocaleString(); // Current date and time

    // Create transaction object
    const transaction = {
        id: generateId(),
        date,
        amount,
        category,
        description
    };

    // Add transaction to the array
    transactions.push(transaction);

    // Display transaction in the table
    displayTransaction(transaction);

    // Recalculate total amount
    calculateTotal();

    // Clear form fields after adding transaction
    document.getElementById('amount').value = '';
    document.getElementById('category').value = 'food';
    document.getElementById('description').value = '';
}

/**
 * Generates a unique ID for a transaction.
 * @returns {string} The generated unique ID.
 */
function generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

/**
 * Displays a transaction in the table.
 * @param {Transaction} transaction - The transaction to display.
 */
function displayTransaction(transaction) {
    const tableBody = document.querySelector('#transactionTable tbody');

    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${transaction.id}</td>
        <td>${transaction.date}</td>
        <td>${transaction.category}</td>
        <td>${transaction.description.split(' ').slice(0, 4).join(' ')}</td>
        <td><button onclick="deleteTransaction('${transaction.id}')">Удалить</button></td>
    `;

    // Set row background color based on amount
    if (transaction.amount >= 0) {
        row.style.backgroundColor = 'lightgreen';
    } else {
        row.style.backgroundColor = 'salmon';
    }

    tableBody.appendChild(row);
}

/**
 * Deletes a transaction from the transactions array.
 * @param {string} id - The ID of the transaction to delete.
 */
function deleteTransaction(id) {
    transactions = transactions.filter(transaction => transaction.id !== id);
    renderTransactions();
    calculateTotal();
}

/**
 * Renders all transactions in the table.
 */
function renderTransactions() {
    const tableBody = document.querySelector('#transactionTable tbody');
    tableBody.innerHTML = '';

    transactions.forEach(transaction => {
        displayTransaction(transaction);
    });
}

/**
 * Calculates the total amount of all transactions and displays it.
 */
function calculateTotal() {
    const totalAmount = transactions.reduce((total, transaction) => {
        return total + transaction.amount;
    }, 0);

    document.getElementById('totalAmount').textContent = `Общая сумма: ${totalAmount}`;
}

// Event listener for form submission
document.getElementById('transactionForm').addEventListener('submit', addTransaction);

// Initialize on page load
renderTransactions();
calculateTotal();


/**
 * Calculates the total amount of all transactions and updates the displayed total amount.
 * Also applies styles to the total amount element based on its sign.
 */
function calculateTotal() {
    /**
     * Reduces the array of transactions to calculate the total amount.
     * @param {number} total - The accumulator for the total amount.
     * @param {Transaction} transaction - The current transaction being processed.
     * @returns {number} The updated total amount after adding the current transaction's amount.
     */
    const totalAmount = transactions.reduce((total, transaction) => {
        return total + transaction.amount;
    }, 0);

    /**
     * The element where the total amount is displayed.
     * @type {HTMLElement}
     */
    const totalAmountElement = document.getElementById('totalAmount');

    // Update the text content of the total amount element
    totalAmountElement.textContent = `Общая сумма: ${totalAmount}`;

    // Add or remove the 'negative' class based on the sign of the total amount
    if (totalAmount < 0) {
        totalAmountElement.classList.add('negative'); // Apply 'negative' class for negative total amount
    } else {
        totalAmountElement.classList.remove('negative'); // Remove 'negative' class for non-negative total amount
    }
}
